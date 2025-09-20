import { Footer } from "./Footer";
import projectData from "../data/projectData";
import { MotionWrapper } from "../ui/MotionWrapper";
import { ProjectCard } from "../ui/ProjectCard";

const About = () => {
    return (
        <MotionWrapper>
            <div className="flex gap-[40px] flex-col">
                <div className="px-[24px] flex items-center justify-between">
                    <div className="flex items-center gap-[12px] text-[20px] font-[400] tracking-[-0.2px] leading-[120%] text-tertiary-text">
                        <div className="h-[8px] w-[8px] bg-primary-dot rounded-[50%]" />
                        <div>About</div>
                    </div>
                </div>
                <div className="px-[24px] flex  flex-col items-center justify-between gap-[32px] tracking-[-.2px]">
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col gap-[8px] ">
                            <div className="text-[36px] font-[500] text-main-color">
                                It's me Akhil Pundir
                            </div>
                            <div className="text-[18px] w-auto font-[400] text-tertiary-text leading-[170%]">
                                Hi, I’m{" "}
                                <span className="font-bold text-green-text">
                                    Akhil Pundir
                                </span>{" "}
                                from{" "}
                                <span className="font-bold text-green-text">
                                    Delhi, India
                                </span>
                                . I’m a passionate{" "}
                                <span className="font-bold text-green-text">
                                    Software Engineer
                                </span>{" "}
                                who loves building scalable web applications and
                                solving real-world problems with technology. My
                                journey in tech has been fueled by curiosity and
                                a drive to create impactful solutions that make
                                a difference.
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-[490px] sm:h-[490px] bg-tertiary-border rounded-[12px] border border-primary-dot p-[16px]">
                        <div className="rounded-[12px]">
                            <img
                                className="rounded-[12px]"
                                src={
                                    "https://res.cloudinary.com/dye1lhutq/image/upload/v1758195314/akki_final_m9x4l3.jpg"
                                }
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col gap-[8px] ">
                            <div className="text-[36px] font-[500] text-main-color">
                                More About Me
                            </div>
                            <div className="text-[18px] w-auto font-[400] text-tertiary-text leading-[170%]">
                                I’m a passionate{" "}
                                <span className="font-bold text-green-text">
                                    Software Engineer
                                </span>{" "}
                                with hands-on experience in{" "}
                                <span className="font-bold text-green-text">
                                    React.js
                                </span>
                                ,{" "}
                                <span className="font-bold text-green-text">
                                    Next.js
                                </span>
                                ,{" "}
                                <span className="font-bold text-green-text">
                                    JavaScript
                                </span>
                                ,{" "}
                                <span className="font-bold text-green-text">
                                    Python
                                </span>
                                , and{" "}
                                <span className="font-bold text-green-text">
                                    SQL
                                </span>
                                , along with scalable system design. Having
                                worked with{" "}
                                <span className="font-bold text-green-text">
                                    Odoo
                                </span>{" "}
                                (including{" "}
                                <span className="font-bold text-green-text">
                                    OWL framework
                                </span>
                                ),{" "}
                                <span className="font-bold text-green-text">
                                    Scale AI
                                </span>
                                , and{" "}
                                <span className="font-bold text-green-text">
                                    Manal Softech
                                </span>
                                , I specialize in building performant web
                                applications, optimizing reporting pipelines,
                                and contributing to{" "}
                                <span className="font-bold text-green-text">
                                    LLM training datasets
                                </span>
                                . I enjoy solving complex problems, working with{" "}
                                <span className="font-bold text-green-text">
                                    R&D teams
                                </span>
                                , and delivering impactful solutions that{" "}
                                <span className="font-bold text-green-text">
                                    scale
                                </span>
                                .
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-[24px] ">
                    <div className="flex flex-col gap-[8px] ">
                        <div className="text-[36px] font-[500] text-main-color">
                            My side Projects
                        </div>
                        <div className="text-[18px] w-auto font-[400] text-tertiary-text leading-[170%]">
                            Beyond internships and Full time Employement, I’ve
                            built{" "}
                            <span className="font-bold text-green-text">
                                personal projects{" "}
                            </span>
                            ranging from{" "}
                            <span className="font-bold text-green-text">
                                AI-powered tools{" "}
                            </span>
                            to{" "}
                            <span className="font-bold text-green-text">
                                interactive web apps
                            </span>
                            . These projects reflect my curiosity for
                            experimenting with{" "}
                            <span className="font-bold text-green-text">
                                modern tech stacks
                            </span>
                            , sharpening problem-solving skills, and pushing
                            ideas from concept to production. Each project is a
                            step towards creating solutions that are both{" "}
                            <span className="font-bold text-green-text">
                                innovative
                            </span>{" "}
                            and{" "}
                            <span className="font-bold text-green-text">
                                user-friendly
                            </span>
                            .
                        </div>
                    </div>
                </div>
                <div className="bg-tertiary-border rounded-[12px] py-[24px] ">
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

export default About;
