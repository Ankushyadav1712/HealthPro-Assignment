import React from 'react'

const Radiolist = ({ setIvfDetails }) => {

  const handleChange = (e) => {
    if
  }
  return (
    <>
      <div className="flex flex-col items-center    bg-[#eeeaea] mt-[50px] ">
        <h1 className="text-3xl leading-42 mb-6 text-black">
          Have you undergone these procedures before?
        </h1>
        <div className="grid grid-cols-2 gap-20">
          <div className="flex flex-col items-center">
            <div className="flex gap-4">
              <label className="flex items-center gap-4 text-black">
                ICSI Procedure:
                <input
                  type="radio"
                  name="icsi"
                  value="yes"
                  className="radio-input"
                  onChange={handleChange}
                />
                Yes
              </label>
              <label className="flex items-center gap-4 text-black">
                <input
                  type="radio"
                  name="icsi"
                  value="no"
                  className="radio-input"
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          {/* PGT Testing */}
          <div className="flex flex-col items-center ">
            <div className="flex gap-4">
              <label className="flex items-center gap-4 text-black">
                PGT Testing:
                <input
                  type="radio"
                  name="pgt"
                  value="yes"
                  className="radio-input"
                />
                Yes
              </label>
              <label className="flex items-center gap-4 text-black">
                <input
                  type="radio"
                  name="pgt"
                  value="no"
                  className="radio-input"
                />{" "}
                No
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Radiolist;