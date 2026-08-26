import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
//import Sidebar from "../components/Sidebar";

function DashboardLayout() {
    return (
        <div>

            <Navbar />

            <div className="flex">


                <main className="flex-1 p-4 bg-gray-400 w-full h-screen overflow-y-auto">
                    <Outlet />
                </main>

            </div>

        </div>
    );
}

export default DashboardLayout;