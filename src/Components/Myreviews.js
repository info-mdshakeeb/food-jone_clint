import React, { useContext, useEffect, useState } from 'react';
import { authUser } from '../Context/UserContext';
import useTitle from '../Hook/useTitile';
import Myrewiew from './Myrewiew';

const Myreviews = () => {
    const { user } = useContext(authUser);
    const [myrewiews, setMyrewiews] = useState({});
    useTitle("My reviews")
    useEffect(() => {
        fetch(`http://localhost:2100/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyrewiews(data.data))
    }, [user?.email])
    console.log(myrewiews)
    return (
        <div className='w-1/2 mx-auto mt-10' >
            {myrewiews.length ?
                <div className="">
                    {myrewiews?.map(myrewiew =>
                        <Myrewiew key={myrewiew._id} myrewiew={myrewiew} ></Myrewiew>)}
                </div> :
                <p className=' mt-40 text-center'>No reviews were added </p>

            }
        </div>
    );
};

export default Myreviews;