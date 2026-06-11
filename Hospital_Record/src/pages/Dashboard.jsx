import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { FaUsers, FaUserMd, FaCalendarCheck, FaHeartbeat, FaStethoscope, FaClinicMedical } from "react-icons/fa";

export default function Dashboard() {
  // Mock data for demonstration
  const stats = {
    patients: { count: 1247, change: "+12%", icon: <FaUsers />, color: "text-blue-600" },
    doctors: { count: 89, change: "+5%", icon: <FaUserMd />, color: "text-green-600" },
    appointments: { count: 456, change: "+8%", icon: <FaCalendarCheck />, color: "text-purple-600" }
  };

  const recentActivities = [
    { time: "10:30 AM", activity: "New patient registered", type: "patient" },
    { time: "9:15 AM", activity: "Appointment scheduled", type: "appointment" },
    { time: "8:45 AM", activity: "Doctor added to system", type: "doctor" },
    { time: "8:00 AM", activity: "System backup completed", type: "system" }
  ];

  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <Navbar title="Dashboard" />

        {/* Welcome Section */}
        <div className="welcome-section">
          <div className="welcome-content">
            <div className="welcome-icons">
              <FaHeartbeat className="welcome-icon pulse" />
              <FaStethoscope className="welcome-icon" />
              <FaClinicMedical className="welcome-icon" />
            </div>
            <h2>Welcome back, Admin! 👋</h2>
            <p>Here's what's happening at your hospital today.</p>
            <div className="health-stats">
              <div className="health-stat">
                <span className="stat-icon">❤️</span>
                <span>All Systems Operational</span>
              </div>
              <div className="health-stat">
                <span className="stat-icon">🩺</span>
                <span>Medical Equipment: 98% Active</span>
              </div>
              <div className="health-stat">
                <span className="stat-icon">💊</span>
                <span>Medication Stock: Optimal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="cards">
          <div className="card fade-in">
            <div className="card-header">
              <span className="card-icon">{stats.patients.icon}</span>
              <h3>Patients</h3>
            </div>
            <p className="card-value">{stats.patients.count.toLocaleString()}</p>
            <span className="card-change positive">{stats.patients.change} from last month</span>
          </div>
          <div className="card fade-in">
            <div className="card-header">
              <span className="card-icon">{stats.doctors.icon}</span>
              <h3>Doctors</h3>
            </div>
            <p className="card-value">{stats.doctors.count}</p>
            <span className="card-change positive">{stats.doctors.change} from last month</span>
          </div>
          <div className="card fade-in">
            <div className="card-header">
              <span className="card-icon">{stats.appointments.icon}</span>
              <h3>Appointments</h3>
            </div>
            <p className="card-value">{stats.appointments.count}</p>
            <span className="card-change positive">{stats.appointments.change} from last week</span>
          </div>
        </div>

        {/* Additional Features */}
        <div className="dashboard-grid">
          {/* Recent Activities */}
          <div className="activity-card">
            <h3>Recent Activities</h3>
            <ul className="activity-list">
              {recentActivities.map((activity, index) => (
                <li key={index} className="activity-item">
                  <span className="activity-time">{activity.time}</span>
                  <span className="activity-text">{activity.activity}</span>
                  <span className={`activity-type ${activity.type}`}></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Stats Chart */}
          <div className="chart-card">
            <h3>Monthly Overview</h3>
            <div className="chart-container">
              <div className="chart-bar" style={{height: '70%'}} data-label="Patients">
                <span className="chart-value">1247</span>
              </div>
              <div className="chart-bar" style={{height: '50%'}} data-label="Doctors">
                <span className="chart-value">89</span>
              </div>
              <div className="chart-bar" style={{height: '85%'}} data-label="Appointments">
                <span className="chart-value">456</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
