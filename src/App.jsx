import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Home from "./pages/Home";
import About from "./pages/About/AboutPage";
import Services from "./pages/Services/ServicesPage";
import Industries from "./pages/Industries/IndustriesPage";
import Career from "./pages/Carrers/CareerIndexPage"
import Contact from "./pages/Contact/ContactPage";
import CareerIndexPage from "./pages/Carrers/CareerIndexPage";
import CareerPostPage from "./pages/Carrers/CareerPostPage";
import Quote from "./pages/Quote/QuotePage";
import OurProcessSection from "./components/OurProcessSection";
import Footer from "./components/footer/Footer";
import UIUXDesignPage from "./pages/Services/service-pages/uiux/UIUXDesignPage";
import MobileAppDevelopment from "./pages/Services/service-pages/MobileAppDevelopment/MobileAppDevelopment";
import WebDevelopmentPage from "./pages/Services/service-pages/WebDevelopment/WebDevelopment";
import ElearningPage from "./pages/Services/service-pages/E-Learning/ElearningPage";
import DataAnalytics from "./pages/Services/service-pages/DataAnalytics/DataAnalyticsPage";
import DigitalMarketingPage from "./pages/Services/service-pages/DigitalMarketing/DigitalMarketingPage";
import GamingDevelopmentPage from "./pages/Services/service-pages/GamingDevelopment/GamingDevelopmentPage";
import InternshipProgramsPage from "./pages/Services/service-pages/InternshipPrograms/InternshipProgramsPage";
import AISolutionsPage from "./pages/Services/service-pages/AISolutions/AISolutionsPage";
import OracleFusionPage from "./pages/Services/service-pages/OracleFusion/OracleFusionPage";
import ElearningRoutes from "./pages/Services/service-pages/E-Learning/ElearningPage";
import TechnologyGrid from "./pages/Services/service-pages/E-Learning/sections/TechnologyGrid";
import TechnologyPage from "./pages/Services/service-pages/E-Learning/pages/TechnologyPage";


const App = () => {
  return (
    <Router>
      <Navbar />

      {/* IMPORTANT: push content below navbar */}
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesignPage />} />
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/e-learning-solutions" element={<ElearningPage />} />
          <Route path="/services/game-development" element={<GamingDevelopmentPage />} />
          <Route path="/services/internship-programs" element={<InternshipProgramsPage />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/ai-solutions" element={<AISolutionsPage />} />
          <Route path="/services/oracle-fusion-services" element={<OracleFusionPage />} />
          <Route path="/our-process" element={<OurProcessSection />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<Industries/>} />
          <Route path="/careers" element={<CareerIndexPage />} />
          <Route path="/careers/:slug" element={<CareerPostPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/services/e-learning/*" element={<ElearningRoutes />} />
          <Route path="/services/e-learning" element={<TechnologyGrid />} />
          <Route path="/services/e-learning/:techSlug" element={<TechnologyPage />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
