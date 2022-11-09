import React, { useContext } from 'react';
import { authUser } from '../Context/UserContext';

const Myreviews = () => {
    const { user } = useContext(authUser);

    const passEmail = () => {
        const emaiL = { email: user.email }
        console.log(emaiL)
        fetch('http://localhost:2100/myreviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(emaiL)
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }
    passEmail()

    return (
        <div >

        </div>
    );
};

export default Myreviews;