import React, { useContext, useEffect, useState } from 'react';
import { authUser } from '../Context/UserContext';
import useTitle from '../Hook/useTitile';

const Myreviews = () => {
    const { user } = useContext(authUser);
    const [myrewiews, setMyrewiews] = useState({});
    const [refresh, setRefresh] = useState(false);
    useTitle("My reviews")

    useEffect(() => {
        fetch(`http://localhost:2100/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyrewiews(data.data))
    }, [user?.email])

    const heandeldelete = _id => {
        fetch(`http://localhost:2100/reviews/${_id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                const remain = myrewiews.filter(or => or._id !== _id)
                setMyrewiews(remain)
                console.log(remain);

                setRefresh(!refresh)

            }).catch(err => (err))
    }

    return (
        <div className='md:w-3/5 mx-auto' >
            {myrewiews.length ?
                <div className="">
                    <div className=" p-3 md:p-0 w-full flex items-center h-screen overflow-x-scroll">
                        <table className="table table-zebra w-full">
                            <thead>
                                <tr>
                                    <th>Delete</th>
                                    <th>Name</th>
                                    <th>Commnnet</th>
                                    <th>Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myrewiews?.map(myrewiew =>
                                    <tr key={myrewiew._id}>
                                        <th onClick={() => heandeldelete(myrewiew._id)} className='cursor-pointer'>X</th>
                                        <td>{myrewiew.name}</td>
                                        <th className=' w-64  h-10'>{myrewiew.text}</th>
                                        <td className='btn'>edit</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div> :
                <p className=' my-40 text-center'>No reviews were added </p>
            }
        </div>
    );
};

export default Myreviews;