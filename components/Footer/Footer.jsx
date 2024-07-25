import Image from "next/image";
import Link from "next/link";
import footerStyles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerContainer}>
        <div className={footerStyles.logoSec}>
          <div className={footerStyles.footerLogo}>
            <Image
              src="/assets/images/Logo Pace Holder.png"
              width={150}
              height={60}
              alt="EcoMed Logo"
            />
          </div>

          <div className={footerStyles.socials}>
            <Image
              src="/assets/images/facebook.png"
              width={60}
              height={60}
              alt="facebook_logo"
            />
            <Image
              src="/assets/images/x.png"
              width={60}
              height={60}
              alt="twitter_logo"
            />
            <Image
              src="/assets/images/instagram.jfif"
              width={60}
              height={60}
              alt="instagram_logo"
            />
          </div>
          <p> &copy; 2024 EchoMed Inc.</p>
        </div>
        <div className={footerStyles.contactSec}>
          <h4>Contact Us</h4>
          <p> High Way Road Coventry, Lagos Nigeria </p>
          <p>08012345678</p>
          <p>Info@echomed.com</p>
        </div>
        <div >
          <h4>Quick Links</h4>

          <div className={footerStyles.quickLinks}>
          <Link href="/">Home</Link>
          <Link href="/">Blogs</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Use</Link>

          </div>
        </div>
        <div className={footerStyles.subscribe}>
          <h4>Join the newsletter</h4>
          <div>
            <form className={footerStyles.footerSub}>
              <input type="email" name="subscribe" 
              placeholder="Enter You Email Address" />
              <div className={footerStyles.footerBtn}>
                <button>Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
