"use client";
import {ExpertiseItemContainer, TabButton} from "@/components/portfolio/tabs-component";
import {PortfolioData, PortfolioDataInterface, tabs} from "@/helpers/portfolio-data";
import PortfolioCard from "@/components/portfolio/portfolio-card";
import {useEffect, useState} from "react";

const Tabbars = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [filteredData, setFilteredData] = useState<PortfolioDataInterface[]>(PortfolioData);

    useEffect(() => {
        if (selectedCategory) {
            console.log('check selectedCategory', selectedCategory);
            const filtered = selectedCategory === 'All'
                ? PortfolioData
                : PortfolioData.filter(item => item.category === selectedCategory);
            setFilteredData(filtered);
        }
    }, [selectedCategory]);

    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center py-8">
                {tabs?.map((item, index) => (
                    <TabButton key={index} onClick={() => setSelectedCategory(item)}
                               className={selectedCategory === item ? 'active' : ''}

                    >
                        {item}
                    </TabButton>
                ))}
            </div>
            <div className="col-span-8 flex">
                <ExpertiseItemContainer className="flex flex-wrap justify-start p-6 gap-6">
                    {filteredData && filteredData.map((item: PortfolioDataInterface, index: number) => (
                        <PortfolioCard key={index} name={item.name} thumbnail={item.image} url={item.image}/>
                    ))}
                </ExpertiseItemContainer>
            </div>
        </>
    );
};

export default Tabbars;
