"use client"
import {socialMedia} from "@/helpers/social-media-array";
import SocialMedia from "@/components/hero-section/social-media";
import {makeStyles} from "@mui/material";
import {Email, Phone} from "@mui/icons-material";
import {styled} from "@mui/system";
import {scroller} from "react-scroll";
import {useState} from "react";

// Styling using styled function
const IconWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
});

const Icon = styled('div')({
    cursor: 'pointer',
    margin: '0 8px',
    fontSize: '32px', // Adjust icon size as needed
    color: '#959595',    // Adjust icon color as needed
});

const ContactInfo = styled('span')({
    marginLeft: '2px',
    fontSize: '16px', // Adjust text size as needed
    color: '#959595',    // Adjust text color as needed
});

const FooterSection = ()=>{
    const [activeLink, setActiveLink] = useState('contact');

    const scrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };
    const handleEmailClick = () => {
        window.location.href = `mailto:${process.env.Next_PUBLIC_EMAIL_ID}`;
    };

    const handlePhoneClick = () => {
        window.location.href = `tel:+91${process.env.NEXT_PUBLIC_PHONE_NUMBER}`;
    };

    return(
        <>
            <footer className={'mt-10 bg-sub-primary flex flex-col items-center justify-center'  }>
                <div className={''}>
                    <p className={'text-2xl text-primary'}>Logo</p>
                </div>
                <div className={''}>
                    <ul className="flex gap-10">
                        <li
                            className={`text-xl ${
                                activeLink === 'home' ? 'text-accent font-bold' : 'text-link'
                            } transition-text duration-250 hover:text-accent cursor-pointer`}
                            onClick={() => {
                                scrollToSection('home');
                                setActiveLink('home')
                            }}
                        >
                            Home
                        </li>
                        <li
                            className={`text-xl ${
                                activeLink === 'services' ? 'text-accent font-bold' : 'text-link'
                            } transition-text duration-250 hover:text-accent cursor-pointer`}
                            onClick={() => {
                                scrollToSection('services');
                                setActiveLink('services')
                            }}
                        >
                            Services
                        </li>
                        <li
                            className={`text-xl ${
                                activeLink === 'about' ? 'text-accent font-bold' : 'text-link'
                            } transition-text duration-250 hover:text-accent cursor-pointer`}
                            onClick={() => {
                                scrollToSection('about');
                                setActiveLink('about');

                            }}
                        >
                            About me
                        </li>
                        <li
                            className={`text-xl ${
                                activeLink === 'portfolio' ? 'text-accent font-bold' : 'text-link'
                            } transition-text duration-250 hover:text-accent cursor-pointer`}
                            onClick={() => {
                                scrollToSection('portfolio');
                                setActiveLink('portfolio');
                            }

                            }
                        >
                            Portfolio
                        </li>
                        <li
                            className={`text-xl ${
                                activeLink === 'contact' ? 'text-accent font-bold' : 'text-link'
                            } transition-text duration-250 hover:text-accent cursor-pointer`}
                            onClick={() => {
                                scrollToSection('contact');
                                setActiveLink('contact');

                            }}
                        >
                            Contact me
                        </li>
                    </ul>
                </div>
                <div className={''}>
                    <div className={' py-14  w-[72%] md:w-1/3 flex justify-between'}>
                        {
                            socialMedia?.map((items: any, index: number) => {
                                return <SocialMedia key={index} icon={items?.icon} link={items?.link}/>

                            })
                        }
                    </div>
                </div>
                <div className={' flex justify-center items-center gap-4'}>
                    <IconWrapper>
                        <Icon onClick={handleEmailClick}>
                            <Email/>
                        </Icon>
                        <ContactInfo>{process.env.NEXT_PUBLIC_EMAIL_ID}</ContactInfo>
                        <Icon onClick={handlePhoneClick}>
                            <Phone/>
                        </Icon>
                        <ContactInfo>{process.env.NEXT_PUBLIC_PHONE_NUMBER}</ContactInfo>
                    </IconWrapper>
                </div>
                <p className={'text-base text-subheading text-center py-10 '}>Designed by @Aditya Frontend Developer</p>


            </footer>
        </>
    )
}

export default FooterSection;