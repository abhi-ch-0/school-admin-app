import Topbar from "./TopBar";
import Sidebar from "./SideBar";
import Users from "./Users";

function App() {
    return (
        <div className="flex flex-col h-screen">
            {/* Topbar */}
            <Topbar />

            {/* Main Content */}
            <div className="flex flex-grow overflow-hidden">
                {/* Left Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex-grow p-4 overflow-auto">
                    <Users />
                </div>
            </div>
        </div>
    );
}

export default App;