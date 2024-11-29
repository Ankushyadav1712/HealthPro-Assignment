import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [ageRange, setAgeRange] = useState("");
  const [ivfCycles, setIvfCycles] = useState(1);
  const [icsiProcedure, setIcsiProcedure] = useState("");
  const [pgtTesting, setPgtTesting] = useState("");
  const [medicalConditions, setMedicalConditions] = useState([]);

  const medicalOptions = [
    "PCOS",
    "Endometriosis",
    "Low Ovarian Reserve",
    "Male Factor Infertility",
  ];

  const handleConditionChange = (condition) => {
    setMedicalConditions((prev) =>
      prev.includes(condition)
        ? prev.filter((item) => item !== condition)
        : [...prev, condition]
    );
  };

  return (
    <div className="form-container">
      <h2>Which age range applies to you?</h2>
      <div className="radio-group">
        {["Under 30", "30 - 34", "35 - 37", "38 - 40", "41 - 43", "Above 43"].map(
          (range) => (
            <label key={range}>
              <input
                type="radio"
                name="ageRange"
                value={range}
                checked={ageRange === range}
                onChange={(e) => setAgeRange(e.target.value)}
              />
              {range}
            </label>
          )
        )}
      </div>

      <h2>Number of IVF Cycles?</h2>
      <input
        type="range"
        min="1"
        max="5"
        value={ivfCycles}
        onChange={(e) => setIvfCycles(Number(e.target.value))}
      />
      <span className="cycle-value">{ivfCycles}</span>

      <h2>Have you undergone these procedures before?</h2>
      <div className="procedure-group">
        <div>
          <label>
            ICSI Procedure:
            <input
              type="radio"
              name="icsiProcedure"
              value="Yes"
              checked={icsiProcedure === "Yes"}
              onChange={(e) => setIcsiProcedure(e.target.value)}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="icsiProcedure"
              value="No"
              checked={icsiProcedure === "No"}
              onChange={(e) => setIcsiProcedure(e.target.value)}
            />
            No
          </label>
        </div>
        <div>
          <label>
            PGT Testing:
            <input
              type="radio"
              name="pgtTesting"
              value="Yes"
              checked={pgtTesting === "Yes"}
              onChange={(e) => setPgtTesting(e.target.value)}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="pgtTesting"
              value="No"
              checked={pgtTesting === "No"}
              onChange={(e) => setPgtTesting(e.target.value)}
            />
            No
          </label>
        </div>
      </div>

      <h2>Do you have any of these medical conditions?</h2>
      <div className="checkbox-group">
        {medicalOptions.map((condition) => (
          <label key={condition}>
            <input
              type="checkbox"
              value={condition}
              checked={medicalConditions.includes(condition)}
              onChange={() => handleConditionChange(condition)}
            />
            {condition}
          </label>
        ))}
      </div>

      <button className="calculate-btn">Calculate</button>
    </div>
  );
};

export default Form;
