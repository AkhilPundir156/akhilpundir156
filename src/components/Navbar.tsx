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
        <div className="bg-primary-bg w-[560px] h-[64px] fixed top-[16px] left-[calc(50%-280px)] p-[16px] py-0 flex justify-between border border-primary-border rounded-[12px] z-[1]">
            <div className="flex items-center gap-[16px] text-tertiary-text">
                <Link to={"/"}>
                    <div
                        className={`cursor-pointer w-[40px] h-[40px] flex items-center justify-center ${
                            navBarIcon == "home"
                                ? "text-main-color font-[600]"
                                : ""
                        } hover:bg-tertiary-border rounded-[50%] transition-all duration-300`}
                        onClick={() => setNavBarIcon("home")}
                    >
                        <HomeIcon
                            strokeSize={navBarIcon == "home" ? "1.8" : "1.5"}
                        />
                    </div>
                </Link>
                <Link to={"/about"}>
                    <div
                        className={`cursor-pointer w-[40px] h-[40px] flex items-center justify-center ${
                            navBarIcon == "user"
                                ? "text-main-color font-[600]"
                                : ""
                        } hover:bg-tertiary-border rounded-[50%]  transition-all duration-300`}
                        onClick={() => setNavBarIcon("user")}
                    >
                        <UserICon
                            strokeSize={navBarIcon == "user" ? "1.8" : "1.5"}
                        />
                    </div>
                </Link>
                <Link to={"/projects"}>
                    <div
                        className={`cursor-pointer w-[40px] h-[40px] flex items-center justify-center ${
                            navBarIcon == "project"
                                ? "text-main-color font-[600]"
                                : ""
                        } hover:bg-tertiary-border rounded-[50%]  transition-all duration-300`}
                        onClick={() => setNavBarIcon("project")}
                    >
                        <ProjectIcon
                            strokeSize={navBarIcon == "project" ? "1.8" : "1.5"}
                        />
                    </div>
                </Link>
                <Link to={"/work"}>
                    <div
                        className={`cursor-pointer w-[40px] h-[40px] flex items-center justify-center ${
                            navBarIcon == "work"
                                ? "text-main-color font-[600]"
                                : ""
                        } hover:bg-tertiary-border rounded-[50%]  transition-all duration-300`}
                        onClick={() => setNavBarIcon("work")}
                    >
                        <WorkEx
                            strokeSize={navBarIcon == "work" ? "1.8" : "1.5"}
                        />
                    </div>
                </Link>
            </div>
            <div className="flex items-center gap-[16px]">
                <div
                    className="cursor-pointer w-[40px] h-[40px] flex items-center text-tertiary-text justify-center hover:bg-tertiary-border rounded-[50%]  transition-all duration-300"
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
