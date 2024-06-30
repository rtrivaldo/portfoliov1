import Hamburger from "../UI/hamburger/hamburger";

export default function NavBar() {
    return (
        <>
            <nav className="py-8 flex justify-between items-center">
                {/* logo */}
                <div className="">
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