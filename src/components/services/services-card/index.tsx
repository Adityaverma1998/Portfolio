import Image from "next/image";

interface ServicesCardProps {
    icon: string;
    heading: string;
    mutedText: string;
}

const ServicesCard = (props: ServicesCardProps) => {

    const {icon,heading,mutedText} = props;
    return (
        <>
            <div className={'p-8 bg-sub-primary rounded-md h-[200px] w-[300px] flex flex-col items-center justify-center gap-2'}>
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
            </div>
        </>
    )
}

export default ServicesCard;