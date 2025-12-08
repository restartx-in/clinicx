import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
// import { Portfolio } from '@/pages/Portfolio';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';
import { PageRoute } from '@/constants/types';
import { Programs } from '@/pages/Programs';
import { Workshop } from '@/pages/Workshop';
import { FashionShow } from '@/pages/FashionShow';
import './index.scss';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path={PageRoute.HOME} element={<Home />} />
            <Route path={PageRoute.PORTFOLIO} element={<Programs />} />
            <Route path={PageRoute.ABOUT} element={<About />} />
            <Route path={PageRoute.CONTACT} element={<Contact />} />
            {/* <Route path={PageRoute.PROGRAMS} element={<Programs />} /> */}
            <Route path={PageRoute.WORKSHOP} element={<Workshop />} />
            <Route path={PageRoute.FASHION_SHOW} element={<FashionShow />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App; 