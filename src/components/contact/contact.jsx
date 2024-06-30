import Button from "../UI/button/button";

export default function Contact() {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center">
                <span className="text-sm md:text-base">03. What&apos;s Next?</span>
                <h1 className="mt-4 text-4xl md:text-5xl font-bold text-primary/90">Get In Touch</h1>

                <p className="mt-10 w-4/5 md:w-2/3 lg:w-1/3 text-center text-secondary text-sm md:text-base">I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>

                <a href className="mt-20">
                    <Button text="Say Hello!" />
                </a>
            </div>
        </>
    )
}