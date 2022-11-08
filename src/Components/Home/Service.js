import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, image_url, descriptin, _id } = service
    return (
        <div className='mt-10'>
            <div className="card w-96 md:w-auto mx-auto bg-base-100 shadow-xl">
                <figure><img className=' h-60 w-full' src={image_url} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="">
                        {
                            descriptin.length > 100 ?
                                <p>{descriptin.slice(0, 100) + "....."}
                                    <Link to={`/services/${_id}`} className='text-red-500'>read more</Link></p>
                                : <p>{descriptin}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;