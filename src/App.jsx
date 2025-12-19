import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/NavbarSection/Navbar';
import { Footer } from '@/components/FooterSection/Footer';
import { Home } from '@/pages/HomePage/Home';
import { About } from '@/pages/AboutPage/About';
import { DesignerCollective } from '@/pages/DesignerCollectivePage/DesignerCollective';
import { GlobalModels } from '@/pages/GlobalModelsPage/GlobalModels';
import { RunwayAcademy } from '@/pages/RunwayAcademyPage/RunwayAcademy';
import { Apply } from '@/pages/ApplyPage/Apply';
import { PageRoute } from '@/constants/types';
import './index.scss';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// New component to handle conditional rendering of Footer based on route
const MainContent = () => {
  const location = useLocation();
  // Check if the current pathname matches the ABOUT route
  const isAboutPage = location.pathname === PageRoute.ABOUT;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path={PageRoute.HOME} element={<Home />} />
          <Route path={PageRoute.ABOUT} element={<About />} />
          <Route path={PageRoute.DESIGNER_COLLECTIVE} element={<DesignerCollective />} />
          <Route path={PageRoute.GLOBAL_MODELS} element={<GlobalModels />} />
          <Route path={PageRoute.RUNWAY_ACADEMY} element={<RunwayAcademy />} />
          <Route path={PageRoute.APPLY} element={<Apply />} />
        </Routes>
      </main>
      
      {/* Conditional Rendering: Show Footer only if it's NOT the About page */}
      {!isAboutPage && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* Render MainContent which contains the conditional Footer logic */}
      <MainContent />
    </Router>
  );
};

export default App;