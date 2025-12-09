import React, { createContext, useContext, useState } from 'react';

const TabsContext = createContext();

export function Tabs({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </TabsContext.Provider>
  );
}

export function TabList({ children }) {
  return <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 16 }}>{children}</div>;
}

export function Tab({ index, children }) {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  return (
    <button
      style={{
        fontWeight: activeIndex === index ? 'bold' : 'normal',
        padding: '8px 20px',
        background: activeIndex === index ? '#2980b9' : '#ecf0f1',
        color: activeIndex === index ? '#fff' : '#2c3e50',
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer',
        boxShadow: activeIndex === index ? '0 2px 8px rgba(41,128,185,0.15)' : 'none'
      }}
      onClick={() => setActiveIndex(index)}
    >
      {children}
    </button>
  );
}

export function TabPanel({ index, children }) {
  const { activeIndex } = useContext(TabsContext);
  return activeIndex === index ? (
    <div style={{ padding: '24px', background: '#fff', borderRadius: 8, boxShadow: '0 1px 6px rgba(0,0,0,0.07)', marginBottom: 24 }}>
      {children}
    </div>
  ) : null;
}
