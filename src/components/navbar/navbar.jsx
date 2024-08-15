import Hamburger from "../UI/hamburger/hamburger";

export default function NavBar() {
    return (
        <>
            <nav className="py-8 flex justify-between items-center fixed w-full right-0 px-6 md:px-10 top-0 bg-background z-40 transition-all duration-500" id="navbar">
                {/* logo */}
                <div>
                    <a className="text-lg font-bold hover:text-secondary" id="cursorHover"> &lt; Rivaldo Tandoko /&gt; </a>
                </div>

                {/* links */}
                <div className="gap-6 hidden lg:flex">
                    <a href="#about" className="text-lg font-bold hover:text-secondary" id="cursorHover">&lt; About /&gt;</a>
                    <a href="#projects" className="text-lg font-bold hover:text-secondary" id="cursorHover">&lt; Projects /&gt;</a>
                    <a href="#contact" className="text-lg font-bold hover:text-secondary" id="cursorHover">&lt; Contact /&gt;</a>  
                </div>

                {/* hire me */}
                {/* <a className="text-lg font-bold hover:text-secondary hidden lg:block" id="cursorHover">&lt; Hire me /&gt;</a> */}

                {/* hamburger */}
                <Hamburger />  
            </nav>
        </>
    )
}