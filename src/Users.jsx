import React, { useState, useEffect } from "react";

const Users = () => {
    const [activeTab, setActiveTab] = useState("Students");
    const [currentData, setCurrentData] = useState([]);
    const [loading, setLoading] = useState(false);

    const data = {
        Students: [
            { name: "Ken Khoi", id: "SC400122", class: "Science 4", age: 17, gender: "Male", email: "KKhoi@gmail.com", profileImage: "https://i.pravatar.cc/40?u=student1" },
            { name: "Zach Sweger", id: "SC400123", class: "Science 4", age: 18, gender: "Male", email: "ZSweger@gmail.com", profileImage: "https://i.pravatar.cc/40?u=student2" },
            { name: "Brooklyn Simmons", id: "SC400124", class: "Science 4", age: 18, gender: "Female", email: "BrookS@gmail.com", profileImage: "https://i.pravatar.cc/40?u=student3" },
            { name: "Savannah Nguyen", id: "SC400125", class: "Science 4", age: 19, gender: "Female", email: "Savangu@gmail.com", profileImage: "https://i.pravatar.cc/40?u=student4" },
            { name: "Robert Fox", id: "SC400126", class: "Science 4", age: 17, gender: "Male", email: "RobertF@gmail.com", profileImage: "https://i.pravatar.cc/40?u=student5" },
        ],
        Teachers: [
            { name: "Alice Johnson", id: "T1001", subject: "Math", experience: 5, email: "AliceJ@gmail.com", profileImage: "https://i.pravatar.cc/40?u=teacher1" },
            { name: "Bob Smith", id: "T1002", subject: "Physics", experience: 8, email: "BobS@gmail.com", profileImage: "https://i.pravatar.cc/40?u=teacher2" },
            { name: "Catherine Holmes", id: "T1003", subject: "Chemistry", experience: 10, email: "CatherineH@gmail.com", profileImage: "https://i.pravatar.cc/40?u=teacher3" },
            { name: "Daniel Brown", id: "T1004", subject: "Biology", experience: 6, email: "DanielB@gmail.com", profileImage: "https://i.pravatar.cc/40?u=teacher4" },
            { name: "Emily Green", id: "T1005", subject: "English", experience: 12, email: "EmilyG@gmail.com", profileImage: "https://i.pravatar.cc/40?u=teacher5" },
        ],
        Staff: [
            { name: "Charlie Lee", id: "S2001", department: "Administration", role: "Clerk", email: "CharlieL@gmail.com", profileImage: "https://i.pravatar.cc/40?u=staff1" },
            { name: "Dana White", id: "S2002", department: "Maintenance", role: "Supervisor", email: "DanaW@gmail.com", profileImage: "https://i.pravatar.cc/40?u=staff2" },
            { name: "Ethan King", id: "S2003", department: "IT Support", role: "Technician", email: "EthanK@gmail.com", profileImage: "https://i.pravatar.cc/40?u=staff3" },
            { name: "Fiona Carter", id: "S2004", department: "Accounts", role: "Accountant", email: "FionaC@gmail.com", profileImage: "https://i.pravatar.cc/40?u=staff4" },
            { name: "George Allen", id: "S2005", department: "HR", role: "HR Manager", email: "GeorgeA@gmail.com", profileImage: "https://i.pravatar.cc/40?u=staff5" },
        ],
        Parents: [
            { name: "Edward Kim", child: "Ken Khoi", contact: "1234567890", email: "EdwardK@gmail.com", profileImage: "https://i.pravatar.cc/40?u=parent1" },
            { name: "Fiona Green", child: "Zach Sweger", contact: "9876543210", email: "FionaG@gmail.com", profileImage: "https://i.pravatar.cc/40?u=parent2" },
            { name: "Hannah White", child: "Brooklyn Simmons", contact: "1122334455", email: "HannahW@gmail.com", profileImage: "https://i.pravatar.cc/40?u=parent3" },
            { name: "Ian Black", child: "Savannah Nguyen", contact: "6677889900", email: "IanB@gmail.com", profileImage: null },
            { name: "Julia Roberts", child: "Robert Fox", contact: "5544332211", email: "JuliaR@gmail.com", profileImage: null },
        ],
    };

    const headers = {
        Students: ["Name", "ID", "Class", "Age", "Gender", "Email"],
        Teachers: ["Name", "ID", "Subject", "Experience (Years)", "Email"],
        Staff: ["Name", "ID", "Department", "Role", "Email"],
        Parents: ["Name", "Child", "Contact", "Email"],
    };

    useEffect(() => {
        setLoading(true);
        setCurrentData([]);
        const timeout = setTimeout(() => {
            setCurrentData(data[activeTab]);
            setLoading(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, [activeTab]);

    return (
        <div className="font-poppins">
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
                {Object.keys(data).map((tab) => (
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
                                {headers[activeTab].map((header, colIndex) => (
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
                                    className="hover:bg-secondary-light even:bg-neutral-light"
                                >
                                    {headers[activeTab].map((header, colIndex) => {
                                        const key = header.toLowerCase().replace(/\s/g, "");
                                        return (
                                            <td
                                                key={colIndex}
                                                className="px-3 py-2 text-neutral-dark whitespace-nowrap overflow-hidden text-ellipsis"
                                                style={{ maxWidth: colIndex === 0 ? "150px" : "auto" }} // Limit column width for "Name"
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
    );
};

export default Users;