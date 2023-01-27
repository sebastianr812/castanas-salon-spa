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
                        <div key={service.id} className='flex flex-col items-center justify-center w-48 space-y-16 text-3xl text-center break-words bg-black h-52 text-zinc-50'>
                            <div>
                                <h4>{service.serviceName}</h4>
                            </div>
                            <div>
                                <p>learn more</p>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ServicesPreview;