import React from 'react'

const Radiolist = ({ setIvfDetails }) => {

  const handleChange = (e) => {
    if(e.target.name == "icsi"){
      setIvfDetails(prev =>  {return {...prev, icsiProcedure: e.target.value}})
    }else {
      setIvfDetails(prev =>  {return {...prev, pgtTesting: e.target.value}})

    }
  }
  return (
    <>
      <div className="flex flex-col items-center    bg-[#eeeaea] mt-[30px]  ">
        <h1 className="sm:text-3xl leading-42 text-xl ml-[30px] mb-6 text-black">
          Have you undergone these procedures before?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="flex flex-col items-center">
            <div className="flex gap-4 ml-[-50px]">
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
            <div className="flex gap-4 ml-[-70px] m">
              <label className="flex items-center gap-4 text-black">
                PGT Testing:
                <input
                  type="radio"
                  name="pgt"
                  value="yes"
                  className="radio-input"
                  onChange={handleChange}
                />
                Yes
              </label>
              <label className="flex items-center gap-4 text-black">
                <input
                  type="radio"
                  name="pgt"
                  value="no"
                  className="radio-input"
                  onChange={handleChange}
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