"use client"
import React, {useEffect, useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Events, scroller, scrollSpy} from 'react-scroll';
import {motion} from "framer-motion";

const HeaderSection = () => {
    const [activeLink, setActiveLink] = useState('home');

    const [isOpen, setIsOpen] = useState(false);
    const navText = ['home', 'services', 'about', 'portfolio', 'contact']
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };
    const scrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    useEffect(() => {
        Events.scrollEvent.register('begin', (to, element) => {
            setActiveLink(to);
        });

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
        };
    }, []);

    console.log('check is open now', isOpen)
    return (
        <>
            <header className={'hidden lg:flex justify-between py-12 items-center '}>
                <p className={'text-2xl text-accent'}>Logo</p>

                {
                    <ul className="flex gap-10">
                        {navText.map((link) => (
                            <motion.li
                                key={link}
                                className={`text-xl ${
                                    activeLink === link ? 'text-accent font-bold' : 'text-link'
                                } transition-text duration-250 hover:text-accent cursor-pointer`}
                                whileHover={{scale: 1.1}}
                                transition={{type: 'spring', stiffness: 400, damping: 10}}
                                onClick={() => {
                                    scrollToSection(link);
                                    setActiveLink(link);
                                }}
                            >
                                {link.charAt(0).toUpperCase() + link.slice(1).replace('-', ' ')}
                            </motion.li>
                        ))}
                    </ul>
                }
                {/*<ul className="flex gap-10">*/}
                {/*    <li*/}
                {/*        className={`text-xl ${*/}
                {/*            activeLink === 'home' ? 'text-accent font-bold' : 'text-link'*/}
                {/*        } transition-text duration-250 hover:text-accent cursor-pointer`}*/}
                {/*        onClick={() => {*/}
                {/*            scrollToSection('home');*/}
                {/*            setActiveLink('home')*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        Home*/}
                {/*    </li>*/}
                {/*    <li*/}
                {/*        className={`text-xl ${*/}
                {/*            activeLink === 'services' ? 'text-accent font-bold' : 'text-link'*/}
                {/*        } transition-text duration-250 hover:text-accent cursor-pointer`}*/}
                {/*        onClick={() => {*/}
                {/*            scrollToSection('services');*/}
                {/*            setActiveLink('services')*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        Services*/}
                {/*    </li>*/}
                {/*    <li*/}
                {/*        className={`text-xl ${*/}
                {/*            activeLink === 'about' ? 'text-accent font-bold' : 'text-link'*/}
                {/*        } transition-text duration-250 hover:text-accent cursor-pointer`}*/}
                {/*        onClick={() => {*/}
                {/*            scrollToSection('about');*/}
                {/*            setActiveLink('about');*/}

                {/*        }}*/}
                {/*    >*/}
                {/*        About me*/}
                {/*    </li>*/}
                {/*    <li*/}
                {/*        className={`text-xl ${*/}
                {/*            activeLink === 'portfolio' ? 'text-accent font-bold' : 'text-link'*/}
                {/*        } transition-text duration-250 hover:text-accent cursor-pointer`}*/}
                {/*        onClick={() => {*/}
                {/*            scrollToSection('portfolio');*/}
                {/*            setActiveLink('portfolio');*/}
                {/*        }*/}

                {/*        }*/}
                {/*    >*/}
                {/*        Portfolio*/}
                {/*    </li>*/}
                {/*    <li*/}
                {/*        className={`text-xl ${*/}
                {/*            activeLink === 'contact' ? 'text-accent font-bold' : 'text-link'*/}
                {/*        } transition-text duration-250 hover:text-accent cursor-pointer`}*/}
                {/*        onClick={() => {*/}
                {/*            scrollToSection('contact');*/}
                {/*            setActiveLink('contact');*/}

                {/*        }}*/}
                {/*    >*/}
                {/*        Contact me*/}
                {/*    </li>*/}
                {/*</ul>*/}

                <motion.button
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 0.9}}
                    transition={{type: "spring", stiffness: 400, damping: 17}}
                    className="bg-button-gradient text-button px-10 py-3 rounded-md"
                >
                    Hire Me
                </motion.button>
            </header>

            <header className={'lg:hidden flex justify-between py-8 items-center '}>
                <div className={'w-full flex  justify-between items-center'}>

                    <motion.button
                        onClick={toggleDrawer}
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                        className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded-md"
                    >
                        {isOpen ? <CloseIcon/> : <MenuIcon/>}
                    </motion.button>
                    {/*<button*/}
                    {/*    onClick={toggleDrawer}*/}
                    {/*    className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded-md"*/}
                    {/*>*/}
                    {/*    {isOpen ? <CloseIcon/> : <MenuIcon/>}*/}
                    {/*</button>*/}

                    <p className={'text-2xl text-accent'}>Logo</p>

                    <motion.button
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}
                        transition={{type: "spring", stiffness: 400, damping: 17}}
                        className="bg-button-gradient text-button px-3 py-3 rounded-md"
                    >
                        Hire Me
                    </motion.button>

                </div>
                <div
                    className={`fixed top-0 left-0 w-4/5 h-full bg-primary text-white transform ${
                        isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out z-50`}
                >
                    <div className={'w-full flex justify-end items-center'}>
                        <motion.button
                            onClick={toggleDrawer}
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.9}}
                            transition={{type: "spring", stiffness: 400, damping: 17}}
                            className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded-md"
                        >
                            {isOpen ? <CloseIcon/> : <MenuIcon/>}
                        </motion.button>
                    </div>
                    <div className="flex flex-col p-4 ">
                        {
                            <ul className="flex flex-col p-4 gap-[1rem]">
                                {navText.map((link) => (
                                    <motion.li
                                        key={link}
                                        className={`text-xl ${
                                            activeLink === link ? 'text-accent font-bold' : 'text-link'
                                        } transition-text duration-250 hover:text-accent cursor-pointer border-2 border-primary rounded-2xl p-4 text-center`}
                                        whileHover={{scale: 1.1}}
                                        transition={{type: 'spring', stiffness: 400, damping: 10}}
                                        onClick={() => {
                                            scrollToSection(link);
                                            setActiveLink(link);
                                        }}
                                    >
                                        {link.charAt(0).toUpperCase() + link.slice(1).replace('-', ' ')}
                                    </motion.li>
                                ))}
                            </ul>}
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