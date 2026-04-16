import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/BackToTop";
import Preloader from "./Components/Preloader";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";
import NotFound from "./Components/Notfound.jsx";
import WhatsAppButton from "./Components/WhatsAppButton";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // ⏳ premium slow reveal

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
