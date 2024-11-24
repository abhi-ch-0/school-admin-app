import React, { useState } from "react";

const Users = () => {
    const [activeTab, setActiveTab] = useState("Students");

    const data = [
        { name: "Ken Khoi", id: "SC400122", class: "Science 4", age: 17, gender: "Male", email: "KKhoi@gmail.com" },
        { name: "Zach Sweger", id: "SC400123", class: "Science 4", age: 18, gender: "Male", email: "ZSweger@gmail.com" },
        { name: "Brooklyn Simmons", id: "SC400122", class: "Science 4", age: 18, gender: "Female", email: "BrookS@gmail.com" },
        { name: "Savannah Nguyen", id: "SC400121", class: "Science 4", age: 19, gender: "Female", email: "Savangu@gmail.com" },
        { name: "Robert Fox", id: "SC400120", class: "Science 4", age: 17, gender: "Male", email: "RobertF@gmail.com" },
        { name: "Jane Cooper", id: "SC300112", class: "Science 3", age: 18, gender: "Female", email: "JaneCoo@gmail.com" },
        { name: "Wade Warren", id: "SC300111", class: "Science 3", age: 16, gender: "Female", email: "WadeW@gmail.com" },
        { name: "Jacob Jones", id: "SC200105", class: "Science 2", age: 15, gender: "Male", email: "JacobJ@gmail.com" },
        { name: "Jerome Bell", id: "SC100100", class: "Science 1", age: 14, gender: "Male", email: "JeromeB@gmail.com" },
        { name: "Jenny Wilson", id: "SO300141", class: "Social 3", age: 18, gender: "Female", email: "JennyW@gmail.com" },
    ];

    return (
        <>
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold text-gray-800">Users</h1>
                <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 text-sm">Sort</button>
                    <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 text-sm">Filter</button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-3 border-b border-gray-300 mb-4">
                {["Students", "Teachers", "Staff", "Parents"].map((tab) => (
                    <button
                        key={tab}
                        className={`pb-1 px-3 text-sm ${activeTab === tab
                            ? "text-green-600 border-b-2 border-green-600"
                            : "text-gray-500"
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full bg-white shadow-sm rounded-md text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-3 py-1 text-left text-gray-600 font-medium">Name</th>
                            <th className="px-3 py-1 text-left text-gray-600 font-medium">ID</th>
                            <th className="px-3 py-1 text-left text-gray-600 font-medium">Class</th>
                            <th className="px-3 py-1 text-left text-gray-600 font-medium">Age</th>
                            <th className="px-3 py-1 text-left text-gray-600 font-medium">Gender</th>
                            <th className="px-3 py-1 text-left text-gray-600 font-medium">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr
                                key={index}
                                className={`hover:bg-gray-100 ${index % 2 === 0 ? "bg-green-50" : "bg-white"
                                    }`}
                            >
                                <td className="px-3 py-1 flex items-center space-x-2">
                                    <img
                                        src={`https://i.pravatar.cc/40?img=${index + 1}`}
                                        alt={item.name}
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <span className="text-gray-700">{item.name}</span>
                                </td>
                                <td className="px-3 py-1 text-gray-700">{item.id}</td>
                                <td className="px-3 py-1 text-gray-700">{item.class}</td>
                                <td className="px-3 py-1 text-gray-700">{item.age}</td>
                                <td className="px-3 py-1 text-gray-700">{item.gender}</td>
                                <td className="px-3 py-1 text-gray-700">{item.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Users;