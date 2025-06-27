"use client"

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar: React.FC = () => {

  const {data:session} = useSession();

  const [isArabic, setIsArabic] = useState(false);
  return (
    
  <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
    <div className="navbar-container">
      <div className="left-navbar">
        <Link href="/" className="brand-link-navbar w-nav-brand">
          <Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d07b74fd983_Logo%20Dark.svg" width={120} height={32} alt="Logo" className="brand-image-navbar" unoptimized />
        </Link>
      </div>
      <div className="right-navbar">
        <nav role="navigation" className="nav-menu w-nav-menu">
          <Link href="/home" className="link-nav w-nav-link w--current">Trending Skills</Link>
          <Link href="/category/marketing" className="link-nav w-nav-link">Courses</Link>
          <Link href="/teachers" className="link-nav w-nav-link">Plans & Pricing</Link>
          <Link href="/about-us" className="link-nav w-nav-link">How it Works</Link>
           
          <Link href="/contact" className="link-nav w-nav-link">Contact</Link>
          <div className="divider-nav"></div>
          <div className="wrap-nav-buttons">
  {session?.user ? (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <span style={{ color: "#1C3533", fontWeight: 600 }}>{session.user.email}</span>
      <button
        onClick={() => signOut()}
        className="cta secondary nav-cta w-button"
        style={{ cursor: "pointer" }}
      >
        Sign out
      </button>
    </div>
  ) : (
    <>
      <button
        onClick={() => signIn()}
        className="link-login w-inline-block"
        style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center" }}
      >
        <Image src="/63bc1e3983475d58fd4fd957/63bc1e3983475d1f854fd9b0_Group%20Icon.svg" width={24} height={24} alt="Login Icon" className="icon-login" unoptimized />
        <div>Log in</div>
      </button>
      <Link href="/signup" passHref legacyBehavior>
        <span className="cta secondary nav-cta w-button">Sign up</span>
      </Link>
    </>
  )}
</div>
        </nav>
        {/* Language Toggler Switch */}
        <button
          type="button"
          className="ml-4 flex items-center focus:outline-none"
          onClick={() => setIsArabic((prev) => !prev)}
          aria-label="Toggle language"
        >
          <div className="ml-3 relative w-24 h-12 bg-[#1C3533] rounded-full border border-[#35363C] flex items-center justify-between px-2">
            {/* EN label */}
            <span className={`z-10 w-10 text-center text-lg font-semibold select-none transition-colors duration-300 ${!isArabic ? 'text-black' : 'text-white'}`}>EN</span>
            {/* AR label */}
            <span className={`z-10 w-10 text-center text-lg font-semibold select-none transition-colors duration-300 ${isArabic ? 'text-black' : 'text-white'}`}>عربي</span>
            {/* Toggle Circle */}
            <span
              className={`absolute top-1 left-1 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-lg font-semibold transition-transform duration-300 select-none ${isArabic ? 'translate-x-12' : 'translate-x-0'}`}
              style={{zIndex: 20}}
            >
              {isArabic ? 'عربي' : 'EN'}
            </span>
          </div>
        </button>
        <div className="manu-button w-nav-button">
          <div className="wrap-menu-inside">
            <Image src="/63bc1e3983475d58fd4fd957/63beba6c54f081bd392dda9c_menu.svg" width={24} height={24} alt="Menu" className="icon-hamburger" unoptimized />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Navbar; 