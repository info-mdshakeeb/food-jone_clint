import React, { useContext, useEffect, useState } from 'react';
import { authUser } from '../Context/UserContext';

const Myreview = ({ myrewiew }) => {
    const { user } = useContext(authUser);
    const { _id, name, text } = myrewiew;
    const [refresh, setRefresh] = useState(false);
    const [reviews, setReviews] = useState({})

    useEffect(() => {
        fetch(`http://localhost:2100/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data.data))
    }, [reviews, user?.email])

    const heandeldelete = _id => {
        fetch(`http://localhost:2100/reviews/${_id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                setRefresh(!refresh)
                console.log(data)

            }).catch(err => (err))
    }
    return (
        <tr >
            <th onClick={() => heandeldelete(_id)} className='cursor-pointer'>X</th>
            <td>{name}</td>
            <th className=' w-64  h-10'>{text}</th>
            <td className='btn'>edit</td>
        </tr>
    );
};

export default Myreview;