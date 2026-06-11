import { FaHospital } from "react-icons/fa";

export default function Navbar({ title }) {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <FaHospital className="navbar-logo" />
        <h1>{title}</h1>
      </div>
    </div>
  );
}
