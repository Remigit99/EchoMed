"use client"

import ProtectedRoute from "@/components/ProtectedRoutes/ProtectedRoutes";
// import { useUser } from '../lib/UserContext';
import { useUser } from "@/contexts/UserContext";
import style from "@/styles/dashboard.module.css"

const Dashboard = () => {
  const { user } = useUser();

  return (
    <ProtectedRoute>
    <div className={style.dashboardContainer}>
      <header className={style.dashboardHeader}>
        <div className={style.dashboardGreeting}>
          <h1>Good morning, {user?.displayName || 'User'}!</h1>
          <p>Welcome to our telemedicine app! How can we assist you today?</p>
        </div>
        <button className={style.bookSessionBtn}>Book a Session</button>
      </header>

      <section className={style.categories}>
        <div className={style.categoryItem}>General Pediatrics</div>
        <div className={style.categoryItem}>Psychiatry & Psychology</div>
        <div className={style.categoryItem}>Cardiology</div>
        <div className={style.categoryItem}>Orthopedic</div>
        <div className={style.categoryItem}>Neurology</div>
        <div className={style.categoryItem}>Nutrition</div>
      </section>

      <section className={style.appointments}>
        <h2>Upcoming Appointments</h2>
        <div className={style.appointmentItem}>
          <h3>Dr. Joseph Run</h3>
          <p>Chief Pediatrician</p>
          <p>16th July, 2024 | 11:30 AM - 1:00 PM</p>
        </div>
        <div className={style.appointmentItem}>
          <h3>Dr. Madeleine Roe</h3>
          <p>Snr. Cardiologist</p>
          <p>16th July, 2024 | 11:30 AM - 1:00 PM</p>
        </div>
      </section>

      <section className={style.availableDoctors}>
        <h2>Available Pediatricians</h2>
        <div className={style.doctorCard}>
          <h3>Dr. Joseph Burn</h3>
          <p>Snr. Neurologist, Abuja</p>
          <button>Book a Session</button>
        </div>
        <div className={style.doctorCard}>
          <h3>Dr. Madeleine Roe</h3>
          <p>Snr. Cardiologist, Australia</p>
          <button>Book a Session</button>
        </div>
        <div className={style.doctorCard}>
          <h3>Dr. Stephen Run</h3>
          <p>Pediatric Specialist, Lekki</p>
          <button>Book a Session</button>
        </div>
      </section>

      <section className={style.infoCard}>
        <div className={style.infoCard}>Medical Information</div>
        <div className={style.infoCard}>Health Tips</div>
        <div className={style.infoCard}>Education</div>
      </section>
    </div>
    </ProtectedRoute>
  );
};

export default ProtectedRoute(Dashboard);

