"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./nav.module.css";
import Image from "next/image";
import { useState } from "react";
import { useUser } from "@/contexts/UserContext";

import { FiSearch } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";

const DynamicNavLayout = ({ children }) => {
  const pathname = usePathname();

  let {user} = useUser()

  // State for dropdown menu toggle
  const [toggleDropdown, setToggleDropdown] = useState(false);

  // State to track if user is logged in
  const [userLoggedIn, setUserLoggedIn] = useState(false); 
  user = userLoggedIn


  // Pages where the nav links should not be shown
  const hideNavLinksOn = ["/SignIn", "/SignUp", `/Profile/${user.id}`];

  

  const showNavLinks = !hideNavLinksOn.includes(pathname);

  return (
    <>
      <nav className={styles.navBar}>
        <div className={`${styles.container} ${styles.navContainer}`}>
          <Link href="/" className="navLogo">
            <Image
              src="/assets/images/Logo_new2.png"
              width={180}
              height={70}
              alt="EcoMed Logo"
            />
          </Link>

          {showNavLinks && (
            <>
              {/* Desktop Navigation */}
              <div className={`${styles.containerRight} ${styles.smFlex} ${styles.hidden}`}>
                {userLoggedIn ? (
                  <ul className={styles.navLinks}>
                    <Link href="/">Home</Link>
                    <Link href="/">Features</Link>
                    <Link href="/">About Us</Link>
                    <Link href="/">How it works</Link>

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
                        src="/assets/images/user.png"
                        width={37}
                        height={30}
                        className={styles.roundedFull}
                        alt="profile"
                        onClick={() => setToggleDropdown(!toggleDropdown)}
                      />

                      <IoIosNotificationsOutline className={styles.navNotify} />
                    </div>
                  </ul>
                ) : (
                  <>
                    <ul className={styles.navLinks}>
                      <Link href="/">Home</Link>
                      <Link href="/">Features</Link>
                      <Link href="/">About Us</Link>
                      <Link href="/">How it works</Link>
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
                      src="/assets/images/user.png"
                      width={37}
                      height={30}
                      className={styles.roundedFull}
                      alt="profile"
                      onClick={() => setToggleDropdown(!toggleDropdown)}
                    />

                    {toggleDropdown && (
                      <div className={styles.dropdown}>
                        <Link
                          href="/Profile"
                          className={styles.dropdownLink}
                          onClick={() => setToggleDropdown(false)}
                        >
                          My Profile
                        </Link>

                        <Link href="/" className={styles.dropdownLink}>
                          Features
                        </Link>
                        <Link href="/" className={styles.dropdownLink}>
                          About Us
                        </Link>
                        <Link href="/" className={styles.dropdownLink}>
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
                    {/* Add mobile nav for not logged in state if needed */}

                    <div className={styles.mobile}>
                    <Image
                      src="/assets/icons/menu-alt.svg"
                      width={37}
                      height={37}
                      className={styles.roundedFull}
                      alt="profile"
                      onClick={() => setToggleDropdown(!toggleDropdown)}
                    />

                    {toggleDropdown && (
                      <div className={styles.dropdown}>
                        {/* <Link
                          href="/profile"
                          className={styles.dropdownLink}
                          onClick={() => setToggleDropdown(false)}
                        >
                          My Profile
                        </Link> */}

                        {/* <Link href="/" 
                         onClick={() => {
                          setToggleDropdown(false);
                          // signOut();
                        }}
                        className={styles.dropdownLink}>
                          Home
                        </Link> */}
                        <Link href="/" 
                         onClick={() => {
                          setToggleDropdown(false);
                          // signOut();
                        }}
                        className={styles.dropdownLink}>
                          Features
                        </Link>
                        <Link href="/" 
                         onClick={() => {
                          setToggleDropdown(false);
                          // signOut();
                        }}
                        className={styles.dropdownLink}>
                          About Us
                        </Link>
                        <Link href="/" 
                         onClick={() => {
                          setToggleDropdown(false);
                          // signOut();
                        }}
                        className={styles.dropdownLink}>
                          How it works
                        </Link>

                        <Link href="/SignIn"
                          onClick={() => {
                            setToggleDropdown(false);
                            // signOut();
                          }}
                          className={styles.navBtn}
                        >
                          Sign In
                        </Link>

                        <Link href="/SignUp"
                          onClick={() => {
                            setToggleDropdown(false);
                            // signOut();
                          }}
                          className={styles.navBtn}
                        >
                          Sign Up
                        </Link>
                      </div>
                    )}
                  </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </nav>

      <main>{children}</main>
    </>
  );
};

export default DynamicNavLayout;
