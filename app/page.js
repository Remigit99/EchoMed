import Image from "next/image";
import styles from "./page.module.css";
import homeStyles from "./home.module.css";
import Faqs from "@/components/Faqs/Faqs";

// import { SlArrowDown } from "react-icons/sl";

// import Navbar from "@/components/Navbar/Navbar";
import { faqsData } from "@/Data/faqsData";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className={`${styles.container} ${styles.main}`}>
      <header className={homeStyles.header}>
        <div
          className={`${homeStyles.container} ${homeStyles.headerContainer}`}
        >
          <div className={homeStyles.headerLeft}>
            <h1>
              Experience
              <span className={homeStyles.pedCare}> Pediatric Care </span>
              Like Never Before!
            </h1>
            <p>Connect with Top Pediatricians from the comfort of your Home</p>
            {/* <Link href="/home">Learn More</Link> */}

            <div className={homeStyles.btns}>
              <Link href="/SignIn" className={homeStyles.getBtn}>
                Get Started
              </Link>
            </div>
          </div>

          <div className={homeStyles.headerRight}>
            <Image
              src="/assets/images/HomeHeaderImg.png"
              // height={460}
              // width={600}
              height={453}
              width={650}
              alt="header_Image"
              className={homeStyles.headerImg}
            />
          </div>
        </div>
      </header>

      <section className={homeStyles.services}>
        <div className={homeStyles.servicesContainer}>
          <div className={homeStyles.servicesHeader}>
            {" "}
            <h2>Why Choose Our Platform?</h2>
          </div>
          <div className={homeStyles.servicesMain}>
            <article>
              <div className={homeStyles.featuresIcon}>
                <Image
                  src="/assets/icons/seamless.png"
                  width={60}
                  height={60}
                  alt="icon"
                />
              </div>
              <h5 className={homeStyles.servicesInfoHeader}>
                Seamless Remote Healthcare
              </h5>
              <div>
                <p>Experience smooth an efficient remote healthcare services</p>
              </div>
            </article>

            <article>
              <div className={homeStyles.featuresIcon}>
                <Image
                  src="/assets/icons/security.png"
                  width={60}
                  height={60}
                  alt="icon"
                />
              </div>
              <h5 className={homeStyles.servicesInfoHeader}>Data Security</h5>
              <div>
                <p>
                  Rest assured with our commitment to maintaining the highest
                  standards of data security
                </p>
              </div>
            </article>

            <article>
              <div className={homeStyles.featuresIcon}>
                <Image
                  src="/assets/icons/qualify.png"
                  width={60}
                  height={60}
                  alt="icon"
                />
              </div>
              <h5 className={homeStyles.servicesInfoHeader}>
                Qualified Pediatricians
              </h5>
              <div>
                <p>Access to a network of highly qualified pediatricians</p>
              </div>
            </article>

            <article>
              <div className={homeStyles.featuresIcon}>
                <Image
                  src="/assets/icons/convenience.png"
                  width={60}
                  height={60}
                  alt="icon"
                />
              </div>
              <h5 className={homeStyles.servicesInfoHeader}>Convenience</h5>
              <div>
                <p>Receive fast Pediatric care from the comfort of your home</p>
              </div>
            </article>

            <article>
              <div className={homeStyles.featuresIcon}>
                <Image
                  src="/assets/icons/reduced.png"
                  width={60}
                  height={60}
                  alt="icon"
                />
              </div>
              <h5 className={homeStyles.servicesInfoHeader}>
                Reduced Wait Times
              </h5>
              <div>
                <p>
                  Minimize long wait times and get prompt medical attention for
                  your child
                </p>
              </div>
            </article>

            <article>
              <div className={homeStyles.featuresIcon}>
                <Image
                  src="/assets/icons/affordability.png"
                  width={60}
                  height={60}
                  alt="icon"
                />
              </div>
              <h5 className={homeStyles.servicesInfoHeader}>
                Affordability and Accessibility
              </h5>
              <div>
                <p>
                  Enjoy affordable and easily accessible healthcare services for
                  your child
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        className={`${homeStyles.featuresContainer} ${homeStyles.mainFeatures}`}
      >
        <div className={homeStyles.featuresHeader}>
          <h1>Our Services</h1>
        </div>

        {/* Desktop Features */}
        <div className={`${homeStyles.features} ${homeStyles.featuresDesktop}`}>
          <div className={homeStyles.easyAppoint}>
            <div className={homeStyles.easyAppointRight}>
              <h3>Easy Appoint</h3>
              <p>Book, Reschedule and Manage Appointments Effortlessly</p>

              <div className={homeStyles.btns}>
                <button>Schedule Now</button>
              </div>
            </div>

            <div className={homeStyles.easyAppointLeft}>
              <Image
                src="/assets/images/EasyAppointN.png"
                width={680}
                height={424}
                alt="Easy-Appoint"
              />
            </div>
          </div>

          <div className={homeStyles.medSafeChat}>
            <div className={homeStyles.medSafeChatRight}>
              <Image
                src="/assets/images/medSafeChat.png"
                width={680}
                height={424}
                alt="MedSafe Image"
              />
            </div>
            <div className={homeStyles.medSafeChatLeft}>
              <h3>MedSafe-Chat</h3>
              <p>
                High-definition Encrypted Video calls for secure consultation
              </p>

              <div className={homeStyles.btns}>
                <button>Consult Now</button>
              </div>
            </div>
          </div>

          <div className={homeStyles.docFiles}>
            <div className={homeStyles.docFilesLeft}>
              <h3>DocFiles</h3>
              <p>Secure access to your child&apos;s health record</p>
              <div className={homeStyles.btns}>
                <button>Manage Files</button>
              </div>
            </div>
            <div className={homeStyles.docFilesRight}>
              <Image
                src="/assets/images/DocFile.png"
                width={680}
                height={424}
                alt="DocFiles"
              />
            </div>
          </div>

          <div className={homeStyles.prescriber}>
            <div className={homeStyles.prescriberLeft}>
              <Image
                src="/assets/images/Prescriber.png"
                width={680}
                height={424}
                alt="Prescriber-Pro"
              />
            </div>
            <div className={homeStyles.prescriberRight}>
              <h3>Prescriber-Pro</h3>
              <p>Convienent Prescription handling and renewals </p>
              <div className={homeStyles.btns}>
                <button>Order Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Features */}
        <div className={`${homeStyles.features} ${homeStyles.featuresMobile}`}>
          <div className={homeStyles.easyAppoint}>
            <div className={homeStyles.easyAppointLeft}>
              <Image
                src="/assets/images/EasyAppointN.png"
                width={400}
                height={330}
                alt="Easy-Appoint"
              />
            </div>
            <div className={homeStyles.easyAppointRight}>
              <h3>Easy Appoint</h3>
              <p>Book, Reschedule and Manage Appointments Effortlessly</p>

              <div className={homeStyles.btns}>
                <button>Schedule Now</button>
              </div>
            </div>
          </div>

          <div className={homeStyles.medSafeChat}>
            <div className={homeStyles.medSafeChatRight}>
              <Image
                src="/assets/images/medSafeChat.png"
                width={400}
                height={300}
                alt="MedSafe Image"
              />
            </div>

            <div className={homeStyles.medSafeChatLeft}>
              <h3>MedSafe-Chat</h3>
              <p>
                High-definition Encrypted Video calls for secure consultation
              </p>

              <div className={homeStyles.btns}>
                <button>Consult Now</button>
              </div>
            </div>
          </div>

          <div className={homeStyles.docFiles}>
            <div className={homeStyles.docFilesRight}>
              <Image
                src="/assets/images/DocFile.png"
                width={400}
                height={300}
                alt="DocFiles"
              />
            </div>

            <div className={homeStyles.docFilesLeft}>
              <h3>DocFiles</h3>
              <p>Secure access to your child&apos;s health record</p>
              <div className={homeStyles.btns}>
                <button>Manage Files</button>
              </div>
            </div>
          </div>

          <div className={homeStyles.prescriber}>
            <div className={homeStyles.prescriberLeft}>
              <Image
                src="/assets/images/Prescriber.png"
                width={400}
                height={300}
                alt="Prescriber-Pro"
              />
            </div>
            <div className={homeStyles.prescriberRight}>
              <h3>Prescriber-Pro</h3>
              <p>Convienent Prescription handling and renewals </p>
              <div className={homeStyles.btns}>
                <button>Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={homeStyles.cta}>
        <div className={homeStyles.ctaMain}>
          <div className={homeStyles.ctaLeft}>
            <h3>Ready to Experience the Future of Pediatric Care</h3>

            <div className={homeStyles.ctaBtns}>
              <div className={homeStyles.ctaBtn}>
                <button>Sign Up Now</button>
              </div>
              <div className={homeStyles.ctaBtn}>
                <button>Contact Us</button>
              </div>
            </div>
          </div>
          <div className={homeStyles.ctaRight}>
            <Image
              src="/assets/images/fatherD.png"
              alt="Father_child"
              width={340}
              height={290}
            />
          </div>
        </div>
      </section>

      {/* FAQs */}

      <section className={homeStyles.faqs}>
        <div className={homeStyles.faqsContainer}>
          <div className={homeStyles.faqsHeader}>
            <h2>Frequently Asked Questions (FAQs)</h2>
          </div>
          <div className={homeStyles.faqsMain}>
            <Faqs />
          </div>
        </div>
      </section>

      {/* Footer */}
      <>
        <Footer />
      </>
    </main>
  );
}
