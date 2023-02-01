import { Link } from "react-router-dom"

export default function HeroTailwindUi() {
    return (
        <div className="relative bg-white ">
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 ">
                <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
                    <div className="max-w-2xl mx-auto lg:mx-0">
                        {/* <img
                            className="h-11"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        /> */}
                        {/* <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                            <div className="relative px-3 py-1 text-sm leading-6 text-gray-500 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Anim aute id magna aliqua ad ad non deserunt sunt.{' '}
                                <a href="#" className="font-semibold text-indigo-600 whitespace-nowrap">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    Read more <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div> */}
                        <h1 className="mt-24 text-3xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                            Castana's Salon
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Deva curl specialist in Woodland Park New Jersey
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Providing superb services at facinating prices. Schedule your apointment today!
                        </p>
                        <div className="flex items-center mt-10 gap-x-6">
                            {/* <a
                                href="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get started
                            </a> */}
                            <Link to='/services' className="text-base font-semibold leading-7 text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                    <img
                        className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                        src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}
