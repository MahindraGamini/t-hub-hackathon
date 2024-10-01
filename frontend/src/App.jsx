import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Forms/RegisterForm';
import Login from './components/Forms/LoginForm';
import ForgotPassword from './components/Forms/ForgotForm';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Likes from './components/Dashboard/Like';
import { HistoryProvider } from './context/useHistory';
import PregisterForm from './components/Forms/PRegister';
import PloginForm from './components/Forms/Plogin';
import DoctorDashboard from './components/Dashboard/PdashBoard';

const App = () => {
  return (
    <Router>
      <HistoryProvider>
        <div style={{ backgroundColor: 'black', minHeight: '100vh' }}> 
          <Navbar />
          <Routes>
          <Route path="/psignup" element={<PregisterForm />} />
          <Route path="/plogin" element={<PloginForm />} />

          <Route path='/pdashboard' element={<DoctorDashboard/>}/>
           
            <Route path="/signup" element={<Register />} />
            <Route path="/" element={<Login />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/likes" element={<Likes />} />
          </Routes>
        </div>
      </HistoryProvider>
    </Router>
  );
};

export default App;