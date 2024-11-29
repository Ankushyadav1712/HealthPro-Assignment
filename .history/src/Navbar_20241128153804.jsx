import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full fixed top-0 left-0 bg-white shadow-md z-10">
            <div className="flex flex-col md:flex-row items-center justify-between p-4 max-w-7xl mx-auto">
                {/* Logo Section */}
                <div className="flex items-center justify-between w-full md:w-auto">
                    <div className="flex items-center bg-black p-2"  style={{ width: '200px', height: '45px', position: 'absolute', top: '20px', left: '120px'}}>
                        <span className="text-white text-xl font-bold">i</span>
                        <span className="text-white text-xl font-bold">V</span>
                        <span className="text-white text-xl font-bold">F</span>
                    </div>
                    <span className="ml-2 text-2xl font-bold text-black">Pulse</span>
                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden ml-auto" onClick={() => setMenuOpen(!menuOpen)}>
                        <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                    </button>
                </div>

                {/* Navigation Menu */}
                <div className={`flex-col md:flex-row md:flex ${menuOpen ? 'flex' : 'hidden'} space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0`}>
                    <a href="#" className="text-black text-lg">Donor Programme</a>
                    <a href="#" className="text-black text-lg">Fertility Preservation</a>
                    <a href="#" className="text-black text-lg">Advanced Treatments</a>
                    <a href="#" className="text-black text-lg">Infertility Treatments</a>
                    <a href="#" className="text-black text-lg">IVF Testing</a>
                    <a href="#" className="text-black text-lg">About Us</a>
                    <button className="bg-red-500 text-white px-4 py-2 rounded">
                        Talk to Us <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
