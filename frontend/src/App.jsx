import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from "./component/Services";
import Header from "./component/Header";
import Intro from "./component/Intro";
import About from "./component/About";
import Gallery from "./component/Gallery";
import Footer from "./component/Footer";
import Auth from "./component/Auth";
import Schedule from "./component/Schedule";
import { useState } from 'react';

const App = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <Router>
      <div>
        <Header setIsAuthOpen={setIsAuthOpen} />
        <Routes>
          <Route path="/" element={
            <>
              <Intro />
              <About />
              <Services />
              <Gallery />
            </>
          } />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
        <Footer />
        <Auth 
          isOpen={isAuthOpen} 
          onClose={() => setIsAuthOpen(false)}
        />
      </div>
    </Router>
  );
};

export default App;
