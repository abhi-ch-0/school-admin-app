import React, { useState, useEffect } from "react";
import StudentDetailPanel from "./StudentDetailPanel";
import TeacherDetailPanel from "./TeacherDetailPanel";
import StaffDetailPanel from "./StaffDetailPanel";
import ParentDetailPanel from "./ParentDetailPanel";
import headers from "./data/headers";

import students from "./data/students";
import teachers from "./data/teachers";
import staff from "./data/staff";
import parents from "./data/parents";

const data = {
    Students: students,
    Teachers: teachers,
    Staff: staff,
    Parents: parents,
};

const Users = () => {
    const [activeTab, setActiveTab] = useState("Students");
    const [currentData, setCurrentData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setCurrentData([]); // Clear current data to display the loader

        // Simulate a loading delay
        const timeout = setTimeout(() => {
            setCurrentData(data[activeTab]); // Load data for the active tab
            setLoading(false);
        }, 500); // Adjust delay as needed

        return () => clearTimeout(timeout); // Cleanup timeout on unmount
    }, [activeTab]);

    const renderDetailPanel = () => {
        switch (activeTab) {
            case "Students":
                return <StudentDetailPanel user={selectedUser} onClose={() => setSelectedUser(null)} />;
            case "Teachers":
                return <TeacherDetailPanel user={selectedUser} onClose={() => setSelectedUser(null)} />;
            case "Staff":
                return <StaffDetailPanel user={selectedUser} onClose={() => setSelectedUser(null)} />;
            case "Parents":
                return <ParentDetailPanel user={selectedUser} onClose={() => setSelectedUser(null)} />;
            default:
                return null;
        }
    };

    return (
        <div className="font-poppins flex">
            {/* Main Table */}
            <div className="flex-1">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-semibold text-neutral-dark">Users</h1>
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-primary-light rounded-md hover:bg-primary-dark hover:text-white text-sm">
                            Sort
                        </button>
                        <button className="px-3 py-1 bg-primary-light rounded-md hover:bg-primary-dark hover:text-white text-sm">
                            Filter
                        </button>
                    </div>
                </div>

                <div className="flex space-x-3 border-b border-neutral-dark mb-4">
                    {Object.keys(headers).map((tab) => (
                        <button
                            key={tab}
                            className={`pb-1 px-3 text-sm ${activeTab === tab
                                ? "text-primary-dark border-b-2 border-primary-dark"
                                : "text-neutral-dark hover:text-primary-light"
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full bg-white shadow-sm rounded-md text-sm">
                        <thead className="bg-neutral-light">
                            <tr>
                                {headers[activeTab].map((header, index) => (
                                    <th
                                        key={index}
                                        className="px-3 py-2 text-left text-neutral-dark font-medium whitespace-nowrap"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    {headers[activeTab].map((_, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className="px-3 py-2 text-neutral text-center"
                                        >
                                            Loading...
                                        </td>
                                    ))}
                                </tr>
                            ) : (
                                currentData.map((item, rowIndex) => (
                                    <tr
                                        key={rowIndex}
                                        className="hover:bg-secondary-light even:bg-neutral-light cursor-pointer"
                                        onClick={() => setSelectedUser(item)}
                                    >
                                        {headers[activeTab].map((header, colIndex) => {
                                            const key = header.toLowerCase().replace(/\s/g, "");
                                            return (
                                                <td
                                                    key={colIndex}
                                                    className="px-3 py-2 text-neutral-dark whitespace-nowrap overflow-hidden text-ellipsis"
                                                    style={{ maxWidth: colIndex === 0 ? "150px" : "auto" }}
                                                >
                                                    {key === "name" ? (
                                                        <div className="flex items-center space-x-2">
                                                            {item.profileImage ? (
                                                                <img
                                                                    src={item.profileImage}
                                                                    alt={item.name}
                                                                    className="w-8 h-8 rounded-full"
                                                                />
                                                            ) : (
                                                                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                                            )}
                                                            <span className="truncate">
                                                                {item.name}
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        item[key] || "N/A"
                                                    )}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Detail Panel */}
            {selectedUser && renderDetailPanel()}
        </div>
    );
};

export default Users;