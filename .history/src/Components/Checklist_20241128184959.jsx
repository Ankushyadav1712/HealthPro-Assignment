import React, { useState } from "react";

const ProcedureForm = () => {
  const [formData, setFormData] = useState({
    icsi: null,
    pgt: null,
  });

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Ensures full viewport height
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9", // Optional background
      }}
    >
      <div style={{ textAlign: "center", color: "#333" }}>
        <h4 style={{ marginBottom: "20px" }}>Have you undergone these procedures before?</h4>
        <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "600px", margin: "0 auto" }}>
          {/* ICSI Procedure */}
          <div>
            <label style={{ fontWeight: "bold", display: "block", marginBottom: "10px" }}>
              ICSI Procedure:
            </label>
            <label style={{ marginRight: "10px" }}>
              <input
                type="radio"
                name="icsi"
                value="yes"
                checked={formData.icsi === "yes"}
                onChange={handleRadioChange}
                style={{ accentColor: "#E07460" }} // Matches the orange tone
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="icsi"
                value="no"
                checked={formData.icsi === "no"}
                onChange={handleRadioChange}
                style={{ accentColor: "#E07460" }}
              />
              No
            </label>
          </div>

          {/* PGT Testing */}
          <div>
            <label style={{ fontWeight: "bold", display: "block", marginBottom: "10px" }}>
              PGT Testing:
            </label>
            <label style={{ marginRight: "10px" }}>
              <input
                type="radio"
                name="pgt"
                value="yes"
                checked={formData.pgt === "yes"}
                onChange={handleRadioChange}
                style={{ accentColor: "#E07460" }}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="pgt"
                value="no"
                checked={formData.pgt === "no"}
                onChange={handleRadioChange}
                style={{ accentColor: "#E07460" }}
              />
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcedureForm;
