"use client"
import Image from "next/image";
import React from "react";
import {backendImages, frontendImages} from "@/helpers/skill";
// import { Marquee } from "@devnomic/marquee";
// import "@devnomic/marquee/dist/index.css"; //
import Marquee from "react-fast-marquee";

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
            <div className={'w-full  flex flex-col justify-center items-center'}>


                <div className={'py-6 flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full '}>

                    <Marquee fade={true} className=""
                             innerClassName="mx-3" pauseOnHover={true} gradient={true} gradientColor={'rgba(255, 255, 255, 0.04)'} gradientWidth={'200px'}>
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
                <div className={'flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full '}>

                    <Marquee fade={true} className=""
                             i pauseOnHover={true} direction={'right'} gradientColor={'rgba(255, 255, 255, 0.04)'} gradientWidth={'200px'}>
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


            </div>

        </>
    );
}

export default SkillInfinitLinearMoving;




