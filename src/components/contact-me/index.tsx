import MyLocationMap from "@/components/contact-me/my-location-map";
import ContactForm from "@/components/contact-me/contact-form";

const ContactMeSection = () => {
    return (
        <>
            <div className={'py-4 md:py-10 '}>
                <div className={'w-full flex flex-col items-center justify-center'}>
                    <h2 className={'text-3xl font-semibold text-secondary'}>Contact Me</h2>
                    <p className={'text-lg font-normal text-subheading leading-relaxed text-center'}>Cultivating
                        Connections: Reach Out and Connect with Me</p>
                </div>

                <div className={'py-4 md:py-6 lg:py-10'}>
                    <div className={'flex justify-center items-center'}>
                        {/*<MyLocationMap/>*/}
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactMeSection;