import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authUser } from '../Context/UserContext';
import AlartMessage from '../Hook/AlartMessage';
import useTitle from '../Hook/useTitile';

const Myreviews = () => {
    const { user } = useContext(authUser);
    const naigate = useNavigate();
    const { successMessage, errorMessage } = AlartMessage()
    const [myrewiews, setMyrewiews] = useState({});
    const [refresh, setRefresh] = useState(false);
    useTitle("My reviews")

    useEffect(() => {
        fetch(`https://food-zone-server-itzshakeeb.vercel.app/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `${localStorage.getItem('Login-Token')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyrewiews(data.data))
    }, [user?.email])

    const heandeldelete = _id => {
        fetch(`https://food-zone-server.vercel.app/reviews/${_id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                const remain = myrewiews.filter(or => or._id !== _id)
                setMyrewiews(remain)
                console.log(remain);
                successMessage('successFully Delete')
                setRefresh(!refresh)
            }).catch(err => errorMessage(err.message))
    }
    const heandelEdit = _id => {
        naigate(`/myreviews/edit/${_id}`)
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
                                        <td onClick={() => heandelEdit(myrewiew._id)} className='btn'>edit</td>
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