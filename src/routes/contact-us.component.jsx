import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import FooterTailwindUi from '../components/footer-tailwindui/footer-tailwindui.component';
import picture from '../assets/woman-bike-unsplash.jpg';
import { useEffect } from 'react';
import { useLoadScript } from "@react-google-maps/api";
import Spinner from '../components/spinner/spinner.component';
import Map from '../components/google-maps/map.component';


export default function ContactUs() {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY

    });

    if (!isLoaded) return <div>Loading...</div>

    return (
        <>
            <div >
                <Map />
            </div>
            <div className="bg-white">
                <div className="px-6 py-16 mx-auto max-w-7xl lg:px-8">
                    <div className="items-center max-w-lg mx-auto md:grid md:max-w-none md:grid-cols-2 md:gap-8">
                        <div>
                            {/* <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Sales Support</h2>
                            <div className="mt-3">
                                <p className="text-lg text-gray-500">
                                    Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor
                                    lacus arcu.
                                </p>
                            </div>
                            <div className="mt-9">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <PhoneIcon className="w-6 h-6 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>+1 (555) 123 4567</p>
                                    <p className="mt-1">Mon-serFri 8am to 6pm PST</p>
                                    </div>
                                </div>
                                <div className="flex mt-6">
                                    <div className="flex-shrink-0">
                                        <EnvelopeIcon className="w-6 h-6 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>support@example.com</p>
                                    </div>
                                </div>
                            </div> */}
                            <img src={picture} className='object-fill' alt='woman on motor bike' />
                        </div>
                        <div className="mt-12 sm:mt-16 md:mt-0">
                            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Contact Us</h2>
                            <div className="mt-3">
                                <p className="text-lg text-gray-500">
                                    Walk-ins are welcome but we do recommend that you make an appointment. We look forward to seeing you!
                                </p>
                            </div>
                            <div className="mt-9">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <PhoneIcon className="w-6 h-6 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>+1 (973) 785 8300</p>
                                        <p className="mt-1">Monday, Wednesday, Sunday - Closed</p>
                                        <p className="mt-1">All other days - 8am to 6pm EST</p>
                                    </div>
                                </div>
                                <div className="flex mt-6">
                                    <div className="flex-shrink-0">
                                        <EnvelopeIcon className="w-6 h-6 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3 text-base text-gray-500">
                                        <p>support@castanas_salon.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterTailwindUi />
        </>
    )
}




