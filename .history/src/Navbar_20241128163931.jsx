// import React, { useState } from 'react';
// import '@fortawesome/fontawesome-free/css/all.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <header className="w-full fixed top-0 left-0 bg-white shadow-md z-10 h-[85px] mb-[1px]">
//             <div className="flex flex-col md:flex-row items-center justify-between p-4 max-w-7xl mx-auto ">
//                 {/* Logo Section */}
//                 <div className="flex items-center justify-between  md:w-auto w-[200px] h-[45px] top-[20px] left-[120px]">
//                     <div className="flex items-center bg-black p-2 w-[99px] h-[45px] justify-center">
//                         <span className="text-white text-xl font-bold">i</span>
//                         <span className="text-white text-xl font-bold">V</span>
//                         <span className="text-white text-xl font-bold">F</span>
//                     </div>
//                     {/* <span className="ml-2 text-2xl font-bold text-black">Pulse</span> */}
//                     <span className="w-[93.77px] h-[38.83px] top-[3.66px] left-[106.23px] text-2xl leading-[38.1px] text-black">Pulse</span>
//                     {/* Mobile Menu Toggle */}
//                     <button className="md:hidden ml-auto" onClick={() => setMenuOpen(!menuOpen)}>
//                     <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="xl" />
//                     </button>
//                 </div>

//                 {/* Navigation Menu */}
//                 <div className={`flex-col md:flex-row md:flex ${menuOpen ? 'flex' : 'hidden'}  w-[1176px] h-[68px]  left-[432px]  pt-[10px]  gap-[1px]`}>
//                     <a href="#" className="text-black text-lg w-[170px] h-[22px] rounded-[6px] pr-[10px] pl-[10px] gap-[8px]">Donor Programme</a>
//                     <a href="#" className="text-black text-lg w-[184px] h-[22px] rounded-[6px] pr-[10px] pl-[10px] gap-[8px]">Fertility Preservation</a>
//                     <a href="#" className="text-black text-lg w-[201px] h-[22px] rounded-[6px] pr-[10px] pl-[10px] gap-[8px]">Advanced Treatments</a>
//                     <a href="#" className="text-black text-lg w-[188px] h-[22px] rounded-[6px] pr-[10px] pl-[10px] gap-[8px]">Infertility Treatments</a>
//                     <a href="#" className="text-black text-lg w-[107px] h-[22px] rounded-[6px] pr-[10px] pl-[10px] gap-[7px]">IVF Treatments</a>
//                     <a href="#" className="text-black text-lg w-[93px] h-[22px] rounded-[6px] pr-[10px] pl-[10px] gap-[7px]">About Us</a>
//                     <button className="bg-red-500 text-white  w-[143px] h-[48px] rounded-[6px] ">
//                         Talk to Us <i className="fas fa-arrow-right"></i>
//                     </button>
//                 </div>
//             </div>
//         </header>
//     );
// };


// export default Navbar;
