import { Link } from "react-router-dom";

const ServicesPreview = () => {
    const servicesProvided = [
        {
            serviceName: 'Cutting & Styling',
            id: 1

        },
        {
            serviceName: 'Color & Highlights',
            id: 2
        },
        {
            serviceName: 'Hair Treatments',
            id: 3
        }
    ]


    return (
        <div className="flex flex-col items-center justify-center w-full h-[350px] px-5 py-10 my-4 space-y-4 border-4 border-black border-solid bg-emerald-300 border-x-0">
            <div className="h-12 text-center bg-indigo-400 ">
                <h4>Castana's Salon Services</h4>
            </div>
            <div className="flex flex-row w-full justify-evenly" >
                {
                    servicesProvided.map((service) => (
                        <div key={service.id} className='flex flex-col items-center justify-center text-3xl text-center break-words bg-slate-300 w-80 h-52 text-zinc-50'>
                            <div className="flex items-center justify-center text-black h-3/5">
                                <h4>{service.serviceName}</h4>
                            </div>
                            <div className="flex items-center justify-center text-gray-800 text-md h-1/5">
                                <Link to='/services'>Learn More</Link>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ServicesPreview;