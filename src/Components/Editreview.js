import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { authUser } from '../Context/UserContext';
import useTitle from '../Hook/useTitile';

const Editreview = () => {
    const { user } = useContext(authUser);
    const navigate = useNavigate();
    const router = useParams();
    const [myrewiew, setMyrewiew] = useState({});
    useTitle("EDIT reviews")
    const { _id } = router;

    useEffect(() => {
        fetch(`https://food-zone-server.vercel.app/review/${_id}`)
            .then(res => res.json())
            .then(data => setMyrewiew(data.data))
    }, [user?.email, _id])

    const hendelform = e => {
        e.preventDefault();
        const rewiew = {
            name: e.target.name.value,
            image: e.target.image.value,
            text: e.target.text.value
        }
        fetch(`https://food-zone-server.vercel.app/reviews/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(rewiew)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    navigate("/myreviews")
                } else {
                    console.log(data.error)
                }
            })
            .catch(err => console.log(err.message))

    }

    return (
        <div className="py-32  min-h-screen w-full">
            <div className=" p-10 md:w-3/4 lg:w-1/2 mx-auto">
                <form onSubmit={hendelform}>
                    <div className="flex items-center mb-5">
                        <label className="inline-block w-40 mr-6 text-right font-bold ">
                            Rewier Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            defaultValue={myrewiew?.name}
                            className="flex-1 py-2 border-b-2 focus:border-yellow-400  placeholder-gray-400 outline-none"
                        />
                    </div>

                    <div className="flex items-center mb-5">
                        <label className="inline-block w-40 mr-6 text-right font-bold ">
                            Price
                        </label>
                        <input
                            type="text"
                            name="text"
                            placeholder="text"
                            defaultValue={myrewiew?.text}
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400  placeholder-gray-400 outline-none"
                        />
                    </div>

                    <div className="flex items-center mb-10">
                        <label className="inline-block w-40 mr-6 text-right font-bold ">
                            Image
                        </label>
                        <input
                            type="text"
                            name="image"
                            placeholder="url"
                            defaultValue={myrewiew?.image}
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-red-400  placeholder-gray-400 outline-none"
                        />
                    </div>

                    <div className="text-right">
                        <button className="py-3 px-8 bg-yellow-400 text-white font-bold">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Editreview;