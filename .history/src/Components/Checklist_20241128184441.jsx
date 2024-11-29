import React, { useState } from 'react';

const Checklist = () => {
  const [formData, setFormData] = useState({
    icsi: null,
    pgt: null,
    conditions: {
      PCOS: false,
      Endometriosis: false,
      LowOvarianReserve: false,
      MaleFactorInfertility: false,
    },
  });

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      conditions: {
        ...prevData.conditions,
        [name]: checked,
      },
    }));
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      {/* Procedures Section */}
      <div style={{ marginBottom: '20px' }}>
        <h4>Have you undergone these procedures before?</h4>
        <label style={{ marginRight: '10px' }}>
          <input
            type="radio"
            name="icsi"
            value="yes"
            checked={formData.icsi === 'yes'}
            onChange={handleRadioChange}
            style={{ accentColor: '#F28C82' }}
          />
          ICSI Procedure: Yes
        </label>
        <label style={{ marginRight: '10px' }}>
          <input
            type="radio"
            name="icsi"
            value="no"
            checked={formData.icsi === 'no'}
            onChange={handleRadioChange}
            style={{ accentColor: '#F28C82' }}
          />
          No
        </label>
        <label style={{ marginRight: '10px' }}>
          <input
            type="radio"
            name="pgt"
            value="yes"
            checked={formData.pgt === 'yes'}
            onChange={handleRadioChange}
            style={{ accentColor: '#F28C82' }}
          />
          PGT Testing: Yes
        </label>
        <label>
          <input
            type="radio"
            name="pgt"
            value="no"
            checked={formData.pgt === 'no'}
            onChange={handleRadioChange}
            style={{ accentColor: '#F28C82' }}
          />
          No
        </label>
      </div>

      {/* Medical Conditions Section */}
      <div>
        <h4>Do you have any of these medical conditions?</h4>
        {['PCOS', 'Endometriosis', 'LowOvarianReserve', 'MaleFactorInfertility'].map((condition) => (
          <label key={condition} style={{ display: 'block', marginBottom: '10px' }}>
            <input
              type="checkbox"
              name={condition}
              checked={formData.conditions[condition]}
              onChange={handleCheckboxChange}
              style={{ accentColor: '#F28C82' }}
            />
            {condition.replace(/([A-Z])/g, ' $1')} {/* Converts camelCase to readable text */}
          </label>
        ))}
      </div>
    </div>
  );
};

export default C;
