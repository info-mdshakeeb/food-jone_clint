import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hook/useTitile';
import ServicesSection from './ServicesSection';

const Home = () => {
    useTitle("Home")
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
            <div className="">
                <ServicesSection />
            </div>
            <div className="w-3/5 py-10 mx-auto">
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Total Likes</div>
                        <div className="stat-value text-primary">5.6K</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Page Views</div>
                        <div className="stat-value text-secondary">12 k</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        </div>
                        <div className="stat-value">99%</div>
                        <div className="stat-title">Order Complite</div>
                        <div className="stat-desc text-secondary">10 order remaining</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;