import { useNavigate } from "react-router-dom";

import { Button } from "../ui/ButtonElement";
import { SocialMediaIcon } from "../ui/SocialMediaIcon";

import { PlusIcon } from "../assets/icons/PlusIcon";
import { CopyIcon } from "../assets/icons/CopyIcon";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { LinkedInIcon } from "../assets/icons/LinkedInIcon";

export const Footer = ({ isContactPage }: { isContactPage?: boolean }) => {
    const navigation = useNavigate();
    return (
        <>
            {!isContactPage && (
                <div className="px-[24px]  tracking-[-.2px]">
                    <div className="text-center">
                        <div className="flex flex-col gap-[24px] leading-[120%]">
                            <div className=" text-[30px] sm:text-[36px] font-[500] text-main-color">
                                Let’s work together.
                            </div>
                            <div className="text-[18px] w-auto font-[400] text-tertiary-text">
                                Creating user experience and visual appealing
                                design
                            </div>
                            <div className="flex gap-[12px] items-center justify-center">
                                <Button
                                    variant="primary"
                                    text="Hire Me"
                                    startIcon={<PlusIcon />}
                                    size="md"
                                    isFull={false}
                                    onClickHandler={() =>
                                        navigation("/contact")
                                    }
                                />
                                <Button
                                    variant="secondary"
                                    text="Copy Email"
                                    startIcon={<CopyIcon />}
                                    size="md"
                                    isFull={false}
                                    onClickHandler={() =>
                                        window.navigator.clipboard.writeText(
                                            "akhilpundir156@gmail.com"
                                        )
                                    }
                                    changeButton={true}
                                    changeText="Copied!"
                                    changeTime={1500}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex flex-col gap-[12px]">
                <div className="bg-tertiary-border rounded-[12px] p-[24px]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-[12px] text-[20px] font-[400] tracking-[-0.2px] leading-[120%] text-tertiary-text">
                            <div className="h-[8px] w-[8px] bg-primary-dot rounded-[50%]" />
                            <div>Follow Me</div>
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <SocialMediaIcon
                                MediaIcon={<InstagramIcon />}
                                link="https://www.instagram.com/i_m.akhil_/"
                            />
                            <SocialMediaIcon
                                MediaIcon={<LinkedInIcon />}
                                link="https://www.linkedin.com/in/akhil-pundir/"
                            />
                            <SocialMediaIcon
                                MediaIcon={<GithubIcon />}
                                link="https://github.com/AkhilPundir156"
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-tertiary-border rounded-[12px] p-[24px] py-[40px]">
                    <div className="flex flex-col gap-[4px] text-[14px] leading-[160%] tracking-[.14px] text-center">
                        <div>© 2025 Akhil's Portfolio – No Copyrights</div>
                        <div>By - Akhil Pundir</div>
                    </div>
                </div>
            </div>
        </>
    );
};
