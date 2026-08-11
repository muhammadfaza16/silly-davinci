import React, { useRef } from 'react';
import { Search, RotateCcw, ChevronDown, ChevronUp, Download, Upload, CheckCircle2 } from 'lucide-react';

export default function Header({
  totalBooks,
  doneCount,
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  onReset,
  onExpandAll,
  onCollapseAll,
  onExport,
  onImport
}) {
  const percentage = totalBooks > 0 ? Math.round((doneCount / totalBooks) * 100) : 0;
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onImport(file);
      e.target.value = null;
    }
  };

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
          <button className="action-btn" onClick={onExpandAll} title="Buka semua deskripsi">
            <ChevronDown size={13} /> Buka Semua
          </button>
          <button className="action-btn" onClick={onCollapseAll} title="Tutup semua deskripsi">
            <ChevronUp size={13} /> Tutup Semua
          </button>
          <button className="action-btn" onClick={onExport} title="Ekspor data progress">
            <Download size={13} /> Ekspor
          </button>
          <button
            className="action-btn"
            onClick={() => fileInputRef.current?.click()}
            title="Impor data progress"
          >
            <Upload size={13} /> Impor
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept=".json"
            onChange={handleFileChange}
          />
          <button className="action-btn reset" onClick={onReset} title="Reset progress baca">
            <RotateCcw size={13} /> Reset
          </button>
        </div>
      </div>
    </header>
  );
}
