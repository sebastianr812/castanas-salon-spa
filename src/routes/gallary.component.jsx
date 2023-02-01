import image1 from '../assets/castanas-salon-gallary/image-1.jpg';
import image2 from '../assets/castanas-salon-gallary/image-2.jpg';
import image3 from '../assets/castanas-salon-gallary/image-3.jpg';
import image4 from '../assets/castanas-salon-gallary/image-4.jpg';
import image5 from '../assets/castanas-salon-gallary/image-5.jpg';
import image6 from '../assets/castanas-salon-gallary/image-6.jpg';
import image7 from '../assets/castanas-salon-gallary/image-7.jpg';
import image8 from '../assets/castanas-salon-gallary/image-8.jpg';
import image9 from '../assets/castanas-salon-gallary/image-9.jpg';
import FooterTailwindUi from '../components/footer-tailwindui/footer-tailwindui.component';

const files = [
    {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            image1,
    },
    {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            image2,
    },
    {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            image3,
    },
    {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            image4,
    },
    {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            image5,
    },
    {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            image6,
    },
    {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            image7,
    },
    {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            image8,
    },
    {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            image9
    },
]



export default function Gallary() {
    return (
        <>

            <ul role="list" className="grid grid-cols-2 mt-10 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                {files.map((file) => (
                    <li key={file.source} className="relative">
                        <div className="block w-full overflow-hidden bg-gray-100 rounded-lg group aspect-w-10 aspect-h-7 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                            <img src={file.source} alt="gallary image" className="object-cover pointer-events-none group-hover:opacity-75" />
                            <button type="button" className="absolute inset-0 focus:outline-none">
                                <span className="sr-only">View details for {file.title}</span>
                            </button>
                        </div>

                    </li>
                ))}
            </ul>
            <FooterTailwindUi />
        </>
    )
}
