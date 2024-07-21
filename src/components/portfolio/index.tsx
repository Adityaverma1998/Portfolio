import PortfolioCard from "@/components/portfolio/portfolio-card";
import Tabbars from "@/components/portfolio/tabbars ";
import AnimatedText from "@/components/text-animation";
import ParallaxComponent from "@/components/text-animation";



const PortfolioSection = ()=>{
    return(
        <>
            <div className={'flex justify-center items-center'}>
                <h2 className={'text-3xl font-semibold text-secondary text-center'}>
                    <AnimatedText text={'Portfolio'}/>
                    </h2>

            </div>

            <Tabbars/>

        </>
    )
}

export default PortfolioSection;