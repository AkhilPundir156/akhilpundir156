import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { HomeIcon } from "../assets/icons/HomeIcon";
import { LightIcon } from "../assets/icons/LightIcon";
import { MoonIcon } from "../assets/icons/MoonIcon";
import { PlusIcon } from "../assets/icons/PlusIcon";
import { ProjectIcon } from "../assets/icons/ProjectIcon";
import { UserICon } from "../assets/icons/UserIcon";
import { WorkEx } from "../assets/icons/WorkEx";
import { Button } from "../ui/ButtonElement";

const MenuIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
    </svg>
);

const CloseIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
);

const Navbar = ({
    navBarIcon,
    setNavBarIcon,
}: {
    navBarIcon: string;
    setNavBarIcon: (argument: string) => void;
}) => {
    const [theme, setTheme] = useState("dark");
    const [menuOpen, setMenuOpen] = useState(false);
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
                        border border-primary-border rounded-[12px] z-[50]"
        >
            {/* Left icons */}
            <div className="flex items-center gap-4 text-tertiary-text">
                {/* Desktop nav icons */}
                <div className="hidden sm:flex items-center gap-4">
                    <Link to={"/"} onClick={() => setNavBarIcon("home")}>
                        <div
                            className={`cursor-pointer w-10 h-10 flex items-center justify-center ${
                                navBarIcon == "home"
                                    ? "text-main-color font-[600]"
                                    : ""
                            } hover:bg-tertiary-border rounded-full transition-all duration-300`}
                        >
                            <HomeIcon
                                strokeSize={
                                    navBarIcon == "home" ? "1.8" : "1.5"
                                }
                            />
                        </div>
                    </Link>
                    <Link to={"/about"} onClick={() => setNavBarIcon("user")}>
                        <div
                            className={`cursor-pointer w-10 h-10 flex items-center justify-center ${
                                navBarIcon == "user"
                                    ? "text-main-color font-[600]"
                                    : ""
                            } hover:bg-tertiary-border rounded-full transition-all duration-300`}
                        >
                            <UserICon
                                strokeSize={
                                    navBarIcon == "user" ? "1.8" : "1.5"
                                }
                            />
                        </div>
                    </Link>
                    <Link
                        to={"/projects"}
                        onClick={() => setNavBarIcon("project")}
                    >
                        <div
                            className={`cursor-pointer w-10 h-10 flex items-center justify-center ${
                                navBarIcon == "project"
                                    ? "text-main-color font-[600]"
                                    : ""
                            } hover:bg-tertiary-border rounded-full transition-all duration-300`}
                        >
                            <ProjectIcon
                                strokeSize={
                                    navBarIcon == "project" ? "1.8" : "1.5"
                                }
                            />
                        </div>
                    </Link>
                    <Link to={"/work"} onClick={() => setNavBarIcon("work")}>
                        <div
                            className={`cursor-pointer w-10 h-10 flex items-center justify-center ${
                                navBarIcon == "work"
                                    ? "text-main-color font-[600]"
                                    : ""
                            } hover:bg-tertiary-border rounded-full transition-all duration-300`}
                        >
                            <WorkEx
                                strokeSize={
                                    navBarIcon == "work" ? "1.8" : "1.5"
                                }
                            />
                        </div>
                    </Link>
                </div>

                {/* Mobile menu icon */}
                <div
                    className="sm:hidden cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <CloseIcon /> : <MenuIcon />}
                </div>
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

            {/* Mobile dropdown with animation */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-[72px] left-0 w-fit bg-primary-bg border border-primary-border rounded-md p-4 sm:hidden flex flex-col gap-3 shadow-lg"
                    >
                        <Link
                            to={"/"}
                            onClick={() => {
                                setNavBarIcon("home");
                                setMenuOpen(false);
                            }}
                            className={`flex items-center gap-2 cursor-pointer hover:text-main-color transition-all ${
                                navBarIcon === "home"
                                    ? "text-main-color font-semibold"
                                    : ""
                            }`}
                        >
                            <HomeIcon strokeSize="1.5" /> Home
                        </Link>

                        <Link
                            to={"/about"}
                            onClick={() => {
                                setNavBarIcon("user");
                                setMenuOpen(false);
                            }}
                            className={`flex items-center gap-2 cursor-pointer hover:text-main-color transition-all ${
                                navBarIcon === "user"
                                    ? "text-main-color font-semibold"
                                    : ""
                            }`}
                        >
                            <UserICon strokeSize="1.5" /> About
                        </Link>

                        <Link
                            to={"/projects"}
                            onClick={() => {
                                setNavBarIcon("project");
                                setMenuOpen(false);
                            }}
                            className={`flex items-center gap-2 cursor-pointer hover:text-main-color transition-all ${
                                navBarIcon === "project"
                                    ? "text-main-color font-semibold"
                                    : ""
                            }`}
                        >
                            <ProjectIcon strokeSize="1.5" /> Projects
                        </Link>

                        <Link
                            to={"/work"}
                            onClick={() => {
                                setNavBarIcon("work");
                                setMenuOpen(false);
                            }}
                            className={`flex items-center gap-2 cursor-pointer hover:text-main-color transition-all ${
                                navBarIcon === "work"
                                    ? "text-main-color font-semibold"
                                    : ""
                            }`}
                        >
                            <WorkEx strokeSize="1.5" /> Work
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
