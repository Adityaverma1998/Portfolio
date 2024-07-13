"use client"
import {useState} from "react";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const HeaderSection=()=>{

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    console.log('check is open now',isOpen)
    return(
        <>
        <header className={'hidden lg:flex justify-between py-12 items-center '}>
            <p className={'text-2xl text-accent'}>Logo</p>
            <ul className={' flex gap-10'}>
                <li className={' text-xl text-link transition-text duration-250 hover:text-accent cursor-pointer'}>Home</li>
                <li className={'text-xl text-link transition-text duration-250 hover:text-accent cursor-pointer'}>Services</li>
                <li className={'text-xl text-link transition-text duration-250 hover:text-accent cursor-pointer'}>About
                    me
                </li>
                <li className={'text-xl text-link transition-text duration-250 hover:text-accent cursor-pointer'}>Portfolio</li>
                <li className={'text-xl text-link transition-text duration-250 hover:text-accent cursor-pointer'}>Contact
                    me
                </li>
                {/*<li className={'text-xl text-link transition-text duration-250 hover:text-accent cursor-pointer'}></li>*/}
                {/*<li className={'text-xl text-link transition-text duration-250 hover:text-accent cursor-pointer'}></li>*/}
            </ul>
            <button className={'bg-button-gradient text-button px-10 py-3 rounded-md'}>
                Hire Me

            </button>
        </header>

        <header className={'lg:hidden flex justify-between py-8 items-center '}>
            <div className={'w-full flex  justify-between items-center'}>
                <button
                    onClick={toggleDrawer}
                    className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded-md"
                >
                    {isOpen ? <CloseIcon/> : <MenuIcon/>}
                </button>

                <p className={'text-2xl text-accent'}>Logo</p>

                <button className={'bg-button-gradient text-button px-3 py-3 rounded-md'}>
                    Hire Me

                </button>
            </div>
            <div
                className={`fixed top-0 left-0 w-full h-full bg-primary text-white transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out z-50`}
            >
                <div className={'w-full flex justify-end items-center'}>
                    <button
                        onClick={toggleDrawer}
                        className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded-md"
                    >
                        {isOpen ? <CloseIcon/> : <MenuIcon/>}
                    </button>
                </div>
                <div className="flex flex-col p-4">
                    <Link href="/">
                        <p className="py-2 px-4 text-xl text-link transition-text duration-250 hover:text-accent cursor-pointer">Home</p>
                    </Link>

                    <Link href="/">
                        <p className="py-2 px-4 text-xl text-link transition-text duration-250 hover:text-accent cursor-pointer">Services</p>
                    </Link>
                    <Link href="/">
                        <p className="py-2 px-4 text-xl text-link transition-text duration-250 hover:text-accent cursor-pointer">About me</p>
                    </Link>
                    <Link href="/">
                        <p className="py-2 px-4 text-xl text-link transition-text duration-250 hover:text-accent cursor-pointer">Portfolio</p>
                    </Link>
                    <Link href="/">
                        <p className="py-2 px-4 text-xl text-link transition-text duration-250 hover:text-accent cursor-pointer">Contact me</p>
                    </Link>
                    {/*<Link href="/">*/}
                    {/*    <p className="py-2 px-4 hover:bg-gray-700 rounded-md">Home</p>*/}
                    {/*</Link>*/}


                </div>
            </div>

        </header>
</>
)
}

export default HeaderSection;