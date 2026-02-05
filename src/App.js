import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './MyComponents/Layout';

// PAGES:
import Home from './pages/Home';


// CONTEXTPROVIDERS:
import { OnScreenProvider } from './ContextProviders/OnScreenContext';
import { CartProvider } from './ContextProviders/CartContext'; // NEW IMPORT

// UTILS:
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <>
      <OnScreenProvider>
        <CartProvider> {/* NEW WRAPPER */}
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Layout body={<Home />} />} />
              <Route index element={<Layout body={<Home />} />} />
           
              {/* <Route path="*" element={<About00 />} /> */}
            </Routes>
          </BrowserRouter>
        </CartProvider> {/* CLOSE WRAPPER */}
      </OnScreenProvider>
    </>
  );
}

export default App;