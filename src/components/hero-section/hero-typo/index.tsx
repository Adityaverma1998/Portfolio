"use client"
import Typewriter from 'typewriter-effect';





const HeroTypo =()=>{
    return(
        <>
            <div className={''}>
                <p className={'text-subheading text-xl font-semibold'}> Hi I am</p>

                <p className={'text-2xl text-body font-bold'}> Aditya</p>


                <h1 className={'text-gradient text-3xl font-extrabold'}>
                    <Typewriter
                        options={{

                            strings: ['Software Developer Engineer(SDE)-1', 'Web Developer','App Developer','FullStack Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />

                    </h1>
            </div>
        </>
    )
}

export default HeroTypo;