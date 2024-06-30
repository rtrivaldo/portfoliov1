/* eslint-disable react/prop-types */
export default function Card({title, description, image, techStack, link}) {
    return (
        <div className="group md:hover:bg-secondary/5 lg:w-3/4 mx-auto md:p-6 rounded-md">
            <a href={link} target="_blank" className="flex flex-col md:flex-row gap-6" id="cursorHover">
                <div className="md:w-1/3 h-max border-2 border-secondary/10 group-hover:border-secondary/20 rounded-lg overflow-hidden">
                    <img src={image} alt="" className="h-full w-full object-cover" />
                </div>

                <div className="md:w-2/3">
                    <div className="flex gap-2 items-center">
                        <h1 className="text-lg group-hover:font-semibold">{title}</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="text-xl rotate-90 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-150 ease-out"><path fill="currentColor" d="M17.6 18L8 8.4V17H6V5h12v2H9.4l9.6 9.6z"/></svg>
                    </div>
                    <p className="mt-2 text-secondary text-sm md:text-base">{description}</p>

                    <div className="mt-6 flex gap-4 text-xs text-secondary font-semibold">
                        {techStack}
                    </div>
                </div>
            </a>
        </div>
    )
}