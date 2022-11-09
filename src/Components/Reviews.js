import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    // const data = useLoaderData();
    // const { reviews } = data;

    const [reviews, setReviews] = useState();
    useEffect(() => {
        fetch('http://localhost:2100/reviews')
            .then(res => res.json())
            .then(data => setReviews(data.data))
    }, [reviews])

    return (
        <div className="">
            {
                reviews?.map(review => <Review key={review._id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;