import { useNavigate } from "react-router-dom";

import projectData from "../data/projectData";
import WorkEx from "../data/workExData";

import { ArrowRight } from "../assets/icons/ArrowRight";
import { CopyIcon } from "../assets/icons/CopyIcon";
import { PlusIcon } from "../assets/icons/PlusIcon";
import { Footer } from "./Footer";
import { Button } from "../ui/ButtonElement";
import { ExperienceCard } from "../ui/ExperienceCard";
import { MotionWrapper } from "../ui/MotionWrapper";
import { ProjectCard } from "../ui/ProjectCard";

const Home = () => {
    const navigation = useNavigate();
    return (
        <MotionWrapper>
            <div className="flex gap-[40px] flex-col">
                <div className="pl-[4px] sm:px-[24px] flex items-center justify-between">
                    <div className="flex items-center gap-[12px] text-[20px] font-[400] tracking-[-0.2px] leading-[120%] text-tertiary-text">
                        <div className="h-[8px] w-[8px] bg-primary-dot rounded-[50%]" />
                        <div>Software Developer</div>
                    </div>
                    <div className="rounded-[63px] text-[12px] bg-green-bg text-green-text font-semibold hidden md:flex lg:flex items-center gap-2 px-3 h-[24px]">
                        <div className="h-[6px] w-[6px] bg-green-text rounded-[50%]" />
                        AVAILABLE FOR WORK
                    </div>
                </div>
                <div className="pl-[4px] sm:px-[24px] flex sm:flex items-center justify-between gap-1 sm:gap-[40px] tracking-[-.2px]">
                    <div className="flex flex-col gap-6 sm:gap-[24]">
                        <div className="flex flex-col gap-[8px] ">
                            <div className="text-[36px] font-[500] text-main-color">
                                I'm Akhil
                            </div>
                            <div className="text-[18px] max-w-[290px] font-[400] text-tertiary-text">
                                Engineer from Delhi, India. Currently
                                Engineering at Odoo In.
                            </div>
                        </div>
                        <div className="flex flex-col w-[140px] sm:flex-row sm:w-auto gap-[12px] items-center justify-start">
                            <Button
                                variant="primary"
                                text="Hire Me"
                                startIcon={<PlusIcon />}
                                size="md"
                                isFull={true}
                                onClickHandler={() => navigation("/contact")}
                            />
                            <Button
                                variant="secondary"
                                text="Copy Email"
                                startIcon={<CopyIcon />}
                                size="md"
                                isFull={true}
                                changeButton={true}
                                changeText="Copied"
                                changeTime={1500}
                                onClickHandler={() =>
                                    window.navigator.clipboard.writeText(
                                        "akhilpundir156@gmail.com"
                                    )
                                }
                            />
                        </div>
                    </div>
                    <div className="w-2/3 sm:w-auto">
                        <div className="rounded-[100%] border-[8px] border-primary-border">
                            <img
                                className="w-[200px] h-[150px] sm:w-[160px] rounded-[100%] sm:h-[160px] object-fit-contain"
                                src="https://framerusercontent.com/modules/dsFG167Mdz7ZAf2BkpME/9o5yQStDVNrWbj8Ymqqa/assets/dDnqkzQfB3pmvEdrFSxAJSkAyyk.png"
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-tertiary-border rounded-[12px] gap-[24px] pb-[24px]">
                    <div className="p-[24px] flex items-center justify-between">
                        <div className="flex items-center gap-[12px] text-[20px] font-[400] tracking-[-0.2px] leading-[120%] text-tertiary-text">
                            <div className="h-[8px] w-[8px] bg-primary-dot rounded-[50%]" />
                            <div>Projects</div>
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
                        {projectData
                            .filter((project) => project.active)
                            .slice(0, 3)
                            .map((item) => (
                                <ProjectCard
                                    headLine={item.name}
                                    description={item.summary}
                                    startIconLink={item.iconLink}
                                    tagLink={`/projects/${item.id}`}
                                />
                            ))}
                    </div>
                </div>
                <div className="bg-tertiary-border rounded-[12px] gap-[24px] pb-[24px]">
                    <div className="p-[24px] flex items-center justify-between">
                        <div className="flex items-center gap-[12px] text-[20px] font-[400] tracking-[-0.2px] leading-[120%] text-tertiary-text">
                            <div className="h-[8px] w-[8px] bg-primary-dot rounded-[50%]" />
                            <div>Work Experience</div>
                        </div>
                    </div>
                    <div className="px-[24px] gap-3 flex flex-col">
                        {WorkEx.map((item) => (
                            <ExperienceCard
                                headLine={item.name}
                                startIconLink={item.iconLink}
                                tagLink={item.link}
                            />
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </MotionWrapper>
    );
};

export default Home;
