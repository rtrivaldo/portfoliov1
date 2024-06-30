import { useState } from 'react';

export default function Hamburger(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
             {/* hamburger */}
             <div className="lg:hidden z-50">
                <button className="p-2 rounded-md bg-secondary/30 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* modal */}
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-slate-950/70 z-10" onClick={() => setIsOpen(false)}>
                    <div className="fixed top-24 right-4 md:right-10 p-4 rounded-lg bg-slate-950 h-max w-max lg:hidden" id="modal">
                        <div className="flex flex-col gap-6 text-right">
                            <a href="#about" className="hover:text-secondary" id="cursorHover">&lt; About /&gt;</a>
                            <a href="#projects" className="hover:text-secondary" id="cursorHover">&lt; Projects /&gt;</a>
                            <a href="#contact" className="hover:text-secondary" id="cursorHover">&lt; Contact /&gt;</a>  
                        </div>
                    </div>
                </div>
            )}
            
        </>
    )
}