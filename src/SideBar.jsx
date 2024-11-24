import React, { useState } from 'react';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div
            className={`flex flex-col bg-primary-dark text-white h-screen ${isCollapsed ? 'w-16' : 'w-56'
                } transition-width duration-300`}
        >
            {/* Toggle Button */}
            <button
                className="p-2 text-white hover:bg-primary-dark-light focus:outline-none"
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                {isCollapsed ? '>' : '<'}
            </button>

            {/* Navigation Links */}
            <nav clbassName="flex flex-col mt-4 space-y-2">
                {['Dashboard', 'Add Items', 'Settings'].map((item) => (
                    <a
                        href="#"
                        key={item}
                        className={`flex items-center p-2 text-sm hover:bg-primary-dark-light ${isCollapsed ? 'justify-center' : 'pl-6'
                            }`}
                    >
                        {/* Same Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        {!isCollapsed && <span className="ml-3">{item}</span>}
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;