export default function Cursor() {
    return (
        <div className="hidden md:block">
            <div className='w-[5px] h-[5px] bg-secondary fixed top-0 left-0 translate-x-[-50%] translate-y-[-50%] rounded-[50%] z-50 pointer-events-none' id='cursor-dot'></div>
            <div className='w-[30px] h-[30px] border-2 border-secondary/30 fixed top-0 left-0 translate-x-[-50%] translate-y-[-50%] rounded-[50%] z-50 pointer-events-none' id='cursor-outline'></div>
        </div>
    )
}