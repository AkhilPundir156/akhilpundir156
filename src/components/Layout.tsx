import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

const Layout = () => {
    const [navBarIcon, setNavBarIcon] = useState("home");

    return (
        <div className="bg-first-bg selection:bg-primary-dot text-secondary-text h-[100vh] w-[100vw] overflow-y-scroll pb-[24px]">
            <Navbar navBarIcon={navBarIcon} setNavBarIcon={setNavBarIcon} />
            <div className="ml-[calc(50%-272px)] mt-[100px] w-[560px]">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
