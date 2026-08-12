import React from 'react';

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
              <span className={`type-badge ${book.type || 'non-fiction'}`}>
                {book.type === 'fiction' ? 'Fiksi' : 'Non-Fiksi'}
              </span>
              <span className="dot">·</span>
              <span>{highlightText(book.author)}</span>
              <span className="dot">·</span>
              <span>{book.year}</span>
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
            {/* Ringkasan & Tesis Utama */}
            <div className="desc-block">
              <div className="desc-label">Ringkasan & Tesis Utama</div>
              <p className="desc-main-text">{highlightText(book.desc)}</p>
            </div>

            {/* Poin Kunci & Ide Inti */}
            {book.takeaways && book.takeaways.length > 0 && (
              <div className="desc-block">
                <div className="desc-label">Poin Kunci & Ide Inti</div>
                <ul className="takeaways-list">
                  {book.takeaways.map((item, idx) => (
                    <li key={idx}>
                      <span className="takeaway-bullet">✦</span>
                      <span>{highlightText(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Relevansi Kurikulum */}
            {book.context && (
              <div className="desc-block context-block">
                <div className="desc-label">Relevansi dalam Peta Realitas</div>
                <p className="desc-context-text">{highlightText(book.context)}</p>
              </div>
            )}
          </div>
        </div>
      </span>
    </div>
  );
}
