import Users from "./Users";

function MainContent() {
    return (
        <div className="flex-grow p-4 overflow-auto">
            <Users />
        </div>
    );
}

export default MainContent;