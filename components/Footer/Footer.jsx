import Image from "next/image"
import Link from "next/link"
import footerStyles from "./footer.module.css"

const Footer = () => {
  return (
    <footer>
        <div className={footerStyles.logoSec}>
            <div className={footerStyles.footerLogo}>
            <Image
            src="/assets/images/Logo Pace Holder.png"
            width={150}
            height={60}
            alt="EcoMed Logo"
          />
            </div>
        </div>
        <div className={footerStyles.contactSec}>
            <h4>Contact Us</h4>
            <p> High Way Road Coventry, Lagos Nigeria </p>
            <p>08012345678</p>
            <button>Info@echomed.com</button>
        </div>
        <div className={footerStyles.quickLinks}>
            <h4>Quick Links</h4>
            <Link href="/">Home</Link>
            <Link href="/">Blogs</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Use</Link>
        </div>
        <div className={footerStyles.subscribe}></div>
    </footer>
  )
}

export default Footer