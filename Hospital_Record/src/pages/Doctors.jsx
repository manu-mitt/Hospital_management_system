/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Doctors() {
  const [reports, setReports] = useState([]);
  const [doctorName, setDoctorName] = useState("");
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const savedReports = JSON.parse(localStorage.getItem("hospitalReports")) || [];
    setReports(savedReports);

    const savedDoctors = JSON.parse(localStorage.getItem("doctors")) || [];
    setDoctors(savedDoctors);
  }, []);

  const addDoctor = () => {
    if (!doctorName) return;
    const newDoctor = { id: Date.now(), name: doctorName };
    const updated = [...doctors, newDoctor];
    setDoctors(updated);
    localStorage.setItem("doctors", JSON.stringify(updated));
    setDoctorName("");
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <Navbar title="Doctors & Patient Reports" />

        <h3>Add Doctor</h3>
        <input
          placeholder="Doctor Name"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
        />
        <button onClick={addDoctor}>Add Doctor</button>

        <h4>All Doctors:</h4>
        <ul>
          {doctors.map((d) => (
            <li key={d.id}>{d.name}</li>
          ))}
        </ul>

        <hr />

        <h3>All Patient Reports</h3>
        {reports.length === 0 && <p>No reports uploaded yet.</p>}

        <ul>
          {reports.map((r) => (
            <li key={r.id}>
              <b>{r.patientName}</b> ({r.block}): {r.reportText || "No text"}
              {r.file && (
                <div>
                  <a
                    href={r.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={r.fileName}
                  >
                    View/Download File ({r.fileName})
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
