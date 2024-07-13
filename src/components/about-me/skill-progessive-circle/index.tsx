"use client";
import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import Image from "next/image";

 interface SkillProgressiveCircleProps{
    icon:string;
    percentageValue:number;
    skillName:string
}

const SkillProgressiveCircle = (props:SkillProgressiveCircleProps) => {

    const {icon,percentageValue,skillName} = props;
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY; // Current scroll position
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
        const progress = Math.min((scrollTop / windowHeight) * 100, percentageValue); // Calculate progress percentage
        setScrollProgress(progress);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); // Listen for scroll events

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup event listener
        };
    }, []);

    return (
        <>
            <div className={'flex flex-col justify-center items-center gap-4'}>
                <div style={{position: "relative", width: "160px", height: "160px", margin: 'auto'}}>
                    <svg width="0" height="0">
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{stopColor: "#984300", stopOpacity: 1}}/>
                                <stop offset="46%" style={{stopColor: "#FD6F00", stopOpacity: 1}}/>
                                <stop offset="100%" style={{stopColor: "#CA5900", stopOpacity: 1}}/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <CircularProgressbar
                        value={scrollProgress}
                        styles={buildStyles({
                            pathColor: "url(#gradient)", // Use the gradient as path color
                            trailColor: "#d6d6d6",
                        })}
                    />
                    <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                        <div className={'relative h-[80px] w-[80px]'}>
                            <Image
                                layout={'fill'}
                                src={icon}
                                alt="Center Icon"
                                className={'absolute'}
                                // Adjust size as needed
                            />
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col justify-center items-center '}>
                    <p className={'text-xl text-primary'}> {percentageValue}%</p>
                    <p className={'text-lg text-body'}> {skillName}</p>
                </div>
            </div>
        </>
    );
};

export default SkillProgressiveCircle;
