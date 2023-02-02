import FooterTailwindUi from "../components/footer-tailwindui/footer-tailwindui.component";
import ServicesHeaderTailwindUi from '../components/services-header/services-header-tailwindui.component';

const serviceCategories = [
    {
        id: 1,
        categoryName: 'Cut & Style',
        categoryServices: [
            {

                serviceName: 'haircut',
                servicePrice: '78 - 109'
            },
            {

                serviceName: 'barber cut',
                servicePrice: '68 - 98'
            },
            {

                serviceName: 'child haircut',
                servicePrice: '46 - 76'
            },
            {

                serviceName: 'shampoo & blowout',
                servicePrice: '53 - 64'
            },

            {

                serviceName: 'updo',
                servicePrice: '116 - 146'
            },
            {

                serviceName: 'braiding',
                servicePrice: '55 - 100'
            },
        ]
    },
    {
        id: 2,
        categoryName: 'Color & Highlights',
        categoryServices: [
            {

                serviceName: 'single process',
                servicePrice: '96 - 126'
            },
            {

                serviceName: 'double process',
                servicePrice: '132 - 164'
            },
            {

                serviceName: 'patial highlight',
                servicePrice: '190 - 250'
            },
            {

                serviceName: 'full highlight',
                servicePrice: '190 - 250'
            },
            {

                serviceName: 'ombre + gloss',
                servicePrice: '210 - 270'
            },
            {

                serviceName: 'balayage + gloss',
                servicePrice: '235 - 295'
            },
            {

                serviceName: 'foilayge + gloss',
                servicePrice: '260 - 320'
            },
        ]
    },
    {
        id: 3,
        categoryName: 'Hair Treatments',
        categoryServices: [
            {
                serviceName: 'keratin express blowout',
                servicePrice: '230 - 330'
            },
            {
                serviceName: 'keratin strightening',
                servicePrice: '410 - 730'
            },
            {
                serviceName: 'perm-body wave',
                servicePrice: '230 - 380'
            }
        ]
    }
]



export default function Services() {
    return (
        <>
            <ServicesHeaderTailwindUi />
            <div className="grid grid-cols-1 gap-4 mx-10 overflow-x-hidden lg:grid-cols-2">
                {serviceCategories.map((category) => (
                    <div key={category.id} className="px-10 py-10 mt-2.5 bg-purple-600 border-purple-600 rounded-md ">
                        <div className="space-y-3">
                            <h3 className="text-4xl font-bold text-left">{category.categoryName}</h3>
                            {category.categoryServices.map((item) => (
                                <div key={item.serviceName} className="px-4 py-4 overflow-hidden shadow bg-amber-400 sm:rounded-md sm:px-6 ">
                                    {/* Your content */}
                                    <div className="flex items-center justify-between space-x-2 text-lg font-light text-left uppercase whitespace-normal align-bottom lg:whitespace-nowrap">
                                        <div className="order-1 w-auto"><div>{item.serviceName}</div></div>
                                        <div className="order-2 w-2/4 h-10 border-b border-black"></div>
                                        <div className="relative order-3 w-auto h-10 lg:w-1/4 whitespace-nowrap ">
                                            <h3 className="mt-3 ">${item.servicePrice}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}






            </div>

            <FooterTailwindUi />
        </>

    )
}





