import ServicesCard from "@/components/services/services-card";
import ExpertiseCard, {IExpertiseCard} from "@/components/expertise/expertise-card";


const jobStartDate = new Date('2022-12-01');
const currentDate = new Date();

// Calculate the difference in months
let experienceMonths = (currentDate.getFullYear() - jobStartDate.getFullYear()) * 12;
experienceMonths -= jobStartDate.getMonth();
experienceMonths += currentDate.getMonth();

// Convert months to years and months
const experienceYears = Math.floor(experienceMonths / 12);
const remainingMonths = experienceMonths % 12;

// Create a dynamic experience string
let experienceString = `${experienceYears} years`;
if (remainingMonths > 0) {
    experienceString += ` and ${remainingMonths} months`;
}


const servicesCardSection: IExpertiseCard[] = [
    {
        logo:'/images/logos/developer.png',
        title:'Software Development',
        desc:"Strong knowledge in functional and OOPs, with experience in Dart, JavaScript, and TypeScript. Capable of utilizing each language's strengths to develop efficient and scalable solutions. "
    },
    {
        logo:'/images/logos/react-logo.png',
        title:'Frontend Dev React, NextJS',
        desc:`Passionate about UI/UX. Over ${experienceString}  of development experience in HTML, CSS, JS, React and NextJS frameworks..`
    },
    {
        logo:'/images/logos/flutter-logo.png',
        title:'Flutter Dev Android, iOS',
        desc:"Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework."
    },



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
                    {servicesCardSection?.map((item:IExpertiseCard, index) => (
                        <ExpertiseCard key={index}  desc={item.desc} logo={item.logo} title={item.title}/>
                    ))}
                </div>

            </div>
        </>
    )
}
export default ServicesSection;