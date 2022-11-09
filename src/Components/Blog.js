import React from 'react';
import useTitle from '../Hook/useTitile';

const Blog = () => {
    useTitle("Blog")
    return (
        <div className=''>
            <div className=" shadow-xl mt-5 p-4 m-5 md:w-3/5 md:mx-auto">
                <p ><span className='text-2xl mx-2'> Q.</span>Difference between SQL and NoSQL</p>
                <p className=' text-gray-500'><span className='text-2xl mx-2'> A.</span>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            <div className=" shadow-xl mt-5 m-5 p-4 md:w-3/5 md:mx-auto">
                <p ><span className='text-2xl mx-2'> Q.</span>What is JWT, and how does it work?</p>
                <p className=' text-gray-500'><span className='text-2xl mx-2'> A.</span>What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
                </p>
            </div>
            <div className=" shadow-xl mt-5 m-5 p-4 md:w-3/5 md:mx-auto">
                <p ><span className='text-2xl mx-2'> Q.</span>What is the difference between javascript and NodeJS?</p>
                <p className=' text-gray-500'><span className='text-2xl mx-2'> A.</span>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
            <div className=" shadow-xl mt-5 p-4 m-5 md:w-3/5 md:mx-auto">
                <p  ><span className='text-2xl mx-2'> Q.</span>How does NodeJS handle multiple requests at the same time?</p>
                <p className=' text-gray-500'><span className='text-2xl mx-2'> A.</span>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                </p>
            </div>
        </div>
    );
};

export default Blog;