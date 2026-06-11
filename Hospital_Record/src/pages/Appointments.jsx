import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { FaCalendarPlus, FaUserMd, FaUser, FaList } from "react-icons/fa";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");

  const addAppointment = () => {
    if (patient && doctor) {
      setAppointments([...appointments, { patient, doctor, date: new Date().toLocaleDateString() }]);
      setPatient("");
      setDoctor("");
    }
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <Navbar title="Appointments" />

        <div className="appointments-container">
          {/* Booking Form */}
          <div className="appointment-form">
            <h3><FaCalendarPlus /> Book New Appointment</h3>
            <div className="form-group">
              <label htmlFor="patient">
                <FaUser /> Patient Name
              </label>
              <input
                id="patient"
                type="text"
                placeholder="Enter patient name"
                value={patient}
                onChange={(e) => setPatient(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="doctor">
                <FaUserMd /> Doctor Name
              </label>
              <input
                id="doctor"
                type="text"
                placeholder="Enter doctor name"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
              />
            </div>

            <button className="book-btn" onClick={addAppointment}>
              <FaCalendarPlus /> Book Appointment
            </button>
          </div>

          {/* Appointments List */}
          <div className="appointments-list">
            <h3><FaList /> Scheduled Appointments</h3>
            {appointments.length === 0 ? (
              <p className="no-appointments">No appointments scheduled yet.</p>
            ) : (
              <div className="appointments-grid">
                {appointments.map((appointment, index) => (
                  <div key={index} className="appointment-card">
                    <div className="appointment-header">
                      <span className="appointment-number">#{index + 1}</span>
                      <span className="appointment-date">{appointment.date}</span>
                    </div>
                    <div className="appointment-details">
                      <div className="detail-item">
                        <FaUser className="detail-icon" />
                        <span>{appointment.patient}</span>
                      </div>
                      <div className="detail-item">
                        <FaUserMd className="detail-icon" />
                        <span>{appointment.doctor}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
