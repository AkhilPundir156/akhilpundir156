import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { HomeIcon } from "../assets/icons/HomeIcon";
import { LightIcon } from "../assets/icons/LightIcon";
import { MoonIcon } from "../assets/icons/MoonIcon";
import { PlusIcon } from "../assets/icons/PlusIcon";
import { ProjectIcon } from "../assets/icons/ProjectIcon";
import { UserICon } from "../assets/icons/UserIcon";
import { WorkEx } from "../assets/icons/WorkEx";
import { Button } from "../ui/ButtonElement";

const Navbar = ({
    navBarIcon,
    setNavBarIcon,
}: {
    navBarIcon: string;
    setNavBarIcon: (argument: string) => void;
}) => {
    const [theme, setTheme] = useState("dark");
    const navigation = useNavigate();

    useEffect(() => {
        if (theme === "dark") {
            document.getElementById("root")?.classList.add("light");
        } else {
            document.getElementById("root")?.classList.remove("light");
        }
    }, [theme]);

    return (
        <div
            className="bg-primary-bg fixed top-4 left-1/2 -translate-x-1/2 
                        w-[95%] max-w-[560px] h-[64px] 
                        px-4 flex justify-between items-center
                        border border-primary-border rounded-[12px] z-[1]"
        >
            {/* Left icons */}
            <div className="flex items-center gap-4 text-tertiary-text">
                <Link to={"/"}>
                    <div
                        className={`cursor-pointer w-10 h-10 flex items-center justify-center ${
                            navBarIcon == "home"
                                ? "text-main-color font-[600]"
                                : ""
                        } hover:bg-tertiary-border rounded-full transition-all duration-300`}
                        onClick={() => setNavBarIcon("home")}
                    >
                        <HomeIcon
                            strokeSize={navBarIcon == "home" ? "1.8" : "1.5"}
                        />
                    </div>
                </Link>
                <Link to={"/about"}>
                    <div
                        className={`cursor-pointer w-10 h-10 flex items-center justify-center ${
                            navBarIcon == "user"
                                ? "text-main-color font-[600]"
                                : ""
                        } hover:bg-tertiary-border rounded-full transition-all duration-300`}
                        onClick={() => setNavBarIcon("user")}
                    >
                        <UserICon
                            strokeSize={navBarIcon == "user" ? "1.8" : "1.5"}
                        />
                    </div>
                </Link>
                <Link to={"/projects"}>
                    <div
                        className={`cursor-pointer w-10 h-10 flex items-center justify-center ${
                            navBarIcon == "project"
                                ? "text-main-color font-[600]"
                                : ""
                        } hover:bg-tertiary-border rounded-full transition-all duration-300`}
                        onClick={() => setNavBarIcon("project")}
                    >
                        <ProjectIcon
                            strokeSize={navBarIcon == "project" ? "1.8" : "1.5"}
                        />
                    </div>
                </Link>
                <Link to={"/work"}>
                    <div
                        className={`cursor-pointer w-10 h-10 flex items-center justify-center ${
                            navBarIcon == "work"
                                ? "text-main-color font-[600]"
                                : ""
                        } hover:bg-tertiary-border rounded-full transition-all duration-300`}
                        onClick={() => setNavBarIcon("work")}
                    >
                        <WorkEx
                            strokeSize={navBarIcon == "work" ? "1.8" : "1.5"}
                        />
                    </div>
                </Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
                <div
                    className="cursor-pointer w-10 h-10 flex items-center text-tertiary-text justify-center hover:bg-tertiary-border rounded-full transition-all duration-300"
                    onClick={() => {
                        setTheme((theme) =>
                            theme === "light" ? "dark" : "light"
                        );
                    }}
                >
                    {theme === "dark" ? <MoonIcon /> : <LightIcon />}
                </div>
                <Button
                    variant="primary"
                    size="md"
                    text={"Hire Me"}
                    isFull={false}
                    startIcon={<PlusIcon />}
                    onClickHandler={() => navigation("/contact")}
                />
            </div>
        </div>
    );
};

export default Navbar;
