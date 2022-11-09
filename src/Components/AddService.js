import React from 'react';
import AlartMessage from '../Hook/AlartMessage';

const AddService = () => {
    const { successMessage } = AlartMessage()
    const heandelRegister = e => {
        e.preventDefault()
        const form = e.target;
        const price = form.price.value;
        const description = form.description.value;
        const servicename = form.servicename.value;
        const url = form.photourl.value;
        const service = {
            image_url: url,
            name: servicename,
            price: price,
            descriptin: description

        }
        form.reset()


        fetch('http://localhost:2100/addservices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(result => successMessage('added successfully'))
    }
    return (
        <form onSubmit={heandelRegister} className="mt-20 h-screen ">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <p>Give All the nessesarry information for add Services </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input type="text" placeholder="service Name" name='servicename' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="url" name='photourl' className="input input-bordered" required />
                        </div>
                        <div className="form-control  mb-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Price" name='price' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" placeholder="About producd" name='description' required></textarea>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddService;