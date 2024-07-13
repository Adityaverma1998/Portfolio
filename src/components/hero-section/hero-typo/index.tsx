"use client"
import Typewriter from 'typewriter-effect';
import SocialMedia from "@/components/hero-section/social-media";



const socialMedia =[
    {
        icon:'/images/instagram.png',
        link:'https://www.google.com'
    },
    {
        icon:'/images/instagram.png',
        link:'https://www.google.com'
    },
    {
        icon:'/images/instagram.png',
        link:'https://www.google.com'
    },
    {
        icon:'/images/instagram.png',
        link:'https://www.google.com'
    },
]

const HeroTypo =()=>{
    return(
        <>
            <div className={'w-full pt-20'}>
                <p className={'text-subheading text-xl  md:text-2xl font-semibold'}> Hi I am</p>

                <p className={'text-2xl md:text-3xl text-body font-bold pt-2'}> Aditya Verma</p>


                <div className={'pt-8'}>
                    <h1 className={'text-gradient text-3xl  md:text-5xl font-extrabold'}>
                        <Typewriter
                            options={{

                                strings: [ 'Web Developer', 'App Developer', 'FullStack Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />

                    </h1>
                </div>
                <div className={' py-14  w-[72%] md:w-1/3 flex justify-between' }>
                    {
                        socialMedia?.map((items:any,index:number)=>{
                            return  <SocialMedia key={index} icon={items?.icon} link={items?.link} />

                        })
                    }
                </div>

                <div className={'flex  gap-7'}>
                    <button className={'bg-button-gradient text-button px-6 py-2 rounded-md'}>
                        Hire me
                    </button>

                    <button className={'border-2 border-[#959595] rounded-md px-6 py-2 text-[#959595] bg-transparent'}>
                       Download Resume
                    </button>
                </div>

                <div className={'py-20'}>
                    <div className={'w-full md:w-[84%] bg-sub-primary grid grid-cols-3 divide-x  py-6 rounded-md'}>
                        <div className={'px-3 md:px-6 py-2'}>
                            <p className={'text-xl md:text-2xl text-accent'}> 5+ </p>
                            <p className={'text-base md:text-xl text-light'}> Experiences</p>
                        </div>
                        <div className={'px-3 md:px-6 py-2'}>
                            <p className={'text-xl md:text-2xl text-accent'}> 20+ </p>
                            <p className={'text-base md:text-xl text-light'}> Project done</p>
                        </div>
                        <div className={'px-3 md:px-6 py-2'}>
                            <p className={'text-xl md:text-2xll text-accent'}> 80+ </p>
                            <p className={'text-base md:text-xl text-light'}> Happy Clients</p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default HeroTypo;