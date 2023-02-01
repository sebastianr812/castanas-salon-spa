export default function Divider() {
    return (
        <div className="relative ">
            <div className="absolute inset-0 flex items-center top-10" aria-hidden="true">
                <div className="w-full border-t-4 border-gray-300 " />
            </div>
            {/* <div className="relative flex justify-center">
                <span className="px-2 text-sm text-gray-500 bg-white">Continue</span>
            </div> */}
        </div>
    )
}
