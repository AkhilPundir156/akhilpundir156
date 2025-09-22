import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

const Layout = () => {
    const [navBarIcon, setNavBarIcon] = useState("home");

    return (
        <div className="bg-first-bg selection:bg-primary-dot text-secondary-text h-[100vh] w-[100vw] overflow-y-scroll pb-[24px]" style={{"scrollbarWidth": "none"}}>
            <Navbar navBarIcon={navBarIcon} setNavBarIcon={setNavBarIcon} />
            <div className="mx-auto mt-[100px] max-w-[560px] w-[95%]">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
