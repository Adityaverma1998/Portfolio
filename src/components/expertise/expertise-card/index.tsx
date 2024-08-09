"use client"
import Image from "next/image";

export interface IExpertiseCard {
    logo: string;
    title: string;
    desc: string;
}

const ExpertiseCard = (props: IExpertiseCard) => {
    const {logo, title, desc} = props
    return (
        <>
            <div className={'w-full  bg-sub-primary rounded-lg p-8'}>
                <div className={'flex gap-4'}>
                    <div
                        className={'h-[60px] md:h-[60px] aspect-square flex items-center justify-center'}>
                        <div className={'relative w-full h-full rounded-full overflow-hidden'}>
                            <Image
                                src={logo}
                                alt={title}
                                layout={'fill'}
                                className={'object-contain '}
                            />
                        </div>


                    </div>
                    <h2 className={'text-2xl text-accent '}>{title}</h2>

                </div>

                <div className={'exp-container pt-3'}>
                    <div className={'exp-para text-caption'}>
                        {desc}

                    </div>

                </div>
            </div>
        </>
    )
}

export default ExpertiseCard;