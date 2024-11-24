import React from "react";

// HeaderRow Component
const HeaderRow = ({ headers }) => (
    <thead className="bg-neutral-light">
        <tr>
            {headers.map((header, index) => (
                <th
                    key={index}
                    className="px-3 py-2 text-left text-neutral-dark font-medium whitespace-nowrap"
                >
                    {header}
                </th>
            ))}
        </tr>
    </thead>
);

// DataRow Component
const DataRow = ({ headers, item, onRowClick }) => (
    <tr
        className="hover:bg-secondary-light even:bg-neutral-light cursor-pointer"
        onClick={() => onRowClick(item)}
    >
        {headers.map((header, colIndex) => {
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
                            <span className="truncate">{item.name}</span>
                        </div>
                    ) : (
                        item[key] || "N/A"
                    )}
                </td>
            );
        })}
    </tr>
);

// UserTable Component
const UserTable = ({ headers, data, loading, onRowClick }) => (
    <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-sm rounded-md text-sm">
            <HeaderRow headers={headers} />
            <tbody>
                {loading ? (
                    <tr>
                        {headers.map((_, colIndex) => (
                            <td
                                key={colIndex}
                                className="px-3 py-2 text-neutral text-center"
                            >
                                Loading...
                            </td>
                        ))}
                    </tr>
                ) : (
                    data.map((item, rowIndex) => (
                        <DataRow
                            key={rowIndex}
                            headers={headers}
                            item={item}
                            onRowClick={onRowClick}
                        />
                    ))
                )}
            </tbody>
        </table>
    </div>
);

export default UserTable;