/* eslint-disable react/jsx-key */
import Card from "../UI/cards/card";
import TechStack from "../tech-stack/techStack";

export default function Project() {
    return (
        <>
            {/* background */}
            <h1 className="text-6xl text-secondary/10 absolute right-0 w-max translate-y-14 -z-50" id="parallaxProjects">
                &lt; 02. Projects /&gt;
            </h1>

            {/* projects */}
            <div className="px-6 md:px-10 lg:mx-auto" id="projects">
                <div className="max-w-screen-xl mx-auto">
                    {/* headings */}
                    <div className="flex items-center gap-6 md:w-1/2">
                        <h1 className="text-2xl md:text-3xl font-bold w-max">02. Projects</h1>
                        <div className="flex-1">
                            <div className="w-full h-[2px] bg-primary"></div>
                        </div>
                    </div>

                    {/* content */}
                    <div className="mt-10">
                        {/* expense tracker */}
                        <div>
                            <Card
                                title={"Expense Tracker"}
                                description={"An expense tracking application built using the Laravel framework enables users to effortlessly record and manage their expenses. Key features include transaction logging, monthly expense reporting, and an integrated authentication system to ensure user data security."}
                                image={"assets/expense-tracker.jpeg"}
                                techStack={[<TechStack text="TailwindCSS" />, <TechStack text="Laravel" />, <TechStack text="SQLite" />]}
                                link={"https://github.com/rtrivaldo/expense-tracker"}
                            />
                        </div>

                        {/* tic tac toe */}
                        <div className="mt-20">
                            <Card
                                title={"Tic Tac Toe"}
                                description={"Developing a Tic Tac Toe game using the React library allows two players to compete on a 3x3 game board. Key features include interactive move selection, real-time game status updates like player turns and winner announcements, and a responsive, user-friendly interface."}
                                image={"assets/tic-tac-toe.jpeg"}
                                techStack={[<TechStack text="TailwindCSS" />, <TechStack text="React" />]}
                                link={"https://tic-tac-toe-alpha-two-29.vercel.app"}
                            />
                        </div>

                        {/* omah */}
                        <div className="mt-20">
                            <Card title={"Omah"} description={"Omah is a challenge from Codedesign.dev that tasked me with coding a project based on a Figma design. The challenge involved translating the visual design into a functional, responsive website, showcasing my skills in front-end development and design implementation."} image={"assets/omah.jpeg"} techStack={[<TechStack text="TailwindCSS" />, <TechStack text="JavaScript" />]} link={"https://rtrivaldo.github.io/Omah"} />
                        </div>

                        {/* landscapio */}
                        <div className="mt-20">
                            <Card
                                title={"Landscapio"}
                                description={"Landscapio is a challenge from Codedesign.dev where I was required to code a project from a Figma design. This task involved transforming the provided visual layout into a functional and responsive website, demonstrating my ability to accurately implement design specifications using front-end development skills."}
                                image={"assets/landscapio.jpeg"}
                                techStack={[<TechStack text="HTML" />, <TechStack text="CSS" />, <TechStack text="JavaScript" />]}
                                link={"https://rtrivaldo.github.io/landscapio"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
