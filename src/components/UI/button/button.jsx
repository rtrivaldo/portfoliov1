export default function Button({ text }) {
    return (
        <button className="border-2 border-primary px-4 md:px-6 py-2 md:py-3 rounded-md text-sm hover:text-secondary hover:border-secondary" id="cursorHover">
            {text}
        </button>
    )
}