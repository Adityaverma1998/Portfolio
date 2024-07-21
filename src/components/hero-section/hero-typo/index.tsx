"use client";
import React from "react";
import Typewriter from 'typewriter-effect';
import SocialMedia, {SocialMediaProps} from "@/components/hero-section/social-media";
import NumberTicker from "@/components/magicui/number-ticker";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
export const socialMedia =[
    {
        icon:LinkedInIcon,
        link:'https://www.linkedin.com/in/aditya-kumar-software-developer-engineer/',
        className: 'linkdin',
        color: '#0077B5'
    },{
        icon:GitHubIcon,
        link:'https://github.com/Adityaverma1998',
        className: 'github',
        color: '#181717'
    },
    {
        icon:InstagramIcon,
        link:'https://www.instagram.com/giltch_devs/',
        color:`linear-gradient(
                            45deg,
                        #FCAF45,
                        #F77737,
                        #E1306C,
                        #C13584, 
                        #833AB4, 
                        #405DE6  
                        )`,
        className:'instagram'
    },

    // {
    //     icon:'/images/instagram.png',
    //     link:'https://www.google.com'
    // },
    // {
    //     icon:'/images/instagram.png',
    //     link:'https://www.google.com'
    // },
]
const HeroTypo = () => {
    const { ref: textRef, inView: textInView } = useInView({

        threshold: 0.1, // Adjust as needed
    });

    const { ref: statsRef, inView: statsInView } = useInView({

        threshold: 0.1,
    });

    const textControls = useAnimation();
    const statsControls = useAnimation();

    React.useEffect(() => {
        if (textInView) {
            textControls.start({ y: 0, x: 0, opacity: 1, scale: 1 });
        } else {
            textControls.start({ y: 100, x: 50, opacity: 0, scale: 0 });
        }

        if (statsInView) {
            statsControls.start({ opacity: 1, scale: 1 });
        } else {
            statsControls.start({ opacity: 0, scale: 0.8 });
        }
    }, [textInView, statsInView, textControls, statsControls]);

    return (
        <>
            <motion.div
                className="w-full pt-20"
                initial={{ y: -100, x: -100, opacity: 0, scale: 0 }}
                animate={textControls}
                transition={{ duration: 0.5, type: "tween" }}
                ref={textRef as React.RefObject<HTMLDivElement> }
            >
                <p className={'text-subheading text-xl md:text-2xl font-semibold'}>Hi I am</p>
                <p className={'text-2xl md:text-3xl text-body font-bold pt-2'}>Aditya Verma</p>

                <motion.div
                    className="pt-8"
                    initial={{ y: 100, x: 50, opacity: 0, scale: 0 }}
                    animate={textControls}
                    transition={{ duration: 0.5, type: "tween" }}
                >
                    <h1 className={'text-gradient text-3xl md:text-5xl font-extrabold'}>
                        <Typewriter
                            options={{
                                strings: ['Web Developer', 'App Developer', 'FullStack Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                </motion.div>

                <div className={'py-14 w-[72%] md:w-1/3 flex justify-between'}>
                    {socialMedia?.map((items: SocialMediaProps, index: number) => (
                        <SocialMedia key={index} icon={items.icon} link={items.link}  className={items.className} color={items.color}/>
                    ))}
                </div>

                <div className={'flex gap-7'}>
                    <button className={'bg-button-gradient text-button px-6 py-2 rounded-md'}>
                        Hire me
                    </button>
                    <button
                        className={'border-2 border-[#959595] rounded-md px-6 py-2 text-[#959595] bg-transparent'}>
                        Download Resume
                    </button>
                </div>

                <motion.div
                    className={'py-20'}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={statsControls}
                    transition={{ duration: 0.5, type: "tween" }}
                    ref={statsRef as React.RefObject<HTMLDivElement>}
                >
                    <div className={'w-full md:w-[84%] bg-sub-primary grid grid-cols-3 divide-x py-6 rounded-md'}>
                        <div className={'px-3 md:px-6 py-2'}>
                            <p className={'text-xl md:text-2xl text-accent'}>5+</p>
                            <p className={'text-base md:text-xl text-light'}>Experiences</p>
                        </div>
                        <div className={'px-3 md:px-6 py-2'}>
                            <p className={'text-xl md:text-2xl text-accent'}>20+</p>
                            <p className={'text-base md:text-xl text-light'}>Project done</p>
                        </div>
                        <div className={'px-3 md:px-6 py-2'}>
                            <p className={'text-xl md:text-2xll text-accent'}>
                                <NumberTicker value={80} />
                            </p>
                            <p className={'text-base md:text-xl text-light'}>Happy Clients</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}

export default HeroTypo;
