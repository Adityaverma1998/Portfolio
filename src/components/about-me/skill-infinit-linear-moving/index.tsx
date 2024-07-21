"use client"
import Image from "next/image";
import React from "react";
import {backendImages, frontendImages} from "@/helpers/skill";
// import { Marquee } from "@devnomic/marquee";
// import "@devnomic/marquee/dist/index.css"; //
// import Marq// import Marquee from "react-fast-marquee";uee from "react-fast-marquee";
import Marquee from "@/components/magicui/marquee";

interface IImages{
    image:string,
    alt:string;
}

const images :IImages[] =[
    {
       image:'/images/techs/html',
       alt:'html'
    },
]

function SkillInfinitLinearMoving() {


    return (
        <>
            <div className={'w-full relative  flex flex-col justify-center items-center'}>


                <div
                    className={'py-6 flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full  '}>

                    <Marquee fade={true} className=""
                             pauseOnHover={true} gradient={true} gradientColor={'rgba(248, 251, 253)'}
                             gradientWidth={'20px'} reverse={true}>
                        {
                            frontendImages.map((item: IImages, index: number) => {
                                return (
                                    <div key={index} className={'flex justify-center align-middle items-center mx-2'}>
                                        <Image src={item.image} className={'h-4 lg:h-6 mr-2'}
                                               alt={item.alt}
                                               height={24} width={24}/>
                                        <p className={'font-inter font-thin text-gray-400 min-w-max'}>{item.alt?.toUpperCase()}</p>
                                    </div>
                                )
                            })
                        }
                    </Marquee>

                </div>
                <div
                    className={' flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full  '}>

                    <Marquee fade={true} className=""
                             pauseOnHover={true} gradient={true} gradientColor={'rgba(248, 251, 253)'}
                             gradientWidth={'20px'}>
                        {
                            frontendImages.map((item: IImages, index: number) => {
                                return (
                                    <div key={index} className={'flex justify-center align-middle items-center mx-2'}>
                                        <Image src={item.image} className={'h-4 lg:h-6 mr-2'}
                                               alt={item.alt}
                                               height={24} width={24}/>
                                        <p className={'font-inter font-thin text-gray-400 min-w-max'}>{item.alt?.toUpperCase()}</p>
                                    </div>
                                )
                            })
                        }
                    </Marquee>

                </div>
                {/*<div*/}
                {/*    className="pointer-events-none absolute inset-y-0 left-0 w-[4%] bg-gradient-to-r from-[#575757] dark:from-background"></div>*/}
                {/*<div*/}
                {/*    className="pointer-events-none absolute inset-y-0 right-0 w-[4%] bg-gradient-to-l from-[#575757] dark:from-background"></div>*/}


            </div>

        </>
    );
}

export default SkillInfinitLinearMoving;




