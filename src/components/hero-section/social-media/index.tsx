"use client";
import Image from "next/image";
import { SvgIconComponent } from '@mui/icons-material';

export interface SocialMediaProps {
    icon: SvgIconComponent;
    link: string;
    color:string,
    className:string,
}

const SocialMedia: React.FC<SocialMediaProps> = ({ icon: Icon, link,className,color }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="h-12 w-12 bg-transparent rounded-full flex items-center justify-center border-2 border-[#575757] cursor-pointer">

                    <Icon style={{ fontSize: '32px',borderRadius:'50%',color:color  }} className={className}/>

            </div>
        </a>
    );
};

export default SocialMedia;
