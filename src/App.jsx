import React, { useState, useEffect, useMemo } from 'react';
import { ROADMAP_DATA } from './data/roadmapData';
import Header from './components/Header';
import PhaseNav from './components/PhaseNav';
import PhaseSection from './components/PhaseSection';
import Footer from './components/Footer';
import { ArrowUp, CheckCircle } from 'lucide-react';

const STORAGE_KEY = 'reading_roadmap_done_v1';

export default function App() {
  // Initialize doneState from localStorage or empty object
  const [doneState, setDoneState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error("Failed to parse saved reading progress", e);
    }
    return {};
  });

  const [openState, setOpenState] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'unread' | 'done'
  const [activePhaseId, setActivePhaseId] = useState('phase-0');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Save doneState to localStorage on every change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(doneState));
    } catch (e) {
      console.error("Failed to save reading progress", e);
    }
  }, [doneState]);

  // Toast timer
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Calculate totals and phase stats
  const { totalBooks, doneCount, phaseStats, allBookIds } = useMemo(() => {
    let total = 0;
    let done = 0;
    const stats = {};
    const ids = [];

    ROADMAP_DATA.forEach((phase) => {
      let pTotal = 0;
      let pDone = 0;

      phase.sections.forEach((sec) => {
        sec.books.forEach((b) => {
          total++;
          pTotal++;
          ids.push(b.id);
          if (doneState[b.id]) {
            done++;
            pDone++;
          }
        });
      });

      stats[phase.id] = { total: pTotal, done: pDone };
    });

    return { totalBooks: total, doneCount: done, phaseStats: stats, allBookIds: ids };
  }, [doneState]);

  // Handle toggling single book done state
  const handleToggleDone = (id) => {
    setDoneState((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Handle toggling single book description open state
  const handleToggleOpen = (id) => {
    setOpenState((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Derive whether all descriptions are currently expanded
  const isAllExpanded = useMemo(() => {
    if (allBookIds.length === 0) return false;
    return allBookIds.every((id) => Boolean(openState[id]));
  }, [allBookIds, openState]);

  // Toggle expand / collapse all
  const handleToggleExpandAll = () => {
    if (isAllExpanded) {
      setOpenState({});
      triggerToast("Semua deskripsi ditutup.");
    } else {
      const nextOpen = {};
      allBookIds.forEach((id) => (nextOpen[id] = true));
      setOpenState(nextOpen);
      triggerToast("Semua deskripsi dibuka.");
    }
  };

  // Export progress as JSON file
  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(doneState, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `peta-realitas-progress-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    triggerToast("Progress berhasil di-ekspor.");
  };

  // Select phase from Nav
  const handleSelectPhase = (phaseId) => {
    setActivePhaseId(phaseId);
    const el = document.getElementById(phaseId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll listener for Back to Top button & active phase tracking
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 300) {
            setShowBackToTop((prev) => (prev ? prev : true));
          } else {
            setShowBackToTop((prev) => (!prev ? prev : false));
          }

          // Track active phase element
          const phaseEls = ROADMAP_DATA.map((p) => document.getElementById(p.id)).filter(Boolean);
          const scrollPos = window.scrollY + 140;

          for (let i = phaseEls.length - 1; i >= 0; i--) {
            if (phaseEls[i].offsetTop <= scrollPos) {
              const targetId = ROADMAP_DATA[i].id;
              setActivePhaseId((prev) => (prev === targetId ? prev : targetId));
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check if any phases match current search/filter
  const hasVisibleResults = useMemo(() => {
    if (!searchQuery && statusFilter === 'all') return true;

    return ROADMAP_DATA.some((phase) => {
      return phase.sections.some((sec) => {
        return sec.books.some((b) => {
          const isDone = Boolean(doneState[b.id]);
          if (statusFilter === 'unread' && isDone) return false;
          if (statusFilter === 'done' && !isDone) return false;

          if (searchQuery && searchQuery.trim() !== '') {
            const q = searchQuery.toLowerCase().trim();
            return (
              b.title.toLowerCase().includes(q) ||
              b.author.toLowerCase().includes(q) ||
              b.desc.toLowerCase().includes(q) ||
              sec.label.toLowerCase().includes(q)
            );
          }
          return true;
        });
      });
    });
  }, [searchQuery, statusFilter, doneState]);

  return (
    <div className="wrap">
      <Header
        totalBooks={totalBooks}
        doneCount={doneCount}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        isAllExpanded={isAllExpanded}
        onToggleExpandAll={handleToggleExpandAll}
        onExport={handleExport}
      />

      <PhaseNav
        phases={ROADMAP_DATA}
        activePhaseId={activePhaseId}
        onSelectPhase={handleSelectPhase}
        phaseStats={phaseStats}
      />

      <main id="phaseContainer">
        {hasVisibleResults ? (
          ROADMAP_DATA.map((phase) => (
            <PhaseSection
              key={phase.id}
              phase={phase}
              doneState={doneState}
              openState={openState}
              onToggleDone={handleToggleDone}
              onToggleOpen={handleToggleOpen}
              searchQuery={searchQuery}
              statusFilter={statusFilter}
            />
          ))
        ) : (
          <div className="empty-state">
            <p>Tidak ada buku yang cocok dengan pencarian atau filter yang dipilih.</p>
          </div>
        )}
      </main>

      <Footer />

      {/* Floating Back to Top */}
      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          title="Kembali ke atas"
          aria-label="Kembali ke atas"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast">
          <CheckCircle size={15} color="#EDE6D3" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
