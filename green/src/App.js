import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Seo from './components/Seo';
import Home from './pages/Home';

const Cart = lazy(() => import('./components/Cart'));
const Indoor = lazy(() => import('./pages/Indoor'));
const Seeds = lazy(() => import('./pages/Seeds'));
const Outdoor = lazy(() => import('./pages/Outdoor'));
const Pots = lazy(() => import('./pages/Pots'));
const Fertilizer = lazy(() => import('./pages/Fertilizer'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Wishlist = lazy(() => import('./pages/Wishlist'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Search = lazy(() => import('./pages/Search'));

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Seo />
      <Navbar />

      <Suspense fallback={<main className="route-loading" aria-live="polite">Loading…</main>}><Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/indoor" element={<Indoor />} />
        <Route path="/seeds" element={<Seeds />} />
        <Route path="/outdoor" element={<Outdoor />} />
        <Route path="/pots" element={<Pots />} />
        <Route path="/fertilizer" element={<Fertilizer />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
      </Routes></Suspense>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
