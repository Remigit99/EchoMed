import Image from "next/image";
import styles from "./page.module.css";
import homeStyles from "./home.module.css"
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
          <div className={`${homeStyles.container} ${homeStyles.headerContainer}`} >

            <div className={homeStyles.headerLeft}>
              <h1>Experience Pediatric Care Like Never Before</h1>
              <p>Connect with Top Pediatricians from the comfort of your Home</p>
              <Link href="/home">Learn More</Link>

              <div className={homeStyles.btns}>
              <button>
                Get Started
              </button>
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

        {/* <PatientDoctorVideo /> */}
        {/* <Login/> */}
      </div>

    </main>
  );
}
