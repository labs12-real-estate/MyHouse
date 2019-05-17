import React from 'react';

export default function ErrorContainer({ error }) {
  return (
    error && (
      <div className="inline-grid">
        <div className="error">{error}</div>
      </div>
    )
  );
}
