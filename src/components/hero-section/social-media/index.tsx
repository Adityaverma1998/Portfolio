"use client"
import Image from "next/image";
import metamask from "*.svg";
interface SocialMediaProd{
    icon:string;
    link:string;
}
const SocialMedia =(props:SocialMediaProd)=>{


    return(
        <>
            {/*<div className="h-12 w-[25%] flex justify-center items-center relative">*/}
            {/*    <Image src={'/images/instagram.png'} layout="fill" objectFit="contain" alt="metamask"/>*/}
            {/*</div>*/}
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <div
                    className=" h-12 w-12 bg-transparent rounded-full flex items-center justify-center border-2 border-[#575757] cursor-pointer ">
                   <div className={'h-6 w-6 relative'}>
                       <Image
                           src="/images/instagram.png"
                           layout="fill"
                           objectFit="contain"
                           alt="metamask"
                           className="absolute "
                       />
                   </div>
                </div>
            </a>


        </>
    )
}

export default SocialMedia;