import { useEffect } from "react";

import WorkEx from "../data/workExData";

import { Footer } from "./Footer";
import { ExperienceCard } from "../ui/ExperienceCard";
import { MotionWrapper } from "../ui/MotionWrapper";

const WorkExperience = () => {
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
                        <div>Experience</div>
                    </div>
                </div>
                <div className="px-[24px] flex  flex-col items-center justify-between gap-[32px] tracking-[-.2px]">
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col gap-[8px] ">
                            <div className="text-[36px] font-[500] text-main-color">
                                My Expereience
                            </div>
                            <div className="text-[18px] w-auto font-[400] text-tertiary-text leading-[170%]">
                                <ul>
                                    <li>
                                        <strong>Odoo</strong> – Engineered{" "}
                                        <span className="font-bold text-green-text">
                                            VoIP services
                                        </span>
                                        , working hand-in-hand with{" "}
                                        <span className="font-bold text-green-text">
                                            R&D
                                        </span>{" "}
                                        and{" "}
                                        <span className="font-bold text-green-text">
                                            Development Services
                                        </span>{" "}
                                        teams. Successfully enhanced and
                                        optimized{" "}
                                        <span className="font-bold text-green-text">
                                            MRP/MPS reporting
                                        </span>{" "}
                                        by up to{" "}
                                        <span className="font-bold text-green-text">
                                            70%
                                        </span>
                                        , significantly improving efficiency,
                                        scalability, and supply chain
                                        decision-making.
                                    </li>

                                    <br />
                                    <li>
                                        <strong>Scale AI</strong> – Played a key
                                        role in{" "}
                                        <span className="font-bold text-green-text">
                                            LLM training pipelines
                                        </span>{" "}
                                        by curating, refining, and validating
                                        large-scale datasets. Focused on{" "}
                                        <span className="font-bold text-green-text">
                                            data quality
                                        </span>{" "}
                                        and{" "}
                                        <span className="font-bold text-green-text">
                                            model accuracy
                                        </span>
                                        , contributing to the fine-tuning of
                                        cutting-edge AI systems.
                                    </li>
                                    <br />
                                    <li>
                                        <strong>Manal Softech</strong> –
                                        Developed{" "}
                                        <span className="font-bold text-green-text">
                                            scalable web applications{" "}
                                        </span>
                                        as an SDE Intern, leveraging{" "}
                                        <span className="font-bold text-green-text">
                                            React.js
                                        </span>{" "}
                                        and{" "}
                                        <span className="font-bold text-green-text">
                                            modern JavaScript
                                        </span>{" "}
                                        to deliver sleek, performant, and
                                        user-friendly solutions.
                                    </li>
                                </ul>
                            </div>
                        </div>
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

export default WorkExperience;
