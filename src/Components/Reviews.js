import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { authUser } from '../Context/UserContext';
import Review from './Review';

const Reviews = () => {
    const { user } = useContext(authUser);
    const router = useParams()
    const [loading, setLoading] = useState(true);

    const [reviews, setReviews] = useState();
    useEffect(() => {
        fetch(`http://localhost:2100/reviews?id=${router.id}`)
            .then(res => res.json())
            .then(data => {
                setLoading(!loading);
                setReviews(data.data)
            })
    }, [router.id, loading])

    return (
        <div className="">
            {
                reviews?.map(review => <Review key={review._id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;