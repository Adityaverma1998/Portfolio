import Image from "next/image";
import { motion } from "framer-motion";

interface ServicesCardProps {
    icon: string;
    heading: string;
    mutedText: string;
    index:number;
}

const ServicesCard = (props: ServicesCardProps) => {

    const {icon,heading,mutedText,index} = props;
    return (
        <>
            <motion.div
                className="p-8 bg-sub-primary rounded-md h-[200px] w-[300px] flex flex-col items-center justify-center gap-2"
                initial={{
                    opacity: 0,
                    // if odd index card,slide from right instead of left
                    x: index % 2 === 0 ? 50 : -50
                }}
                whileInView={{
                    opacity: 1,
                    x: 0, // Slide in to its original position
                    transition: {
                        duration: 1 // Animation duration
                    }
                }}
                // viewport={{ amount:'some'  }}
            >
                <div className={''}>
                    <div className={'h-12 w-12 relative'}>
                        <Image
                            src={icon}
                            layout="fill"
                            objectFit="contain"
                            alt={icon}
                            className="absolute "
                        />
                    </div>
                </div>
                <h2 className={'text-xl text-accent '}>{heading}</h2>
                <p className={'text-base  text-caption'}>{mutedText}</p>
            </motion.div>
        </>
    )
}

export default ServicesCard;