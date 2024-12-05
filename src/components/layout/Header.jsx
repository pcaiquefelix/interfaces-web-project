"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      {/* Desktop Header */}
      <div className={styles.desktopHeader}>
        <div className={styles.headerContainer}>
          {/* Logo */}
          <div className={styles.logoSection}>
            <Link href="/" className={styles.logoLink}>
              <img
                src="/assets/img/Logotipo-Vivo-Empresas-Parceiro-Autorizado-1.webp"
                alt="Vivo Para Seu Negócio"
                width={151}
                height={77}
                className={styles.logo}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNavigation}>
            <ul className={styles.menuList}>
              <li>
                <Link href="/" className={styles.menuLink}>
                  Vivo Empresas Avançado
                </Link>
              </li>
              <li>
                <Link href="/vivo-total-empresas" className={styles.menuLink}>
                  Vivo Total Empresas
                </Link>
              </li>
              <li>
                <Link href="/vivo-fibra-empresas" className={styles.menuLink}>
                  Vivo Fibra Empresas
                </Link>
              </li>
              <li>
                <Link href="/vivo-movel-empresas" className={styles.menuLink}>
                  Vivo Movel Empresas
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Header */}
      <div className={styles.mobileHeader}>
        <div className={styles.mobileHeaderContainer}>
          {/* Mobile Logo */}
          <div className={styles.mobileLogoSection}>
            <Link href="/" className={styles.logoLink}>
              <img
                src="/assets/img/Logotipo-Vivo-Empresas-Parceiro-Autorizado-1.webp"
                alt="Vivo Para Seu Negócio"
                width={151}
                height={77}
                className={styles.logo}
              />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileMenuToggle}
            onClick={toggleMobileMenu}
            aria-label="Alternar Menu"
          >
            {isMobileMenuOpen ? (
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <ul className={styles.mobileMenuList}>
              <li>
                <Link href="/" className={styles.mobileMenuLink}>
                  Vivo Empresas Avançado
                </Link>
              </li>
              <li>
                <Link
                  href="/vivo-total-empresas"
                  className={styles.mobileMenuLink}
                >
                  Vivo Total Empresas
                </Link>
              </li>
              <li>
                <Link
                  href="/vivo-fibra-empresas"
                  className={styles.mobileMenuLink}
                >
                  Vivo Fibra Empresas
                </Link>
              </li>
              <li>
                <Link
                  href="/vivo-movel-empresas"
                  className={styles.mobileMenuLink}
                >
                  Vivo Movel Empresas
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
