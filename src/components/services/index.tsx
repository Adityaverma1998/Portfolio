import ServicesCard from "@/components/services/services-card";

interface ServicesCardInterface {
    icon: string;
    heading: string;
    mutedText: string;
}

const servicesCardSection: ServicesCardInterface[] = [
    {
        icon: '/images/app-icon.png',
        heading: 'Frontend Developer',
        mutedText: 'As a passionate Front-End Developer, I create visually stunning and user-friendly web applications. Proficient in state management with MobX and Redux, I ensure smooth, responsive designs and optimized performance. Let’s collaborate to build exceptional, high-quality digital experiences together!'},
    {
        icon: '/images/app-icon.png',
        heading: 'Backend Developer',
        mutedText: 'Experienced in backend development with Node.js, MySQL, and MongoDB. Proficient in building scalable server-side applications and optimizing database performance. Dedicated to leveraging modern technologies to craft reliable, high-performance backend solutions and seamless data integration.'
    },
    {
        icon: '/images/app-icon.png',
        heading: 'App Development',
        mutedText: 'Passionate about hybrid app development, adept at crafting seamless and high-performance mobile applications using Flutter and React Native. Expertise in building cross-platform solutions that deliver a native-like experience, ensuring consistent performance and user engagement across both iOS and Android.',
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-8 md:py-16">
                    {servicesCardSection?.map((item, index) => (
                        <ServicesCard key={index} icon={item.icon} heading={item.heading} mutedText={item.mutedText} index={index}/>
                    ))}
                </div>

            </div>
        </>
    )
}
export default ServicesSection;