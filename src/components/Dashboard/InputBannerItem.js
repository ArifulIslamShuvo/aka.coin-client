import React from 'react';
import {toast } from 'react-toastify';

const InputBannerItem = () => {
    const handleBannerItem = (event) =>{
        event.preventDefault();
        const title = event.target.title.value;
        const img = event.target.img.value;
        const paragraph = event.target.paragraph.value;

        const bannerItem = {title,img,paragraph}
        console.log(bannerItem);

        const url = `http://localhost:5000/banner-item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bannerItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success(" Success Added");
                }
            })
        }
    return (
        <div>
            <div className="hero min-h-screen overflow-hidden">
                <div className="hero-content p-12 bg-green-300 rounded-2xl">
                    <div className="card max-w-md shadow-2xl rounded-2xl">
                        <form onSubmit={handleBannerItem}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-center text-2xl font-bold text-neutral px-28">Input Banner Item</span>
                                    </label>
                                    <input type="text" name='title' placeholder="Enter Banner Title" required className="input input-bordered input-secondary w-full max-w-lg mb-2" />
                                    <input type="text" name='img' placeholder="Image URL" required className="input input-bordered input-secondary w-full max-w-lg mb-2" />
                                    <textarea type="text" name='paragraph' placeholder='Enter Banner Paragraph' className="input input-bordered input-secondary w-full max-w-lg" />
                                    <button type='submit' className="btn btn-primary w-full  m2-2">Submit</button>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputBannerItem;