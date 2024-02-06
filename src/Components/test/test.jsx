import React, { useState } from 'react';

function Test() {
  const [activePart, setActivePart] = useState('part-1');

  return (
    <div>
      <div>
        <a href="#part-1" onClick={() => setActivePart('part-1')}>Dashboard</a>
        <a href="#part-2" onClick={() => setActivePart('part-2')}>Recent Updates</a>
        <a href="#part-3" onClick={() => setActivePart('part-3')}>Announcements</a>
      </div>
      <h1>Details</h1>
      <div style={{ display: "flex" }}>
        <div
          id="part-1"
          style={{
            width: '100vw',
            textAlign: 'center',
            background: 'rgba(0,255,0,0.02)',
            display: activePart === 'part-1' ? 'block' : 'none',
          }}
        >
          <h2>Part 1 - Dashboard</h2>
          <p>Content for Part 1 goes here...</p>
        </div>
        <div
          id="part-2"
          style={{
            width: '100vw',
            textAlign: 'center',
            background: 'rgba(0,0,255,0.02)',
            display: activePart === 'part-2' ? 'block' : 'none',
          }}
        >
          <h2>Part 2 - Recent Updates</h2>
          <p>Content for Part 2 goes here...</p>
        </div>
        <div
          id="part-3"
          style={{
            width: '100vw',
            height: '100vh',
            textAlign: 'center',
            background: '#FFFBE9',
            display: activePart === 'part-3' ? 'block' : 'none',
          }}
        >
          <h2>Part 3 - Announcements</h2>
          <p>Content for Part 3 goes here...</p>
        </div>
      </div>
    </div>
  );
}

export default Test;
