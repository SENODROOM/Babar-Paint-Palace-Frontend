import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Register from './components/Register';
import OrderForm from './components/OrderForm';
import PurchasedProducts from './components/PurchasedProducts';
import './App.css';

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo">StoreFLow</h1>
        {user ? (
          <div className="nav-right">
            <div className="user-info">
              <span className="shop-name">{user.shopName}</span>
              <span className="owner-name">{user.ownerName}</span>
            </div>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">New Order</Link>
              </li>
              <li className="nav-item">
                <Link to="/purchased-products" className="nav-link">Purchased Products</Link>
              </li>
              <li className="nav-item">
                <button onClick={logout} className="logout-btn">Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">Register</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

function AppContent() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <OrderForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/purchased-products"
          element={
            <PrivateRoute>
              <PurchasedProducts />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
