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
                <div className={'w-full  lg:w-1/2 flex justify-center items-center relative floatingImgContainer'}>
                    <div
                        className={'h-[200px] md:h-[400px] aspect-square bg-sub-primary rounded-full flex items-center justify-center  profile-circle '}>
                        <div className={'relative w-full h-full rounded-full overflow-hidden'}>
                            <Image
                                src={'/images/aditya_profile.png'}
                                alt={'profile picture'}
                                layout={'fill'}
                                className={'object-cover '}
                            />
                        </div>


                    </div>
                    {/*<Image*/}
                    {/*    className={'floatingIMg -top-[10%] left-[30%]'}*/}
                    {/*    src={'/images/techs/react.png'}*/}
                    {/*    width={40}*/}
                    {/*    height={40}*/}
                    {/*    alt={'polygonGold'}*/}
                    {/*/>*/}
                    {/*<Image*/}
                    {/*    className={'floatingIMg -top-[15%] left-[50%]'}*/}
                    {/*    src={'/images/techs/tailwind.svg'}*/}
                    {/*    width={40}*/}
                    {/*    height={40}*/}
                    {/*    alt={'polygonGold'}*/}
                    {/*/>*/}
                    {/*<Image*/}
                    {/*    className={'floatingIMg top-[0%] left-[80%]'}*/}
                    {/*    src={'/images/techs/nextjs.svg'}*/}
                    {/*    width={40}*/}
                    {/*    height={40}*/}
                    {/*    alt={'polygonGold'}*/}
                    {/*/>*/}
                    {/*<Image*/}
                    {/*    className={'floatingIMg bottom-[45%] left-[30%]'}*/}
                    {/*    src={'/images/techs/html.svg'}*/}
                    {/*    width={40}*/}
                    {/*    height={40}*/}
                    {/*    alt={'polygonGold'}*/}
                    {/*/>*/}
                    {/*<Image*/}
                    {/*    className={'floatingIMg bottom-[45%] left-[30%]'}*/}
                    {/*    src={'/images/techs/css.svg'}*/}
                    {/*    width={40}*/}
                    {/*    height={40}*/}
                    {/*    alt={'polygonGold'}*/}
                    {/*/>*/}
                </div>
            </div>
        </>
    )
}
export default HeroSection;