import React from 'react'
import styles from "./Navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className={styles.navBar}>
            <div className={`${styles.container} ${styles.navContainer}`}>
                <div className="navLogo">
                    <Image
                        src="/assets/images/Logo Pace Holder.png"
                        width={150}
                        height={60}
                        alt='EcoMed Logo'
                    />
                </div>

                <div className={styles.containerRight}>
                    <ul className={styles.navLinks}>
                        <Link href="/home" >Home</Link>
                        <Link href="/home">Features</Link>
                        <Link href="/aboutus">About Us</Link>
                        <Link href="/home">How it works</Link>
                        <Link href="/home">Sign In</Link>
                        <Link href="/home">Sign Up</Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar