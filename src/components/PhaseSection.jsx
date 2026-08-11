import React from 'react';
import BookRow from './BookRow';

export default function PhaseSection({
  phase,
  doneState,
  openState,
  onToggleDone,
  onToggleOpen,
  searchQuery,
  statusFilter
}) {
  // Filter sections and books based on status filter and search query
  let totalPhaseBooks = 0;
  let donePhaseBooks = 0;

  phase.sections.forEach(sec => {
    sec.books.forEach(b => {
      totalPhaseBooks++;
      if (doneState[b.id]) donePhaseBooks++;
    });
  });

  const matchingSections = phase.sections.map(sec => {
    const matchingBooks = sec.books.filter(b => {
      // Filter status
      const isDone = Boolean(doneState[b.id]);
      if (statusFilter === 'unread' && isDone) return false;
      if (statusFilter === 'done' && !isDone) return false;

      // Filter search
      if (searchQuery && searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = b.title.toLowerCase().includes(q);
        const matchesAuthor = b.author.toLowerCase().includes(q);
        const matchesDesc = b.desc.toLowerCase().includes(q);
        const matchesSec = sec.label.toLowerCase().includes(q);
        return matchesTitle || matchesAuthor || matchesDesc || matchesSec;
      }

      return true;
    });

    return {
      ...sec,
      books: matchingBooks
    };
  }).filter(sec => sec.books.length > 0);

  // If search query or filter is active and no books match in this phase, return null
  if (matchingSections.length === 0 && (searchQuery || statusFilter !== 'all')) {
    return null;
  }

  return (
    <section className="phase" id={phase.id}>
      <div className="phase-head">
        <span className={`phase-tag ${phase.tagClass}`}>{phase.tag}</span>
        <span className="phase-title">{phase.title}</span>
        <div className="phase-progress-info">
          <span>{donePhaseBooks}/{totalPhaseBooks} buku</span>
        </div>
      </div>

      <p className="phase-note">{phase.note}</p>

      {matchingSections.map((sec, sIdx) => (
        <React.Fragment key={sIdx}>
          <div className="section-label">{sec.label}</div>
          <div className="book-list">
            {sec.books.map((book) => (
              <BookRow
                key={book.id}
                book={book}
                isDone={Boolean(doneState[book.id])}
                isOpen={Boolean(openState[book.id])}
                onToggleDone={onToggleDone}
                onToggleOpen={onToggleOpen}
                searchQuery={searchQuery}
              />
            ))}
          </div>
        </React.Fragment>
      ))}
    </section>
  );
}
