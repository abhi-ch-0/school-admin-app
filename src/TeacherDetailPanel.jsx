import React from "react";

const TeacherDetailPanel = ({ user, onClose }) => {
    if (!user) return null;

    return (
        <div className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-md p-6 overflow-y-auto z-10">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <button
                    className="text-gray-400 hover:text-gray-600 text-lg"
                    onClick={onClose}
                >
                    ✕
                </button>
            </div>
            <p className="text-gray-600 mb-4">Subject: {user.subject}</p>
            <ul className="space-y-2">
                <li><strong>Experience:</strong> {user.experience} years</li>
                <li><strong>Email:</strong> {user.email}</li>
            </ul>
        </div>
    );
};

export default TeacherDetailPanel;