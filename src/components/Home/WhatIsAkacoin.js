import React from 'react';
import img1 from '../../components/images/img4.png'
import { AiOutlineArrowRight } from "react-icons/ai";
import ReactPlayer from 'react-player'

const WhatIsAkacoin = () => {
    return (
        <div className='container'>
            <h2 style={{ fontSize: '48px' }} className='text-neutral font-bold text-center p-4'>What Is Akacoin?</h2>
            <div data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" 
                className='flex lg:flex-row flex-col items-center gap-10 pb-5'>
                <div>
                    <h2 style={{ fontSize: '35px' }} className='text-neutral'>The fastest growing and community friendly</h2>
                </div>
                <div>
                    <p style={{ color: '#5B5D6D' }}>Akacoin is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with thousands of projects spanning DeFi, NFTs, Web3 and more.
                    </p>
                    <button className='text-primary flex justify-center items-center gap-2'>Explore Ecosystem <AiOutlineArrowRight /></button>
                </div>
            </div>


            <div className='grid lg:grid-cols-3 gap-4 py-5'>
                <div data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    className='lg:col-span-1 grid-col-span-1  bg-accent rounded-xl shadow-xl'>
                    <img src={img1} className="w-96" alt='' />
                </div>
                <div data-aos="fade-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                     className='hidden lg:block lg:col-span-2 grid-col-span-1 ml-5'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                </div>
            </div>
        </div>
    );
};

export default WhatIsAkacoin;