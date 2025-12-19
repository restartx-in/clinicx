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

const MainContent = () => {
  const location = useLocation(); // Need useLocation to check the route
  // Check if the current pathname matches the ABOUT route
  const hideBrandColumn = location.pathname === PageRoute.ABOUT; // New conditional variable

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
      
      {/* Pass the new prop to Footer. Footer is always rendered. */}
      <Footer hideBrandColumn={hideBrandColumn} />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <MainContent />
    </Router>
  );
};

export default App;