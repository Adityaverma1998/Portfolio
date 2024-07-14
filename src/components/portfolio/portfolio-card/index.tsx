

interface PortfolioCardProps{
    thumbnail:string;
    name:string;
    url:string;
}
const PortfolioCard = (props:PortfolioCardProps)=>{
    const {thumbnail,name,url} = props;
    return(
        <>
            <div className={'w-full h-full'}>
                <div className={''}>

                </div>

            </div>

        </>
    )
}

export default PortfolioCard;