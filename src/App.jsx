import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Food from './components/Food';
import Easy from './components/Easy';
import Download from './components/Download';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import PrivacyStatement from './components/PrivacyStatement';
import TermsConditions from './components/TermsConditions';

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const toggleCartVisibility = () => {
    setIsCartVisible(prev => !prev);
  };

  return (
    <Router>
      <div>
        <Navbar toggleCartVisibility={toggleCartVisibility} />
        <Routes>
          <Route 
            path="/signup" 
            element={<Signup />} 
          /> {/* Signup Page */}
          <Route 
            path="/login" 
            element={<Login />} 
          /> {/* Login Page */}
          <Route 
            path="/privacystatement" 
            element={<PrivacyStatement />} 
          /> {/* Login Page */}
          <Route
            path="/termsconditions"
            element={<TermsConditions/>}
          />
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <Food isCartVisible={isCartVisible} />
                <Easy />
                <Download />
                <Footer />
              </>
            } 
          /> {/* Main Content */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
