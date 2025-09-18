import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Layout from "./components/Layout";
import ProjectDetail from "./components/ProjectDetail";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";

function App() {
    return (
        <>
            <Router>
                <AnimatePresence mode="wait">
                    <Routes>
                        <Route path={"/"} element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path={"/about"} element={<About />} />
                            <Route
                                path={"/work"}
                                element={<WorkExperience />}
                            />
                            <Route path={"/projects"} element={<Projects />} />
                            <Route path={"/contact"} element={<Contact />} />
                            <Route
                                path={"/projects/:id"}
                                element={<ProjectDetail />}
                            />
                        </Route>
                    </Routes>
                </AnimatePresence>
            </Router>
        </>
    );
}

export default App;
