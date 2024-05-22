import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
// import StartupProfile from './pages/StartupProfile';
// import ResourceLibrary from './pages/ResourceLibrary';
// import MentorshipMatching from './pages/MentorshipMatching';
// import InvestmentPortal from './pages/InvestmentPortal';
// import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/startup/:id" element={<PrivateRoute><StartupProfile /></PrivateRoute>} />
          <Route path="/resources" element={<PrivateRoute><ResourceLibrary /></PrivateRoute>} />
          <Route path="/mentorship" element={<PrivateRoute><MentorshipMatching /></PrivateRoute>} />
          <Route path="/investments" element={<PrivateRoute><InvestmentPortal /></PrivateRoute>} /> */}
        </Routes>
        <Footer />
      </div>
  );
};

export default App;