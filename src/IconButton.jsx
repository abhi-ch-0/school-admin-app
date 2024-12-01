import React from 'react';

function IconButton({ icon: Icon, onClick, className }) {
    return (
        <button
            className={`bg-primary text-white rounded-md w-8 h-8 flex items-center justify-center hover:bg-primary-dark transition duration-200 ${className}`}
            onClick={onClick}
        >
            <Icon className="h-4 w-4" />
        </button>
    );
};

export default IconButton;