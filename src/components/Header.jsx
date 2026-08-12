import React from 'react';
import { Search, ChevronDown, ChevronUp, Download } from 'lucide-react';

export default function Header({
  totalBooks,
  doneCount,
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  isAllExpanded,
  onToggleExpandAll,
  onExport
}) {
  const percentage = totalBooks > 0 ? Math.round((doneCount / totalBooks) * 100) : 0;

  return (
    <header>
      <div className="eyebrow">Personal Curriculum · No Category Limits</div>
      <h1>
        Peta Realitas & <em>Cara Bicara</em>
      </h1>
      <p className="sub">
        Roadmap baca terurut: alat komunikasi dulu, baru isi. Tujuh lapisan realitas — dari asal-usul kosmos sampai arah masa depan manusia.
      </p>

      {/* Progress summary */}
      <div className="summary">
        <div className="stat">
          <div className="num" id="doneCount">{doneCount}</div>
          <div className="label">Selesai ({percentage}%)</div>
        </div>
        <div className="bar-track">
          <div
            className="bar-fill"
            id="barFill"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="stat">
          <div className="num" id="totalCount">{totalBooks}</div>
          <div className="label">Total Buku</div>
        </div>
      </div>

      {/* Toolbar: Search, Filter Tabs & Actions */}
      <div className="toolbar">
        <div className="search-box">
          <span className="search-icon">
            <Search size={15} />
          </span>
          <input
            type="text"
            placeholder="Cari judul, penulis, deskripsi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-tabs">
          <button
            className={statusFilter === 'all' ? 'active' : ''}
            onClick={() => setStatusFilter('all')}
          >
            Semua ({totalBooks})
          </button>
          <button
            className={statusFilter === 'unread' ? 'active' : ''}
            onClick={() => setStatusFilter('unread')}
          >
            Belum ({totalBooks - doneCount})
          </button>
          <button
            className={statusFilter === 'done' ? 'active' : ''}
            onClick={() => setStatusFilter('done')}
          >
            Selesai ({doneCount})
          </button>
        </div>

        <div className="actions-group">
          <button
            className="action-btn"
            onClick={onToggleExpandAll}
            title={isAllExpanded ? "Tutup semua deskripsi" : "Buka semua deskripsi"}
          >
            {isAllExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            {isAllExpanded ? "Tutup Semua" : "Buka Semua"}
          </button>
          <button className="action-btn" onClick={onExport} title="Ekspor data progress">
            <Download size={13} /> Ekspor
          </button>
        </div>
      </div>
    </header>
  );
}
