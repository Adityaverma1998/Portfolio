const HeaderSection=()=>{
    return(
        <>
            <header className={'flex justify-between py-8 items-center'}>
                <p className={'text-2xl text-accent'}>Logo</p>
                <ul className={'flex gap-10'}>
                    <li className={' text-xl text-link transition-text duration-250 hover:text-accent cursor-pointer'}>Home</li>
                    <li className={'text-xl text-link transition-text duration-250 hover:text-accent cursor-pointer'}>Services</li>
                    <li className={'text-xl text-link transition-text duration-250 hover:text-accent cursor-pointer'}>About me</li>
                    <li className={'text-xl text-link transition-text duration-250 hover:text-accent cursor-pointer'}>Portfolio</li>
                    <li className={'text-xl text-link transition-text duration-250 hover:text-accent cursor-pointer'}>Contact me</li>
                    <li className={'text-xl text-link transition-text duration-250 hover:text-accent cursor-pointer'}></li>
                    <li className={'text-xl text-link transition-text duration-250 hover:text-accent cursor-pointer'}></li>
                </ul>
                <button className={'bg-button-gradient text-button px-6 py-1 rounded-md'}>
                    Hire Me

                </button>
            </header>
        </>
    )
}

export default HeaderSection;