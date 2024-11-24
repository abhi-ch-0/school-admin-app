import Topbar from "./TopBar";
import Sidebar from "./SideBar";

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
                    <h1 className="text-2xl font-bold">Main Content</h1>
                    <p className="text-gray-700">
                        This is the main content area. The sidebar can collapse or expand.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;