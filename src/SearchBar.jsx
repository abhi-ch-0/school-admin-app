import React from 'react';

const SearchBar = ({ placeholder }) => {
    return (
        <div className="flex items-center bg-neutral-light rounded-md shadow p-1">
            {/* Input Field */}
            <input
                type="text"
                className="flex-grow bg-transparent text-neutral-dark placeholder-neutral-dark text-sm px-2 py-1 focus:outline-none"
                placeholder={placeholder}
            />

            {/* Magnifier Button */}
            <button className="bg-primary text-white rounded-md w-8 h-8 flex items-center justify-center hover:bg-primary-dark transition duration-200">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-4.35-4.35m2.35-6.65a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </button>
        </div>
    );
};

export default SearchBar;