export default function About(){
    return (
        <>
            {/* background */}
            <h1 className="text-6xl text-secondary/10 absolute right-0 w-max translate-y-10 -z-50" id="parallaxAbout">&lt; 01. About Me /&gt;</h1>

            {/* about */}
            <div className="px-6 md:px-10 pt-40 lg:mx-auto" id="about">
                <div className="max-w-screen-xl mx-auto">
                    {/* headings */}
                    <div className="flex items-center gap-6 md:w-1/2">
                        <h1 className='text-2xl md:text-3xl font-bold w-max'>01. About Me</h1>
                        <div className="flex-1">
                            <div className='w-full h-[2px] bg-primary'></div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-20 md:gap-0 items-center">
                        {/* content */}
                        <div className="text-secondary mt-10 md:w-1/2">
                            <p className="text-sm md:text-base">Hello there! My name is Rivaldo Tandoko and i&apos;m a front-end developer based in Pontianak, specializing in crafting visually appealing and user-friendly websites. Currently pursuing my undergraduate degree in informatics, I focus on frontend web development, translating design concepts into seamless, responsive interfaces that enhance user experiences.</p>

                            <p className="mt-6 text-sm md:text-base">My passion lies in delivering high-quality, innovative solutions that meet both aesthetic and functional requirements. With a keen eye for detail and a commitment to staying updated with industry trends, I strive to create intuitive user interfaces that leave a lasting impression. Outside of coding, I enjoy exploring new technologies and continuously refining my skills to keep up with the evolving digital landscape.</p>
                            
                            <div className="mt-6 text-sm md:text-base">
                                <span>Here are few technologies I&apos;ve been working with recently:</span>
                                <div className="columns-2 mt-2">
                                    <div className="text-sm md:text-base">
                                        <p>&#10148; HTML</p>
                                        <p>&#10148; CSS</p>
                                        <p>&#10148; TailwindCSS</p>
                                        <p>&#10148; JavaScript</p>
                                        <p>&#10148; Node.js</p>
                                        <p>&#10148; React</p>
                                        <p>&#10148; PHP</p>
                                        <p>&#10148; Laravel</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* profile picture */}
                        <div className="md:w-1/2">
                            <div className="flex justify-center w-full">
                                <div className="w-4/5 sm:w-1/2 md:w-4/5 lg:w-1/2 rounded-md overflow-hidden relative">
                                    <img src="src/assets/profile.jpeg" alt="" className="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}