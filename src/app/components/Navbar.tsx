import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Navbar: React.FC = () => (
    
  <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
    <div className="navbar-container">
      <div className="left-navbar">
        <Link href="/" className="brand-link-navbar w-nav-brand">
          <Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d07b74fd983_Logo%20Dark.svg" width={120} height={32} alt="Logo" className="brand-image-navbar" unoptimized />
        </Link>
      </div>
      <div className="right-navbar">
        <nav role="navigation" className="nav-menu w-nav-menu">
          <Link href="/home" className="link-nav w-nav-link w--current">Home</Link>
          <Link href="/category/marketing" className="link-nav w-nav-link">Courses</Link>
          <Link href="/teachers" className="link-nav w-nav-link">Teachers</Link>
          <Link href="/about-us" className="link-nav w-nav-link">About</Link>
          <Link href="/blog" className="link-nav w-nav-link">Blog</Link>
          <Link href="/contact" className="link-nav w-nav-link">Contact</Link>
          <div className="divider-nav"></div>
          <div className="wrap-nav-buttons">
            <Link href="/log-in" className="link-login w-inline-block">
              <Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d1f854fd9b0_Group%20Icon.svg" width={24} height={24} alt="Login Icon" className="icon-login" unoptimized />
              <div>Log in</div>
            </Link>
            <a href="https://webflow.com/templates/html/phoenix-course-school-website-template" target="_blank" rel="noopener noreferrer" className="cta secondary nav-cta w-button">Buy template</a>
          </div>
        </nav>
        <div className="manu-button w-nav-button">
          <div className="wrap-menu-inside">
            <Image src="/63bc1e3983475d58fd4fd957/63beba6c54f081bd392dda9c_menu.svg" width={24} height={24} alt="Menu" className="icon-hamburger" unoptimized />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Navbar; 