/* eslint-disable react/jsx-key */
import Card from "../UI/cards/card";
import TechStack from "../tech-stack/techStack";

export default function Project(){
    return (
        <>
            {/* background */}
            <h1 className="text-6xl text-secondary/10 absolute right-0 w-max translate-y-14 -z-50" id="parallaxProjects">&lt; 02. Projects /&gt;</h1>

            {/* projects */}
            <div className="px-6 md:px-10 lg:mx-auto" id="projects">
                <div className="max-w-screen-xl mx-auto">
                    {/* headings */}
                    <div className="flex items-center gap-6 md:w-1/2">
                        <h1 className='text-2xl md:text-3xl font-bold w-max'>02. Projects</h1>
                        <div className="flex-1">
                            <div className='w-full h-[2px] bg-primary'></div>
                        </div>
                    </div>
                    
                    {/* content */}
                    <div className="mt-10">
                        {/* expense tracker */}
                        <div>
                            <Card title={"Expense Tracker"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente delectus optio ipsam deleniti id, incidunt sit a vel possimus quaerat!"} image={"src/assets/expense-tracker.jpeg"} techStack={[<TechStack text="TailwindCSS" />, <TechStack text="Laravel" />, <TechStack text="SQLite" />]} link={"https://github.com/rtrivaldo/expense-tracker"} />
                        </div>

                        {/* tic tac toe */}
                        <div className="mt-20">
                            <Card title={"Tic Tac Toe"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente delectus optio ipsam deleniti id, incidunt sit a vel possimus quaerat!"} image={"src/assets/tic-tac-toe.jpeg"} techStack={[<TechStack text="TailwindCSS" />, <TechStack text="React" />]} link={"https://tic-tac-8l70v27il-rivaldo-tandokos-projects.vercel.app/"} />
                        </div>

                        {/* omah */}
                        <div className="mt-20">
                            <Card title={"Omah"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente delectus optio ipsam deleniti id, incidunt sit a vel possimus quaerat!"} image={"src/assets/omah.jpeg"} techStack={[<TechStack text="TailwindCSS" />, <TechStack text="JavaScript" />]} link={"https://rtrivaldo.github.io/Omah/public/index.html"} />
                        </div>

                        {/* landscapio */}
                        <div className="mt-20">
                            <Card title={"Landscapio"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente delectus optio ipsam deleniti id, incidunt sit a vel possimus quaerat!"} image={"src/assets/landscapio.jpeg"} techStack={[<TechStack text="HTML" />, <TechStack text="CSS" />, <TechStack text="JavaScript" />]} link={"https://rtrivaldo.github.io/landscapio/"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}