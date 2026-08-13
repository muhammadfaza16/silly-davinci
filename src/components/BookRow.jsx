import React from 'react';
import { BookOpen, Sparkles, Landmark } from 'lucide-react';

export default function BookRow({
  book,
  isDone,
  isOpen,
  onToggleDone,
  onToggleOpen,
  searchQuery
}) {
  // Utility to highlight search query text if present
  const highlightText = (text) => {
    if (!text) return '';
    if (!searchQuery || !searchQuery.trim()) return text;
    const query = searchQuery.trim();
    const parts = text.split(new RegExp(`(${query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`, 'gi'));

    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={index} className="highlight">{part}</mark>
      ) : (
        part
      )
    );
  };

  // Helper to format year (handles negative numbers like -800 to "800 SM")
  const formatYear = (yearVal) => {
    if (yearVal === null || yearVal === undefined) return '';
    const num = Number(yearVal);
    if (!isNaN(num) && num < 0) {
      return `${Math.abs(num)} SM`;
    }
    return `${yearVal}`;
  };

  return (
    <div className={`book ${isDone ? 'done' : ''} ${isOpen ? 'open' : ''}`} id={book.id}>
      <button
        className="check"
        onClick={(e) => {
          e.stopPropagation();
          onToggleDone(book.id);
        }}
        aria-label={isDone ? "Tandai belum dibaca" : "Tandai selesai dibaca"}
      >
        <svg viewBox="0 0 12 12" fill="none">
          <path
            d="M2 6L4.8 9L10 3"
            stroke="#EDE6D3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <span className="book-text">
        <div
          className="book-row-top"
          onClick={() => onToggleOpen(book.id)}
        >
          <div>
            <div className="book-title">{highlightText(book.title)}</div>
            <div className="book-meta">
              <span>{highlightText(book.author)}</span>
              <span className="dot">·</span>
              <span>{book.category || (book.type === 'fiction' ? 'Fiksi' : 'Non-Fiksi')}</span>
              <span className="dot">·</span>
              <span>{formatYear(book.year)}</span>
              <span className="dot">·</span>
              <span>{book.pages} hlm</span>
            </div>
          </div>

          <button
            className="expand-btn"
            onClick={(e) => {
              e.stopPropagation();
              onToggleOpen(book.id);
            }}
            aria-label="Lihat ringkasan"
          >
            <svg viewBox="0 0 12 12" fill="none">
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="book-desc">
          <div className="desc-container">
            {/* Gagasan Utama */}
            <div className="desc-block">
              <div className="desc-label">
                <BookOpen size={13} className="desc-icon" />
                <span>Gagasan Utama & Sintesis</span>
              </div>
              <p className="desc-main-text">{highlightText(book.desc)}</p>
            </div>

            {/* Poin Kunci */}
            {book.takeaways && book.takeaways.length > 0 && (
              <div className="desc-block">
                <div className="desc-label">
                  <Sparkles size={13} className="desc-icon" />
                  <span>Poin Kunci & Wawasan Filosofis</span>
                </div>
                <ul className="takeaways-list">
                  {book.takeaways.map((item, idx) => (
                    <li key={idx}>
                      <span className="takeaway-bullet">❖</span>
                      <span>{highlightText(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Konteks Bacaan */}
            {book.context && (
              <div className="desc-block context-block">
                <div className="desc-label">
                  <Landmark size={13} className="desc-icon" />
                  <span>Konteks Sejarah & Relevansi Intelektual</span>
                </div>
                <p className="desc-context-text">{highlightText(book.context)}</p>
              </div>
            )}
          </div>
        </div>
      </span>
    </div>
  );
}
