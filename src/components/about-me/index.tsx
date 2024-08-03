"use client"
import DownloadIcon from '@mui/icons-material/Download';
import SkillProgressiveCircle from "@/components/about-me/skill-progessive-circle";
import 'react-circular-progressbar/dist/styles.css';
import SkillInfinitLinearMoving from "@/components/about-me/skill-infinit-linear-moving";
import React from "react";
import {motion} from "framer-motion";
import TextRevealByWord from "@/components/magicui/text-reveal";
import AnimatedText from "@/components/text-animation";
interface SkillProgressive {
    icon: string;
    percentageValue: number;
    skillName: string;
}

const text = `Welcome to my profile! I'm a highly skilled Front-End Developer with a passion for crafting seamless and engaging user experiences. With extensive experience in JavaScript, React.js, Node.js, and Flutter, I specialize in building responsive web and mobile applications that delight users and drive business success.

I thrive on transforming complex design concepts into intuitive, functional, and visually stunning digital interfaces. My expertise in JavaScript and React.js enables me to create dynamic and modular web applications, while my proficiency in Node.js ensures robust and efficient backend solutions. With Flutter, I develop natively compiled mobile apps from a single codebase, delivering consistent and high-quality user experiences across platforms.

Dedicated to continuous learning and innovation, I strive to exceed user expectations and contribute to impactful digital solutions. Thank you for visiting my profile, and I look forward to connecting with you!`;


const AboutMeSection = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume/Aditya_Profile.pdf'; // Path to your PDF file
        link.download = 'aditya_profile.pdf'; // Filename for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>

            <div className={'py-4 md:py-10 '}>
                <div className={'w-full flex flex-col items-center justify-center'}>

                        <AnimatedText text={'About Me'} className={'text-3xl font-semibold text-secondary'} textType={'h2'}/>


                    <AnimatedText text={'Lorem ipsum dolor sit amet\n consectetur. Imperdiet convallis blandit felis ligula aliquam'} className={'text-lg font-normal text-subheading leading-relaxed text-center'} textType={'p'}/>

                </div>
                <div className={'w-full flex flex-col md:flex-row justify-between py-10'}>
                    <div className={'flex items-center justify-center'}>
                        <div
                            className={'h-[300px] md:h-[500px] aspect-square bg-sub-primary rounded-full flex items-center justify-center'}>
                            <h1>hello</h1>
                        </div>
                    </div>
                    <div className={'w-full md:w-2/4'}>

                            <TextRevealByWord text={text}/>




                        <motion.button
                                onClick={handleDownload}
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.9}}
                            transition={{type: "spring", stiffness: 400, damping: 17}}
                            className="bg-button-gradient text-button px-6 py-2 rounded-md flex items-center  my-4 md:my-8"
                        >
                            <DownloadIcon className="mr-2"/>
                            Download Resume
                        </motion.button>


                    </div>
                </div>

                {/*                <div className={'flex flex-wrap gap-16'}>*/}
                {/*                    {*/}
                {/*                        skills?.map((items:SkillProgressive,index: number)=>{*/}
                {/*                           return  <SkillProgressiveCircle key={index} icon={items.icon} percentageValue={items.percentageValue} skillName={items.skillName}/>*/}

                {/*                        })*/}
{/*                    }*/}

{/*x                </div>*/}
                <SkillInfinitLinearMoving/>

            </div>
        </>
    )
}

export default AboutMeSection;