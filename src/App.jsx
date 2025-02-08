import TopBar from "./TopBar";
import Sidebar from "./SideBar";
import MainContent from "./MainContent";

function App() {
    return (
        <>
            <TopBar schoolName="School" />

            <div className="flex">
                <Sidebar />

                <MainContent />
            </div>
        </>
    );
}

export default App;