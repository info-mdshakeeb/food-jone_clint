import React, { useContext, useEffect, useState } from 'react';
import { authUser } from '../Context/UserContext';
import useTitle from '../Hook/useTitile';

const Myreviews = () => {
    const { user } = useContext(authUser);
    const [myrewiews, setMyrewiews] = useState({});
    useTitle("My reviews")
    useEffect(() => {
        fetch(`http://localhost:2100/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyrewiews(data.data))
    }, [user?.email])
    return (
        <div className='w-1/2 mx-auto mt-10' >
            {myrewiews.length ?
                <div className="">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myrewiews?.map(myrewiew =>
                                    <tr key={myrewiew._id}>
                                        <th>X</th>
                                        <td>{myrewiew.name}</td>
                                        <td>{myrewiew.text}</td>
                                        <td>edit</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div> :
                <p className=' mt-40 text-center'>No reviews were added </p>

            }
        </div>
    );
};

export default Myreviews;