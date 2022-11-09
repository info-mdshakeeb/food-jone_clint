import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';




const Service = ({ service }) => {
    const { name, image_url, descriptin, _id } = service
    return (
        <div className='mt-10'>
            <div className="card w-96 md:w-auto mx-auto bg-base-100 shadow-xl">
                <figure>
                    <PhotoProvider>
                        <PhotoView src={image_url} >
                            <img className=' h-60 w-full' src={image_url} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
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