import Image from "next/image";
import styles from "./page.module.css";
import homeStyles from "./home.module.css";
import PatientDoctorVideo from "./Video/PatientDoctorVideo";
import Login from "./Login/page";

import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";

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
              <h1>Experience Pediatric Care Like Never Before</h1>
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
                height={500}
                width={680}
                alt="header_Image"
              />
            </div>
          </div>
        </header>

        <section className={`${homeStyles.featuresContainer} ${homeStyles.mainFeatures}`}>
          <div className={homeStyles.featuresHeader}>
            <h1>Why Choose Our Platform </h1>        
          </div>

          <div className={homeStyles.features}>
            <div className={homeStyles.medSafeChat}>
              <div className={homeStyles.medSafeChatLeft}>
                <h3>MedSafe-Chat</h3>
                <p>High-definition Encrypted Video
                  calls for secure consultation
                </p>
              </div>
              <div className={homeStyles.medSafeChatRight}>
                <Image
                src="/assets/images/MedSafe-Chat.png"
                width={400}
                height={300}
                alt="MedSafe Image"
                />
              </div>
            </div>

            <div className={homeStyles.easyAppoint}>
              <div className={homeStyles.easyAppointLeft}>
              <Image
                src="/assets/images/Easy-Appoint.png"
                width={400}
                height={300}
                alt="Easy-Appoint"
                />
              </div>
              <div className={homeStyles.easyAppointRight}>
              <h3>Easy Appoint</h3>
                <p>Book, Reschedule and Manage Appointments Effortlessly
                </p>
              </div>
            </div>

            <div className={homeStyles.docFiles}>
              <div className={homeStyles.docFilesLeft}>
              <h3>DocFiles</h3>
                <p>Secure access to your child&apos;s health record
                </p>
              </div>
              <div className={homeStyles.docFilesRight}>
              <Image
                src="/assets/images/DocFiles.png"
                width={400}
                height={300}
                alt="DocFiles"
                />
              </div>
            </div>

            <div className={homeStyles.prescriber}>
              <div className={homeStyles.prescriberLeft}>
                <Image
                src="/assets/images/Prescriber-Pro.png"
                width={400}
                height={300}
                alt="Prescriber-Pro"
                />
              </div>
              <div className={homeStyles.prescriberRight}>
              <h3>Prescriber-Pro</h3>
                <p>Convienent Prescription handling and renewals </p>
              </div>
            </div>

          </div>
        </section>

        {/* <PatientDoctorVideo /> */}
        {/* <Login/> */}
      </div>
    </main>
  );
}
