import React from 'react'

const Checklist = () => {
  return (
    <>
        <div className="flex flex-col items-center    bg-[#eeeaea] mt-[50px] ">
            <h1 className="text-3xl leading-42 mb-6 text-black">Have you undergone these procedures before?</h1>
            <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">ICSI Procedure</h2>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="icsi"
                  value="yes"
                  className="accent-rose-500"
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="icsi"
                  value="no"
                  className="accent-rose-500"
                />
                No
              </label>
            </div>
          </div>

          {/* PGT Testing */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">PGT Testing</h2>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="pgt"
                  value="yes"
                  className="accent-rose-500"
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="pgt"
                  value="no"
                  className="accent-rose-500"
                />
                No
              </label>
            </div>
          </div>
        </div>
            </div>
        </div>
    </>
  )
}

export default Checklist;