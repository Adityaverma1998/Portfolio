import HeroTypo from "@/components/hero-section/hero-typo";

const HeroSection = ()=>{
    return(
        <>
            <div className={'flex  md:flex-row flex-col items-center  '}>
                <div className={'w-full lg:w-1/2'}>
                    <HeroTypo/>

                </div>
                <div className={''}>
                   <div className={'h-[300px] md:h-[500px] aspect-square bg-sub-primary rounded-full flex items-center justify-center'}>
                        <h1>hello</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeroSection;