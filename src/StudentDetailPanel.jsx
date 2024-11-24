import React, { useState, useEffect } from "react";

const StudentDetailPanel = ({ user, onClose }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user) {
            setIsLoading(true); // Reset loading state when the user changes
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 2000); // Simulated loading time

            return () => clearTimeout(timer); // Cleanup timeout
        }
    }, [user]); // Re-run the effect when `user` changes

    if (!user) return null;

    return (
        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-md p-4 overflow-y-auto z-10">
            {/* Close Button */}
            <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl"
                onClick={onClose}
            >
                ✕
            </button>

            {/* User ID */}
            <div className="flex flex-col items-center text-center mt-6">
                <p className="text-sm text-gray-500">{user.id || "N/A"}</p>
            </div>

            {/* Loading Spinner or Content */}
            {isLoading ? (
                <div className="flex flex-col items-center justify-center mt-12">
                    {/* Spinner */}
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-primary-light rounded-full animate-spin"></div>
                    <p className="text-sm text-gray-500 mt-2">Loading details...</p>
                </div>
            ) : (
                <div>
                    {/* Profile Section */}
                    <div className="flex flex-col items-center text-center mt-6">
                        {/* Profile Image */}
                        {user.profileImage ? (
                            <img
                                src={user.profileImage}
                                alt={user.name}
                                className="w-24 h-24 rounded-full mb-2"
                            />
                        ) : (
                            <div className="w-24 h-24 bg-gray-300 rounded-full mb-2"></div>
                        )}

                        {/* Name */}
                        <h2 className="text-lg font-semibold mt-1">{user.name || "N/A"}</h2>
                        <p className="text-sm text-gray-600">{user.class || "Student"}</p>
                    </div>

                    {/* Details Section */}
                    <div className="mt-6 grid grid-cols-2 gap-4">
                        <div>
                            <h4 className="text-xs font-medium text-gray-500">Age</h4>
                            <p className="text-sm text-gray-700">{user.age || "N/A"}</p>
                        </div>
                        <div>
                            <h4 className="text-xs font-medium text-gray-500">Gender</h4>
                            <p className="text-sm text-gray-700">{user.gender || "N/A"}</p>
                        </div>
                        <div>
                            <h4 className="text-xs font-medium text-gray-500">Date of Birth</h4>
                            <p className="text-sm text-gray-700">{user.dob || "N/A"}</p>
                        </div>
                        <div>
                            <h4 className="text-xs font-medium text-gray-500">Address</h4>
                            <p className="text-sm text-gray-700">{user.address || "N/A"}</p>
                        </div>
                    </div>

                    {/* Parent Section */}
                    <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-700">Parent</h3>
                        {user.parent ? (
                            <div className="mt-2">
                                <p className="text-sm text-gray-700">
                                    <strong>Name:</strong> {user.parent.name}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <strong>Contact:</strong> {user.parent.contact || "N/A"}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <strong>Email:</strong> {user.parent.email || "N/A"}
                                </p>
                            </div>
                        ) : (
                            <p className="text-sm text-gray-500 mt-2">No parent details available.</p>
                        )}
                    </div>

                    {/* Guardian Section */}
                    <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-700">Guardian</h3>
                        {user.guardian ? (
                            <div className="mt-2">
                                <p className="text-sm text-gray-700">
                                    <strong>Name:</strong> {user.guardian.name}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <strong>Contact:</strong> {user.guardian.contact || "N/A"}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <strong>Email:</strong> {user.guardian.email || "N/A"}
                                </p>
                            </div>
                        ) : (
                            <p className="text-sm text-gray-500 mt-2">No guardian details available.</p>
                        )}
                    </div>

                    {/* Documents Section */}
                    <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-700">Documents</h3>
                        {user.documents && user.documents.length > 0 ? (
                            <ul className="mt-2 space-y-2">
                                {user.documents.map((doc, index) => (
                                    <li
                                        key={index}
                                        className="bg-gray-100 p-3 rounded-md flex items-center space-x-2"
                                    >
                                        <span className="text-lg">📄</span>
                                        <a
                                            href={doc.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-primary-dark hover:underline"
                                        >
                                            {doc.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-gray-500 mt-2">No documents exist.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudentDetailPanel;