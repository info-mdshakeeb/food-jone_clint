import React from 'react';
import { Link } from 'react-router-dom';
import ServicesSection from './ServicesSection';

const Home = () => {
    return (
        <div className="">
            {/* hero section */}
            <div className="hero min-h-screen cover-full shadow-sm" style={{ backgroundImage: `url("https://s4.gifyu.com/images/Black--Yellow-Modern-Digital-Marketing-Agency-Facebook-Post-3.png")` }}>

                <div className="  text-neutral-content ">
                    <div className=" text-black md:w-screen md:pl-40 ">
                        <h1 className="mb-5 text-5xl font-bold ">The Fastest <br />
                            Delivery <br />
                            <span className='text-orange-500'>in Your City</span></h1>
                        <p className="mb-5  text-gray-500">Food Zone assures fresh fodd every time to your <br />
                            family without getting out in this pandemic..</p>
                        <Link to='/Services' className="btn btn-warning text-gray-700">Order Now</Link>
                    </div>
                </div>
            </div>
            {/* service section */}
            <div className="h-96">
                <ServicesSection />
            </div>

        </div>
    );
};

export default Home;