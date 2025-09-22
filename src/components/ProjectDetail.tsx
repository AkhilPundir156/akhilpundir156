import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import projectData from "../data/projectData";

import { Footer } from "./Footer";
import { ArrowRight } from "../assets/icons/ArrowRight";
import { Button } from "../ui/ButtonElement";
import { MotionWrapper } from "../ui/MotionWrapper";
import { ProjectCard } from "../ui/ProjectCard";

const ProjectDetail = () => {
    const params = useParams();
    const projectId = params.id as string;
    

    const acitveProject = projectData.filter(
        (x) => x.id === parseInt(projectId)
    )[0];

    useEffect(()=>{
        const container = document.getElementById("scroll-container");
        container?.scrollTo({ top: 0, behavior: "smooth" });
    },[projectId]);

    const navigation = useNavigate();
    return (
        <MotionWrapper>
            <div className="flex gap-[40px] flex-col -mt-[24px]">
                <div className="bg-primary-border rounded-[12px] gap-[24px] flex-col text-[14px] leading-[190%] tracking-[.18px]">
                    <div className="flex">
                        <div className="px-[24px] py-[12px] flex items-center justify-between text-tertiary-text">
                            Name
                            <br />
                            Description <br />
                            Project Type
                            <br />
                            year
                        </div>
                        <div className="p-[24px] flex items-center justify-between text-secondary-text">
                            {acitveProject.name} <br />
                            {acitveProject.summary} <br />
                            {acitveProject.type} <br />
                            {acitveProject.year} <br />
                        </div>
                    </div>
                    <div className="flex gap-4 w-full content-end justify-end p-1 px-4">
                        <a
                            className="leading-[190%] tracking-[.18px] text-[1rem]"
                            href={acitveProject.link}
                        >
                            Live
                        </a>
                        <a
                            className="leading-[190%] tracking-[.18px] text-[1rem]"
                            href={acitveProject.githubLink}
                        >
                            {" "}
                            GitHub{" "}
                        </a>
                    </div>
                </div>
                <div className="bg-primary-border rounded-[12px] gap-[24px] flex text-[16px] leading-[190%] tracking-[.18px]">
                    <div className="px-[24px] py-[12px]  items-center text-tertiary-text">
                        <div className="text-xl leading-[190%] tracking-[.18px] font-bold">
                            {" "}
                            About Project
                        </div>
                        {acitveProject.description}
                    </div>
                </div>

                <div className="bg-tertiary-border rounded-[12px] gap-[24px] pb-[24px]">
                    <div className="p-[24px] flex items-center justify-between">
                        <div className="flex items-center gap-[12px] text-[20px] font-[400] tracking-[-0.2px] leading-[120%] text-tertiary-text">
                            <div className="h-[8px] w-[8px] bg-primary-dot rounded-[50%]" />
                            <div>Other Projects</div>
                        </div>
                        <div className="text-[12px] text-green-text font-semibold flex items-center">
                            <Button
                                variant="tertiary"
                                text="View All"
                                endIcon={<ArrowRight />}
                                size="md"
                                isFull={false}
                                onClickHandler={() => navigation("/projects")}
                            />
                        </div>
                    </div>
                    <div className="px-[24px] gap-3 flex flex-col">
                        {projectData.map(
                            (item) =>
                                item.active &&
                                item != acitveProject &&
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

export default ProjectDetail;
