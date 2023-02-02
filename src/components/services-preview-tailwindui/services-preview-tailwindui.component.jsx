import { ScissorsIcon, PaintBrushIcon, BeakerIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Cutting & Styling',
        description:
            'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
        href: '/services',
        icon: ScissorsIcon,
    },
    {
        name: 'Color & Highlights',
        description:
            'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
        href: '/services',
        icon: PaintBrushIcon,
    },
    {
        name: 'Hair Treatments',
        description:
            'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
        href: '/services',
        icon: BeakerIcon,
    },
]

export default function ServicesPreviewTailwindUi() {
    return (
        <div className="py-24 bg-white sm:py-32">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="flex flex-col items-center justify-center max-w-2xl mx-auto ">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Salon Services
                    </h2>

                </div>
                <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col border-r-2 border-gray-400">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="flex items-center justify-center w-10 h-10 mb-6 bg-indigo-600 rounded-lg">
                                        <feature.icon className="w-6 h-6 text-white " aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="flex flex-col flex-auto mt-1 text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>
                                    <p className="mt-6">
                                        <a href={feature.href} className="text-base font-semibold leading-7 text-indigo-600">
                                            Learn more <span aria-hidden="true">→</span>
                                        </a>
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
