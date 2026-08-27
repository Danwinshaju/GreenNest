import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Home from './pages/Home';
import Indoor from './pages/Indoor';
import Seeds from './pages/Seeds';
import Outdoor from './pages/Outdoor';
import Pots from './pages/Pots';
import Fertilizer from './pages/Fertilizer';
import About from './pages/About';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import Search from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
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
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
