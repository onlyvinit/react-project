import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './Cart';
import Checkout from './Checkout';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Navbar /> <br /> <br /> <br />
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes> <br />
      <Footer />
    </Router>
  );
}

export default App;
