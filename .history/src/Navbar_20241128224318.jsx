// import React, { useState } from 'react';
// import '@fortawesome/fontawesome-free/css/all.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <header className="w-full fixed top-0 left-0 bg-white shadow-md z-10 h-[85px] mb-[1px]">
//             <div className="flex flex-col md:flex-row items-center justify-between p-4 max-w-7xl mx-auto ml-[-1px]">
//                 {/* Logo Section */}
//                 <div className="flex items-center justify-between  md:w-auto w-[200px] h-[45px] top-[20px] left-[120px]">
//                     <div className="flex items-center bg-black p-2 w-[99px] h-[45px] justify-center">
//                         <span className="text-white text-xl font-bold leading-40">i</span>
//                         <span className="text-white text-xl font-bold">V</span>
//                         <span className="text-white text-xl font-bold">F</span>
//                     </div>
//                     {/* <span className="ml-2 text-2xl font-bold text-black">Pulse</span> */}
//                     <span className="w-[93.77px] h-[38.83px] top-[3.66px] left-[106.23px] text-2xl leading-[38.1px] text-black">Pulse</span>
//                     {/* Mobile Menu Toggle */}
//                     <button className="md:hidden ml-auto" onClick={() => setMenuOpen(!menuOpen)}>
//                     <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="xl" className='text-black' />
//                     </button>
//                 </div>

//                 {/* Navigation Menu */}
//                 <div className={`flex-col md:flex-row md:flex ${menuOpen ? 'flex' : 'hidden'}  w-[1176px] h-[68px]  left-[432px]  pt-[10px]  gap-[1px]`}>
//                     <a href="#" className="text-black text-lg w-[170px] h-[22px] rounded-[6px] pr-[10px] pl-[10px] gap-[8px]">Donor Programme</a>
//                     <a href="#" className="text-black text-lg w-[184px] h-[22px] rounded-[6px] pr-[10px] pl-[10px] gap-[8px]">Fertility Preservation</a>
//                     <a href="#" className="text-black text-lg w-[201px] h-[22px] rounded-[6px] pr-[10px] pl-[10px] gap-[8px]">Advanced Treatments</a>
//                     <a href="#" className="text-black text-lg w-[180px] h-[22px] rounded-[6px] pr-[10px] pl-[10px] gap-[8px]">Infertility Treatments</a>
//                     <a href="#" className="text-black text-lg w-[139px] h-[22px] rounded-[6px] pr-[10px] pl-[10px] gap-[7px] ">IVF Testing</a>
//                     <a href="#" className="text-black text-lg w-[92px] h-[22px] rounded-[6px] pr-[10px] pl-[10px] gap-[7px] ml-[10px]">About Us</a>
//                     <button className="bg-red-500 text-white  w-[130px] h-[48px] rounded-[6px] ml-[60px]  ">
//                         Talk to Us <i className="fas fa-arrow-right"></i>
//                     </button>
//                 </div>
//             </div>
//         </header>
//     );
// };


// export default Navbar;





import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full fixed top-0 left-0 bg-white shadow-md z-10 h-[85px] mb-[1px] ">
            <div className="flex flex-col md:flex-row items-center justify-between p-4 max-w-7xl mx-auto relative ">
                {/* Logo Section */}
                <div className="flex items-center justify-between w-full md:w-auto mr-8 ml-[-50px] ">
                <div class="absolute top-0 left-0 w-12 h-1 bg-[#D97B66]"></div>
                <div class="absolute top-[-12px] left-0 w-6 h-6 bg-[#D97B66] rounded-full"></div>
                    <div className="flex items-center bg-black p-2 w-[99px] h-[45px] justify-center mb-4 ml-[-10px] font-poppins font-[600] text-[35.16px] leading-[30.77px] tracking-[2.47px]">
                        <span className="text-white text-3xl font-bold ">i</span>
                        <span className="text-white text-3xl font-bold ">V</span>
                        <span className="text-white text-3xl font-bold ">F</span>
                    </div>
                    <span className=" md:block text-2xl  text-black mb-4 font-[500] text-[35.16px] leading-[38.1px] tracking-[2.47px]">Pulse</span>
                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden ml-auto" onClick={() => setMenuOpen(!menuOpen)}>
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="xl" className="text-black"/>
                    </button>
                </div>

                {/* Navigation Menu */}
                <div className={`flex flex-col md:flex-row md:flex ${menuOpen ? 'flex' : 'hidden'} md:flex md:gap-4 w-full md:w-auto bg-white mt-[12px] pr-[10px] `}>
                    <a href="#" className="text-black text-lg w-full md:w-[170px] h-[22px] md:h-auto rounded-[6px] p-2 md:p-0">Donor Programme</a>
                    <a href="#" className="text-black text-lg w-full md:w-[184px] h-[22px] md:h-auto rounded-[6px] p-2 md:p-0">Fertility Preservation</a>
                    <a href="#" className="text-black text-lg w-full md:w-[201px] h-[22px] md:h-auto rounded-[6px] p-2 md:p-0">Advanced Treatments</a>
                    <a href="#" className="text-black text-lg w-full md:w-[188px] h-[22px] md:h-auto rounded-[6px] p-2 md:p-0">Infertility Treatments</a>
                    <a href="#" className="text-black text-lg w-full md:w-[107px] h-[22px] md:h-auto rounded-[6px] p-2 md:p-0">IVF Testing </a>
                    <a href="#" className="text-black text-lg w-full md:w-[93px] h-[22px] md:h-auto rounded-[6px] p-2 md:p-0">About Us</a>
                    <button className="bg-red-500 text-white w-full md:w-[120px] h-[48px] rounded-[6px] mt-4 md:mt-0 ">
                        Talk to Us <i className="fas fa-arrow-right"></i>
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Navbar;
