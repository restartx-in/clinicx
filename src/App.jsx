
import React from 'react';
// Change HashRouter to BrowserRouter
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/NavbarSection/Navbar';
import { Footer } from '@/components/FooterSection/Footer';
import { Home } from '@/pages/HomePage/Home';
import { EventsProduction } from '@/pages/EventsProductionPage/EventsProduction';
import { Contact } from '@/pages/ContactPage/Contact';
import { PageRoute } from '@/constants/types';
import { Programs } from '@/pages/ProgramPage/Programs';
import { Workshop } from '@/pages/WorkshopPage/Workshop';
import { FashionShow } from '@/pages/FashionShowPage/FashionShow';
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
            <Route path={PageRoute.PROGRAM} element={<Programs />} />
            <Route path={PageRoute.EVENTSPRODUCTION} element={<EventsProduction />} />
            <Route path={PageRoute.CONTACT} element={<Contact />} />
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