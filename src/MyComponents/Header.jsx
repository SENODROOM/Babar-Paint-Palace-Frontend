import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../Images/logo2cut (1).png";
import profile from "../Images/profile.png"
function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const neuralLines = useRef([]);
  const headerRef = useRef(null);

  // const setNeuralLineRef = (el, index) => {
  //   neuralLines.current[index] = el;
  // };

  useEffect(() => {
    // Scroll handling for header and parallax shapes
    const handleScroll = () => {
      if (!headerRef.current) return;

      // Header scroll effect
      if (window.pageYOffset > 50) headerRef.current.classList.add('scrolled');
      else headerRef.current.classList.remove('scrolled');

      // Parallax shapes
      const shapes = document.querySelectorAll('.shape');
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.3;
        shape.style.transform = `translateY(${window.pageYOffset * speed}px) rotate(${window.pageYOffset * 0.1}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    // Neural lines pulse effect
    const neuralInterval = setInterval(() => {
      neuralLines.current.forEach((line, index) => {
        setTimeout(() => {
          if (!line) return;
          line.style.opacity = '1';
          line.style.transform = 'scaleX(1.2)';
          setTimeout(() => {
            line.style.opacity = '0.2';
            line.style.transform = 'scaleX(0.5)';
          }, 200);
        }, index * 300);
      });
    }, 2000);

    // Quantum particle generation
    const createQuantumParticle = () => {
      const particle = document.createElement('div');
      particle.style.position = 'fixed';
      const size = Math.random() * 4 + 1;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      const colors = ['#00ffff', '#ff0080', '#8000ff'];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius = '50%';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = '100vh';
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '-1';
      particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
      document.body.appendChild(particle);

      const duration = Math.random() * 3000 + 2000;
      const drift = (Math.random() - 0.5) * 200;

      particle.animate(
        [
          { transform: 'translateY(0px) translateX(0px)', opacity: 0 },
          { transform: `translateY(-100vh) translateX(${drift}px)`, opacity: 1 },
        ],
        { duration, easing: 'ease-out' }
      ).onfinish = () => particle.remove();
    };
    const particleInterval = setInterval(createQuantumParticle, 1500);

    // Intersection Observer for timeline and hexagon animations
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.timeline-content, .hexagon').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(50px)';
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
      clearInterval(neuralInterval);
      clearInterval(particleInterval);
    };
  }, []);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const btn = e.currentTarget;
  //   btn.innerHTML = 'TRANSMITTING...';
  //   btn.style.background = 'linear-gradient(45deg, #8000ff, #00ffff)';
  //   setTimeout(() => {
  //     btn.innerHTML = 'TRANSMISSION COMPLETE';
  //     btn.style.background = 'linear-gradient(45deg, #00ff00, #00ffff)';
  //     setTimeout(() => {
  //       btn.innerHTML = 'TRANSMIT TO MATRIX';
  //       btn.style.background = 'linear-gradient(45deg, #00ffff, #ff0080)';
  //     }, 2000);
  //   }, 1500);
  // };

  return (
    <header className="glass" ref={headerRef}>
      <nav>
        <NavLink to="/" className="logo">
          <img src={logo} alt="Canvas Market Logo" className="logo-icon" />
          CANVAS MARKET
        </NavLink>

        {/* Desktop Nav */}
        <ul className="nav-links">
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "li-link active-link" : "li-link"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "li-link active-link" : "li-link"}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/Cart" className={({ isActive }) => isActive ? "li-link active-link" : "li-link"}>
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/Sell" className={({ isActive }) => isActive ? "li-link active-link" : "li-link"}>
              Sell Paintings
            </NavLink>
          </li>
          <li>
            <NavLink to="/Get" className={({ isActive }) => isActive ? "li-link active-link" : "li-link"}>
              Get Paintings
            </NavLink>

          </li>
            <li>
            <NavLink to="/Account" className={({ isActive }) => isActive ? "li-link active-link" : "li-link"}>
             <img src={profile}></img>
            </NavLink>

          </li>
      

        </ul>

        {/* Mobile menu toggle */}
        <div
          className={`mobile-menu-toggle ${menuActive ? 'active' : ''}`}
          onClick={() => setMenuActive(!menuActive)}
        >
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
      </nav>

      {/* Mobile navigation */}
      <div className={`mobile-nav ${menuActive ? 'active' : ''}`}>
        <NavLink to="/about" className={({ isActive }) => isActive ? "li-link active-link" : "li-link"} onClick={() => setMenuActive(false)}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "li-link active-link" : "li-link"} onClick={() => setMenuActive(false)}>Contact</NavLink>
        <NavLink to="/Cart" className={({ isActive }) => isActive ? "li-link active-link" : "li-link"} onClick={() => setMenuActive(false)}>Cart</NavLink>
        <NavLink to="/Sell" className={({ isActive }) => isActive ? "li-link active-link" : "li-link"} onClick={() => setMenuActive(false)}>Sell Paintings</NavLink>
        <NavLink to="/Get" className={({ isActive }) => isActive ? "li-link active-link" : "li-link"} onClick={() => setMenuActive(false)}>Get Paintings</NavLink>
       <NavLink to="/Account" className={({ isActive }) => isActive ? "li-link active-link" : "li-link"} onClick={() => setMenuActive(false)}><img src={profile}></img></NavLink>
 
      </div>
    </header>
  );
}

export default Header;
