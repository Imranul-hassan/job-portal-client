import { Outlet } from "react-router-dom";
import Navbar from "../pages/share/Navbar";

const MainLayout = () => {
    return (
        <div className="w-10/12 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;