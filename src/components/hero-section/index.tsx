"use client"
import HeroTypo from "@/components/hero-section/hero-typo";
import Image from "next/image";

const HeroSection = ()=>{
    return(
        <>
            <div className={'flex  md:flex-row flex-col items-center  '}>
                <div className={'w-full lg:w-1/2'}>
                    <HeroTypo/>

                </div>
                <div className={'w-full lg:w-1/2 flex justify-center items-center'}>
                    <div
                        className={'h-[200px] md:h-[400px] aspect-square bg-sub-primary rounded-full flex items-center justify-center  profile-circle'}>
                        <div className={'relative w-full h-full rounded-full overflow-hidden'}>
                            <Image
                                src={'/images/aditya_profile.png'}
                                alt={'profile picture'}
                                layout={'fill'}
                                className={'object-cover'}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default HeroSection;