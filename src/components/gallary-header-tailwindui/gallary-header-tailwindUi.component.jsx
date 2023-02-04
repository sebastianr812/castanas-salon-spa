export default function GallaryHeaderTailwindUi() {
    return (
        <div className="relative ">
            <div className="absolute inset-0 bg-slate-500">
                <img
                    className="w-full h-full "
                    src="https://images.unsplash.com/photo-1674922164798-9f1ea898f58e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                />
                <div className="absolute inset-0 mix-blend-multiply bg-slate-500" aria-hidden="true" />
            </div>
            <div className="relative px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Our Latest Work</h1>
                <p className="max-w-3xl mt-6 text-xl text-indigo-100">
                    We value providing you with exceptional services to make you look and feel great. Here are some of our latest work
                </p>
            </div>
        </div>
    )
}
