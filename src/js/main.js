import TypeIt from "typeit";
window.onload = () => {
    /* cursor */
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');
    
    const moveCursor = (e)=> {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
        
        cursorOutline.style.left = `${mouseX}px`;
        cursorOutline.style.top = `${mouseY}px`;

        cursorOutline.animate({
            left: `${mouseX}px`,
            top: `${mouseY}px`,
        }, {duration: 500, fill: 'forwards'});

        cursorOutline.classList.add('trasition-all', 'duration-150', 'ease-in-out');
        
        const cursorHoverList = document.querySelectorAll('#cursorHover');
        const cursorHoverArr = [...cursorHoverList];
        
        cursorHoverArr.forEach((cursorHover) => {
            cursorHover.classList.add('trasition-all', 'duration-150', 'ease-out');
            cursorHover.classList.add('cursor-none');
            cursorHover.addEventListener('mouseover', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorOutline.style.border = '2px solid #E2E8F0';
                cursorDot.style.border = '2px solid #E2E8F0';
            })
    
            cursorHover.addEventListener('mouseout', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.border = '2px solid  rgba(148, 163, 184, 0.3)';
                cursorDot.style.border = '2px solid  rgba(148, 163, 184, 0.3)';
            })
        })
    }
    
    window.addEventListener('mousemove', moveCursor)
    
    /* parallax animation */
    const parallaxAbout = document.getElementById('parallaxAbout');
    const parallaxProjects = document.getElementById('parallaxProjects');

    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;

        parallaxAbout.animate({
            right: `${offset * 0.5}px`,
        }, {duration: 1500, fill: 'forwards'})

        parallaxProjects.animate({
            right: `${offset * 0.15}px`,
        }, {duration: 1000, fill: 'forwards'})
    })

    /* typeit */
    new TypeIt("#typeIt", {
       speed: 100,
       loop: true
    })
    .type("I ")
    .type("code and develop a web.")
    .pause(3000)
    .delete(23)
    .type("code professional websites.")
    .pause(3000)
    .delete(27)
    .type("build interactive websites.")
    .pause(3000)
    .delete(27)
    .type("develop efficient web solutions.")
    .pause(3000)
    .delete(32)
    .type("build responsive web pages.")
    .pause(3000)
    .go();

    /* navbar */
    const navbar = document.getElementById('navbar');
    let lastScrollPosition = 0;

    window.addEventListener('scroll', () => {
        let scrollPosition = window.pageYOffset;

        if (scrollPosition < lastScrollPosition && scrollPosition > 0) {
            // Scrolling up
            navbar.style.top = '0';
            navbar.classList.remove('shadow-none');
            navbar.classList.add('shadow-lg');
        } else if (scrollPosition > lastScrollPosition) {
            // Scrolling down
            navbar.style.top = '-100px';
        } else if (scrollPosition == 0) {
            navbar.style.top = '0';
            navbar.classList.remove('shadow-lg');
            navbar.classList.add('shadow-none');
        }

        lastScrollPosition = scrollPosition;
    });
}
