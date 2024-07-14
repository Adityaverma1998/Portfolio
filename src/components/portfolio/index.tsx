import PortfolioCard from "@/components/portfolio/portfolio-card";
import Tabbars from "@/components/portfolio/tabbars ";



const PortfolioSection = ()=>{
    return(
        <>
            <div className={''}>
                <h2 className={'text-3xl font-semibold text-secondary text-center'}>Portfolio</h2>
            </div>

            <Tabbars/>

        </>
    )
}

export default PortfolioSection;