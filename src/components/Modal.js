import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children, open, onClose }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.3)' }}>
      <div style={{ background: '#fff', margin: '100px auto', padding: 20, width: 300 }}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
