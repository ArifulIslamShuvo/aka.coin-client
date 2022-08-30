import React from 'react';
import img3 from '../../components/images/img3.png'
import { AiFillGithub } from "react-icons/ai";


const Banner = () => {
    return (
        <div style={{ background: '#F4F5FA' }}>
            <div className="hero-content flex-col lg:flex-row-reverse container py-5">
                <img data-aos="fade-down-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" 
                    src={img3} className="w-[70%]" alt='' />
                <div
                    data-aos="fade-down-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    className='w'>
                    <h1 style={{ fontSize: "22px" }} className="text-start"><span className='text-neutral'>Introducing</span><span style={{ color: '#1F33D8' }}> AKA</span><span className='text-accent'>COIN</span></h1>
                    <h1 className="text-start text-neutral" style={{ fontSize: '50px' }}>Living Ecosystem
                        Decentralized Token</h1>
                    <p className='text-start' style={{ color: '#5B5D6D;' }}>
                        Akacoin is a open source peer-to-peer digital currency,community-run technology that supports cryptocurrencies and thousands of decentralized applications.
                    </p>
                    <div className='flex gap-3'>
                        <button style={{ backgroundColor: '#1F33D8' }} className='py-2 px-3 rounded-3xl text-white'>Get Started</button>
                        <button className='bg-white py-2 px-3 rounded-3xl flex justify-center items-center gap-2'>
                            <AiFillGithub />
                            <span className='text-accent-500'> Source</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;