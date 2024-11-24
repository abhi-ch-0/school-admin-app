import React from "react";
import StudentDetailPanel from "./StudentDetailPanel";
import TeacherDetailPanel from "./TeacherDetailPanel";
import StaffDetailPanel from "./StaffDetailPanel";
import ParentDetailPanel from "./ParentDetailPanel";

const UserDetailPanel = ({ activeTab, user, onClose }) => {
    if (!user) return null;

    switch (activeTab) {
        case "Students":
            return <StudentDetailPanel user={user} onClose={onClose} />;
        case "Teachers":
            return <TeacherDetailPanel user={user} onClose={onClose} />;
        case "Staff":
            return <StaffDetailPanel user={user} onClose={onClose} />;
        case "Parents":
            return <ParentDetailPanel user={user} onClose={onClose} />;
        default:
            return null;
    }
};

export default UserDetailPanel;