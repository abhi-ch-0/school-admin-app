import React, { useState, useEffect } from "react";
import UserDetailPanel from "./UserDetailPanel"; // Updated import
import UserTable from "./UserTable"; // Import the new component
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

                <UserTable
                    headers={headers[activeTab]}
                    data={currentData}
                    loading={loading}
                    onRowClick={(item) => setSelectedUser(item)}
                />
            </div>

            {/* Detail Panel */}
            <UserDetailPanel
                activeTab={activeTab}
                user={selectedUser}
                onClose={() => setSelectedUser(null)}
            />
        </div>
    );
};

export default Users;