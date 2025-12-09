import React, { useState, useEffect } from 'react';

function MouseTracker({ render }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);
  return (
    <div style={{ textAlign: 'center', margin: '24px 0', fontSize: 18, color: '#34495e' }}>
      {render(pos)}
    </div>
  );
}

export default MouseTracker;
