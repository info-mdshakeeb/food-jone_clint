import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from './Home/Review';

const Reviews = () => {
    const data = useLoaderData();
    const { reviews } = data

    return (
        <div className="">
            {
                reviews.map(review => <Review key={reviews._id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;