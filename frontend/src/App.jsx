import Services from "./component/Services";
import Header from "./component/Header";
import Intro from "./component/Intro";
import About from "./component/About";
import Gallery from "./component/Gallery";
import Footer from "./component/Footer";
import Auth from "./component/Auth";
import { useState } from 'react';

const App = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div>
      <Header setIsAuthOpen={setIsAuthOpen} />
      <Intro />
      <About />
      <Services />
      <Gallery />
      <Footer />
      <Auth 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)}
      />
    </div>
  );
};

export default App;
