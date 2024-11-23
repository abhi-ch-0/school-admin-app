import React from 'react';
import SearchBar from './SearchBar';

const Topbar = () => {
    return (
        <nav className="px-2 py-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Left Side: Logo */}
                <div className="text-primary-light text-base font-bold">School</div>

                {/* Center: Search Bar */}
                <div className="px-2 w-full max-w-lg">
                    <SearchBar placeholder="Search for teachers, students, staff, parents..." />
                </div>

                {/* Right Side */}
                <div className="text-secondary text-xs"></div>
            </div>
        </nav>
    );
};

export default Topbar;