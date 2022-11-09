import React from 'react';

const Review = ({ review }) => {
    const { name, image, text } = review
    return (
        <div className="w-3/4 mx-auto py-2">
            <figure className="flex justify-around bg-slate-100 rounded-xl p-8  dark:bg-slate-800">
                <img className="w-10 h-10 rounded-full " src={image} alt="" />
                <div className="text-center">
                    <div>
                        <p className="text-lg font-medium">
                            “{text}”
                            <p> {name}</p>
                        </p>
                    </div>

                </div>
            </figure>
        </div>
    );
};

export default Review;