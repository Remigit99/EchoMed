import Image from "next/image";
import styles from "./page.module.css";
import homeStyles from "./home.module.css";
import PatientDoctorVideo from "./Video/PatientDoctorVideo";
import Login from "./SignIn/page";

import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
// import TestiminialSlider from "@/components/TestimonialSlider/TestiminialSlider";

export default function Home() {
  return (
    <main className={`${styles.container} ${styles.main}`}>
      <div>
        <Navbar />

        <header className={homeStyles.header}>
          <div
            className={`${homeStyles.container} ${homeStyles.headerContainer}`}
          >
            <div className={homeStyles.headerLeft}>
              <h1>Experience
              <span className={homeStyles.pedCare}> Pediatric Care </span>
              Like Never Before!</h1>
              <p>
                Connect with Top Pediatricians from the comfort of your Home
              </p>
              <Link href="/home">Learn More</Link>

              <div className={homeStyles.btns}>
                <button>Get Started</button>
              </div>
            </div>

            <div className={homeStyles.headerRight}>
              <Image
                src="/assets/images/headerImg.png"
                height={450}
                width={600}
                alt="header_Image"
                className={homeStyles.headerImg}
              />
            </div>
          </div>
        </header>

        <section
          className={`${homeStyles.featuresContainer} ${homeStyles.mainFeatures}`}
        >
          <div className={homeStyles.featuresHeader}>
            <h1>Why Choose Our Platform? </h1>
          </div>

          <div className={homeStyles.features}>
            <div className={homeStyles.medSafeChat}>
              <div className={homeStyles.medSafeChatLeft}>
                <h3>MedSafe-Chat</h3>
                <p>
                  High-definition Encrypted Video calls for secure consultation
                </p>

                <div className={homeStyles.btns}>
                  <button>Schedule Now</button>
                </div>
              </div>
              <div className={homeStyles.medSafeChatRight}>
                <Image
                  src="/assets/images/MedSafeChat.png"
                  width={400}
                  height={300}
                  alt="MedSafe Image"
                />
              </div>
            </div>

            <div className={homeStyles.easyAppoint}>
              <div className={homeStyles.easyAppointLeft}>
                <Image
                  src="/assets/images/EasyAppoint.png"
                  width={400}
                  height={300}
                  alt="Easy-Appoint"
                />
              </div>
              <div className={homeStyles.easyAppointRight}>
                <h3>Easy Appoint</h3>
                <p>Book, Reschedule and Manage Appointments Effortlessly</p>

                <div className={homeStyles.btns}>
                  <button>Order Now</button>
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
                  width={400}
                  height={300}
                  alt="DocFiles"
                />
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
                  <button>Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className={styles.testimonial}>
          <div className={styles.testimonialHeader}>
            <h1>What People say</h1>

            Testimonial Slider
            <div className={styles.testimonialSlider}>
              <TestiminialSlider />
            </div>
          </div>
        </section>  */}

        <section className={homeStyles.cta}>
          <div className={homeStyles.ctaMain}>  
            <div className={homeStyles.ctaLeft}>
              
              <h3>Ready to Experience the Future of Pediatic Care</h3>

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

          <section>
            <div className={homeStyles.faqsContainer}>

              <div className={homeStyles.faqsHeader}>
                <h2>Frequently Asked Questions (FAQs)</h2>
              </div>
              <div className={homeStyles.faqsMain}>

              </div>
            </div>
          </section>

      </div>
    </main>
  );
}
