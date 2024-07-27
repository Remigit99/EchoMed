"use client";
import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

import { FiSearch } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  const { data: session } = useSession();
  console.log(session)

  const userLoggedIn = false;
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [providers, setProviders] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     const res = await getProviders();
  //     setProviders(res);
  //   })();
  // }, []);

  return (
    <nav className={styles.navBar}>
      <div className={`${styles.container} ${styles.navContainer}`}>
        <Link href="/" className="navLogo">
          <Image
            src="/assets/images/Logo.png"
            width={150}
            height={60}
            alt="EcoMed Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <div
          className={`${styles.containerRight} ${styles.smFlex} ${styles.hidden}`}
        >
          {userLoggedIn ? (
            <ul className={styles.navLinks}>
              <Link href="/">Home</Link>
              <Link href="/home">Features</Link>
              <Link href="/AboutUs">About Us</Link>
              <Link href="/HowItWorks">How it works</Link>

              <div className={styles.searchPro}>
                <div className={styles.navSearch}>
                  <input
                    type="text"
                    name="search"
                    placeholder="Search"
                    className={styles.navInput}
                  />

                  <FiSearch />
                </div>
                

                <Image
                  src="/assets/images/dr-green.png"
                  width={37}
                  height={37}
                  className={styles.roundedFull}
                  alt="profile"
                  onClick={() => setToggleDropdown(!toggleDropdown)}
                />

                <IoIosNotificationsOutline 
                className={styles.navNotify}
                />
              </div>

              {/* <button
                type="button"
                  onClick={signOut}
                className={styles.navBtn}
              >
                Sign Out
              </button> */}

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
        <div
          className={`${styles.containerRight} ${styles.mobileNav} ${styles.smHidden} ${styles.flex} ${styles.relative}`}
        >
          {userLoggedIn ? (
            <div className={styles.mobile}>
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

                  <Link href="/" className={styles.dropdownLink}>
                    Home
                  </Link>
                  <Link href="/home" className={styles.dropdownLink}>
                    Features
                  </Link>
                  <Link href="/AboutUs" className={styles.dropdownLink}>
                    About Us
                  </Link>
                  <Link href="/HowItWorks" className={styles.dropdownLink}>
                    How it works
                  </Link>

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
