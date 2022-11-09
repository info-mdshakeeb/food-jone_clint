import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Home/Service';

const Services = () => {
    const services = useLoaderData();
    return (
        <div className="pb-10">
            <div className="mt-20 mb-5">
                <p className='text-2xl text-center'>My All SerVices</p>
            </div>
            <div className='md:w-4/5 md:grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-3'>
                {
                    services.data?.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;