"use client";
import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const userLoggedIn = false;
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [providers, setProviders] = useState(null);

  return (
    <nav className={styles.navBar}>
      <div className={`${styles.container} ${styles.navContainer}`}>
        <div className="navLogo">
          <Image
            src="/assets/images/Logo Pace Holder.png"
            width={150}
            height={60}
            alt="EcoMed Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <div className={styles.containerRight}>
          {userLoggedIn ? (
            <ul className={styles.navLinks}>
              <Link href="/">Home</Link>
              <Link href="/home">Features</Link>
              <Link href="/AboutUs">About Us</Link>
              <Link href="/HowItWorks">How it works</Link>
              <button
                type="button"
                //   onClick={signOut}
                className={styles.navBtn}
              >
                Sign Out
              </button>

              {/* <Link href="/profile">
                <Image
                  src={session?.user.image}
                  width={37}
                  height={37}
                  className="rounded-full"
                  alt="profile"
                />
              </Link> */}
            </ul>
          ) : (
            <>
              {/* {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => {
                      signIn(provider.id);
                    }}
                    className="black_btn"
                  >
                    Sign in
                  </button>
                ))} */}

              <ul className={styles.navLinks}>
                <Link href="/">Home</Link>
                <Link href="/home">Features</Link>
                <Link href="/AboutUs">About Us</Link>
                <Link href="/HowItWorks">How it works</Link>
                <Link href="/SignIn">Sign In</Link>
                <Link href="/SignUp" className={styles.navBtn}>
                  Sign Up
                </Link>
              </ul>
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className={`${styles.containerRight} ${styles.mobileNav}`}>
          {userLoggedIn ? (
            <div className="flex">
              <Image
                src="/assets/images/dr-green.png"
                width={37}
                height={37}
                className={styles.roundedFull}
                alt="profile"
                onClick={() => setToggleDropdown(!toggleDropdown)}
              />

              {toggleDropdown && (
                <div className={styles.dropdown}>
                  <Link
                    href="/profile"
                    className={styles.dropdownLink}
                    onClick={() => setToggleDropdown(false)}
                  >
                    My Profile
                  </Link>

                  <Link href="/">Home</Link>
                  <Link href="/home">Features</Link>
                  <Link href="/AboutUs">About Us</Link>
                  <Link href="/HowItWorks">How it works</Link>

                  <button
                    type="button"
                    onClick={() => {
                      setToggleDropdown(false);
                      signOut();
                    }}
                    className={styles.navBtn}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => {
                      signIn(provider.id);
                    }}
                    className={styles.navBtn}
                  >
                    Sign in
                  </button>
                ))}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
