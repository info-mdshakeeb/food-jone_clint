import React, { useContext } from 'react';
import { authUser } from '../Context/UserContext';

const Myreviews = () => {
    const { user } = useContext(authUser)
    return (
        <div>

        </div>
    );
};

export default Myreviews;