import React, { useReducer, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';
import { Tabs, TabList, Tab, TabPanel } from '../components/Tabs';
import ErrorBoundary from '../components/ErrorBoundary';
import Modal from '../components/Modal';
import MouseTracker from '../components/MouseTracker';
import withAuth from '../components/withAuth';

const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'inc': return { count: state.count + 1 };
    case 'dec': return { count: state.count - 1 };
    default: return state;
  }
}

function Dashboard() {
  const [state, dispatchLocal] = useReducer(reducer, initialState);
  const counter = useSelector((s) => s.counter.value);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = React.useState(false);

  const expensiveValue = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 10000; i++) sum += i;
    return sum;
  }, []);

  return (
    <ErrorBoundary>
      <div style={{
        maxWidth: '600px',
        margin: '40px auto',
        padding: '32px',
        background: '#f9f9f9',
        borderRadius: '12px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
      }}>
        <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: 24 }}>Enterprise Dashboard</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
          <button style={{ padding: '8px 16px', background: '#3498db', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }} onClick={() => dispatch(increment())}>Global +</button>
          <button style={{ padding: '8px 16px', background: '#e74c3c', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }} onClick={() => dispatch(decrement())}>Global -</button>
        </div>
        <div style={{ textAlign: 'center', marginBottom: 20 }}><strong>Global Counter:</strong> {counter}</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
          <button style={{ padding: '8px 16px', background: '#27ae60', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }} onClick={() => dispatchLocal({ type: 'inc' })}>Local +</button>
          <button style={{ padding: '8px 16px', background: '#c0392b', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }} onClick={() => dispatchLocal({ type: 'dec' })}>Local -</button>
        </div>
        <div style={{ textAlign: 'center', marginBottom: 20 }}><strong>Local Counter:</strong> {state.count}</div>
        <div style={{ textAlign: 'center', marginBottom: 20 }}><strong>Expensive Value:</strong> {expensiveValue}</div>
      </div>
      <Tabs>
        <TabList>
          <Tab index={0}>Tab 1</Tab>
          <Tab index={1}>Tab 2</Tab>
        </TabList>
        <TabPanel index={0}>
          <div style={{ textAlign: 'center', fontSize: 18, color: '#2980b9' }}>Panel 1 Content: Welcome to Tab 1!</div>
        </TabPanel>
        <TabPanel index={1}>
          <div style={{ textAlign: 'center', fontSize: 18, color: '#27ae60' }}>Panel 2 Content: Here is Tab 2!</div>
        </TabPanel>
      </Tabs>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div>This is a modal using Portal!</div>
      </Modal>
      <MouseTracker render={({ x, y }) => <span>Mouse Position: <strong>{x}</strong>, <strong>{y}</strong></span>} />
    </ErrorBoundary>
  );
}

export default withAuth(Dashboard);
