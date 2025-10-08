import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/components/header/Header.jsx";
import Footer from "./assets/components/footer/Footer.jsx";

import HomePage from "./assets/pages/homepage/HomePage.jsx";
import ContactPage from "./assets/pages/contactPage/ContactPage.jsx";
import CosmeticPage from "./assets/pages/cosmeticPage/CosmeticPage.jsx";
import ManicurePage from "./assets/pages/manicurePage/ManicurePage.jsx";
import PedicurePage from "./assets/pages/pedicurePage/PedicurePage.jsx";


function App() {

  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kontakty" element={<ContactPage />} />
        <Route path="/kosmetickéSlužby" element={<CosmeticPage />} />
        <Route path="/manikúra" element={<ManicurePage />} />
        <Route path="/pedikúra" element={<PedicurePage />} />
      </Routes>
      
      <Footer />
    </Router>
  )
}

export default App
