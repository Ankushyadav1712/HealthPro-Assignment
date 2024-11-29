import React, { useState } from "react";

const Checklist = () => {
  const [formData, setFormData] = useState({
    icsi: null,
    pgt: null,
  });

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-6 rounded shadow-lg">
        <h4 className="text-xl font-semibold mb-6">
          Have you undergone these procedures before?
        </h4>
        <div className="flex justify-between gap-16">
          {/* ICSI Procedure */}
          <div>
            <label className="font-bold block mb-2">ICSI Procedure:</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="icsi"
                  value="yes"
                  checked={formData.icsi === "yes"}
                  onChange={handleRadioChange}
                  className="accent-rose-500"
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="icsi"
                  value="no"
                  checked={formData.icsi === "no"}
                  onChange={handleRadioChange}
                  className="accent-rose-500"
                />
                No
              </label>
            </div>
          </div>

          {/* PGT Testing */}
          <div>
            <label className="font-bold block mb-2">PGT Testing:</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="pgt"
                  value="yes"
                  checked={formData.pgt === "yes"}
                  onChange={handleRadioChange}
                  className="accent-rose-500"
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="pgt"
                  value="no"
                  checked={formData.pgt === "no"}
                  onChange={handleRadioChange}
                  className="accent-rose-500"
                />
                No
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default C;
