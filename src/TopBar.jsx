import React from 'react';
import SearchBar from './SearchBar';

const TopBar = ({ schoolName }) => {
    return (
        <nav className="px-2 py-4 flex items-center justify-between">
            <div className="text-primary-light font-bold">
                {schoolName}
            </div>

            <div className="px-2 w-full max-w-lg">
                <SearchBar placeholder="Search for teachers, students, staff, parents..." />
            </div>

            <div></div>
        </nav>
    );
};

export default TopBar;
