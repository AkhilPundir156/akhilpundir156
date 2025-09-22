import { useEffect } from "react";

import projectData from "../data/projectData";

import { Footer } from "./Footer";
import { MotionWrapper } from "../ui/MotionWrapper";
import { ProjectCard } from "../ui/ProjectCard";

const Projects = () => {

    useEffect(() => {
        const container = document.getElementById("scroll-container");
        container?.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <MotionWrapper>
            <div className="flex gap-[40px] flex-col">
                <div className="px-[24px] flex items-center justify-between">
                    <div className="flex items-center gap-[12px] text-[20px] font-[400] tracking-[-0.2px] leading-[120%] text-tertiary-text">
                        <div className="h-[8px] w-[8px] bg-primary-dot rounded-[50%]" />
                        <div>Projects</div>
                    </div>
                </div>
                <div className="px-[24px] flex  flex-col items-center justify-between gap-[32px] tracking-[-.2px]">
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col gap-[8px] ">
                            <div className="text-[36px] font-[500] text-main-color">
                                My Work
                            </div>
                            <div className="text-[18px] w-auto font-[400] text-tertiary-text leading-[170%]">
                                I’m a passionate developer with a strong focus
                                on building clean, user-friendly, and scalable
                                applications. My work spans from crafting
                                intuitive front-end interfaces with modern
                                frameworks to developing efficient back-end
                                systems and APIs. I enjoy solving real-world
                                problems with code, experimenting with new
                                technologies, and continuously improving my
                                craft.
                                <br />
                                <br />
                                In every project, I prioritize code quality,
                                maintainability, and thoughtful user experience.
                                Collaboration, creativity, and adaptability are
                                my biggest strengths—I thrive in team
                                environments and love turning ideas into
                                products that people actually enjoy using.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-tertiary-border rounded-[12px] gap-[24px] py-[24px]">
                    <div className="px-[24px] gap-3 flex flex-col">
                        {projectData.map(
                            (item) =>
                                item.active && (
                                    <ProjectCard
                                        headLine={item.name}
                                        description={item.summary}
                                        startIconLink={item.iconLink}
                                        tagLink={`/projects/${item.id}`}
                                    />
                                )
                        )}
                    </div>
                </div>

                <Footer />
            </div>
        </MotionWrapper>
    );
};

export default Projects;
