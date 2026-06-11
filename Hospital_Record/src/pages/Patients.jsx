/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { FaUpload, FaFileAlt } from "react-icons/fa";

export default function Patients() {
  const [patientName, setPatientName] = useState("");
  const [block, setBlock] = useState("");
  const [reportText, setReportText] = useState("");
  const [file, setFile] = useState(null); // For X-ray/PDF
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("hospitalReports")) || [];
    setReports(saved);
  }, []);

  const uploadReport = () => {
    if (!patientName || !block || (!reportText && !file)) {
      alert("Please fill all fields or upload a file");
      return;
    }

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        saveReport(e.target.result);
      };
      reader.readAsDataURL(file); // convert file to Base64
    } else {
      saveReport(null);
    }
  };

  const saveReport = (fileData) => {
    const newReport = {
      id: Date.now(),
      patientName,
      block,
      reportText,
      file: fileData, // Base64 string
      fileName: file ? file.name : null,
    };

    const updatedReports = [...reports, newReport];
    setReports(updatedReports);
    localStorage.setItem("hospitalReports", JSON.stringify(updatedReports));

    setPatientName("");
    setBlock("");
    setReportText("");
    setFile(null);
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <Navbar title="Patients / Upload Report" />

        <div className="upload-form">
          <h2>Upload Patient Report</h2>

          <div className="form-group">
            <label htmlFor="patientName">Patient Name</label>
            <input
              id="patientName"
              type="text"
              placeholder="Enter patient name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="block">Hospital Block</label>
            <input
              id="block"
              type="text"
              placeholder="e.g., Cardiology, Neurology"
              value={block}
              onChange={(e) => setBlock(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="reportText">Report Details</label>
            <textarea
              id="reportText"
              placeholder="Enter report details (optional if uploading file)"
              value={reportText}
              onChange={(e) => setReportText(e.target.value)}
              rows="4"
            />
          </div>

          <div className="form-group">
            <label htmlFor="file">Upload File</label>
            <div className="file-upload">
              <input
                id="file"
                type="file"
                accept=".pdf,image/*"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <span className="file-info">
                {file ? `Selected: ${file.name}` : "Choose PDF or image file"}
              </span>
            </div>
          </div>

          <button className="upload-btn" onClick={uploadReport}>
            <span className="btn-icon"><FaUpload /></span>
            Upload Report
          </button>
        </div>

        <div className="reports-section">
          <h3>All Reports</h3>
          <div className="reports-list">
            {reports.length === 0 ? (
              <p className="no-reports">No reports uploaded yet.</p>
            ) : (
              reports.map((r) => (
                <div key={r.id} className="report-card">
                  <div className="report-header">
                    <h4>{r.patientName}</h4>
                    <span className="block-badge">{r.block}</span>
                  </div>
                  <div className="report-content">
                    {r.reportText && <p>{r.reportText}</p>}
                    {r.file && (
                      <div className="file-link">
                        <a
                          href={r.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          download={r.fileName}
                        >
                          <span className="file-icon"><FaFileAlt /></span>
                          View/Download File ({r.fileName})
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
