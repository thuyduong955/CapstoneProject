
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
// import Login from './pages/Login'; // To be created
// import Analytics from './pages/Analytics'; // To be created

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/dashboard/analytics" element={<Analytics />} /> */}
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
