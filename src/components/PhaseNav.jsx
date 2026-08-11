import React from 'react';

export default function PhaseNav({ phases, activePhaseId, onSelectPhase, phaseStats }) {
  return (
    <div className="phasenav-container">
      <nav className="phasenav" id="phaseNav">
        {phases.map((phase) => {
          const stats = phaseStats[phase.id] || { total: 0, done: 0 };
          const isComplete = stats.total > 0 && stats.done === stats.total;
          const isActive = activePhaseId === phase.id;

          return (
            <button
              key={phase.id}
              className={isActive ? 'active' : ''}
              onClick={() => onSelectPhase(phase.id)}
            >
              {phase.tag}
              {isComplete && <span className="badge-dot" title="Fase ini selesai dibaca" />}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
