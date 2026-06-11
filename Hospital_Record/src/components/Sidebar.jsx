import { Link, useNavigate } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaUserMd, FaCalendarAlt, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="sidebar">
      <h2>Hospital</h2>
      <Link to="/dashboard"><FaTachometerAlt /> Dashboard</Link>
      <Link to="/patients"><FaUsers /> Patients</Link>
      <Link to="/doctors"><FaUserMd /> Doctors</Link>
      <Link to="/appointments"><FaCalendarAlt /> Appointments</Link>
      <button onClick={logout}><FaSignOutAlt /> Logout</button>
    </div>
  );
}
