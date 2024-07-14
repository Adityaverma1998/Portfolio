const MyLocationMap = () => {
    return (
        <>
            <div className={'h-[400px] aspect-square  md:h-[500px] md:w-[600px] '}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.5099194634804!2d77.04661087563919!3d28.704303280817495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0700272b22d1%3A0xff170ea4c7cbfe08!2sShiva%20General%20Store!5e0!3m2!1sen!2sin!4v1720924475921!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{border: 0, borderRadius: 8}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    )
}

export default MyLocationMap;