import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToTop from "./helper/scroll-to-top";
import BackToTop from "./helper/back-to-top";
import Footer from "./components/Footer/footer";

const Header = lazy(() => import('./components/Header/Header'));
const Home = lazy(() => import('./pages/home'));
const Clientss = lazy(() => import('./pages/Clients'));
const Contact = lazy(() => import('./pages/Contact'));
const AboutPage = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/Services'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about-us" exact element={<AboutPage />} />
            <Route path="/services" exact element={<ServicesPage />} />
            <Route path="/clients" exact element={<Clientss />} />
            <Route path="/contact-us" exact element={<Contact />} />
        </Routes>      
        <Footer />  
      </Suspense>
      <BackToTop />
    </Router>
  );
}

export default App;
