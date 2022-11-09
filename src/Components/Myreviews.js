import React, { useContext, useState } from 'react';
import { authUser } from '../Context/UserContext';
import Myrewiew from './Myrewiew';

const Myreviews = () => {
    const { user } = useContext(authUser);
    const [myrewiews, setMyrewiews] = useState([]);

    const emaiL = { email: user.email }
    fetch('http://localhost:2100/myreviews', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(emaiL)
    })
        .then(res => res.json())
        .then(result => setMyrewiews(result.data))


    return (
        <div className='w-1/2 mx-auto mt-10' >
            {myrewiews?.map(myrewiew =>
                <Myrewiew key={myrewiew._id} myrewiew={myrewiew} ></Myrewiew>)}
        </div>
    );
};

export default Myreviews;