import ServicesCard from "@/components/services/services-card";

interface ServicesCardInterface {
    icon: string;
    heading: string;
    mutedText: string;
}

const servicesCardSection: ServicesCardInterface[] = [
    {
        icon: '/images/app-icon.png',
        heading: 'Service One',
        mutedText: 'Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur',
    },
    {
        icon: '/images/app-icon.png',
        heading: 'Service Two',
        mutedText: 'Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur',
    },
    {
        icon: '/images/app-icon.png',
        heading: 'Service Three',
        mutedText: 'Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur',
    },
    {
        icon: '/images/app-icon.png',
        heading: 'Service Three',
        mutedText: 'Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur',
    },
    // {
    //     icon: '/images/app-icon.png',
    //     heading: 'Service Three',
    //     mutedText: 'Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur',
    // },
    // {
    //     icon: '/images/app-icon.png',
    //     heading: 'Service Three',
    //     mutedText: 'Lorem ipsum dolor sit amet . Imperdiet Lorem ipsum dolor sit amet consectetur',
    // },
];


const ServicesSection = () => {
    return (
        <>
            <div className={'py-4 md:py-10'}>
                <div className={'w-full flex flex-col items-center justify-center'}>
                    <h2 className={'text-3xl font-semibold text-secondary'}>Services</h2>
                    <p className={'text-lg font-normal text-subheading leading-relaxed text-center'}>Lorem ipsum dolor
                        sit amet
                        consectetur. Imperdiet convallis blandit felis ligula aliquam</p>
                </div>
                <div className={'flex  justify-center md:justify-between  flex-wrap gap-10 py-8 md:py-16'}>
                    {
                        servicesCardSection?.map((items: ServicesCardInterface, index: number) => {
                            return <ServicesCard key={index} icon={items.icon} heading={items.heading}
                                                 mutedText={items.mutedText}/>;
                        })
                    }
                </div>

            </div>
        </>
    )
}
export default ServicesSection;