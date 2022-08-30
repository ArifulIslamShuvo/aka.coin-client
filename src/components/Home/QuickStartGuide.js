import React from 'react';
import img1 from '../../components/images/img1.png'
import img2 from '../../components/images/img2.png'
import img3 from '../../components/images/img3.png'
import img5 from '../../components/images/img5.png'
import img6 from '../../components/images/img6.png'

const QuickStartGuide = () => {
    return (
        <div className='container pb-12'>
            <h2 style={{ fontSize: '48px' }} className='text-neutral font-bold text-center p-4'>Create a wallet</h2>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-3 py-5'>
                <div data-aos="fade-down-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" 
                     className='flex justify-center items-center gap-5'>
                    <div className='rounded-full bg-accent'>
                        <img src={img1} />
                    </div>
                    <div>
                        <h3 className='text-neutral text-2xl'>1. Create a wallet</h3>
                        <p className='text-para'>Create a Wallet using either a desktop computer or an mobile device</p>
                    </div>
                </div>
                <div data-aos="fade-down-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"  className='flex justify-center items-center gap-5'>
                    <div className='rounded-full bg-accent'>
                        <img src={img5} />
                    </div>
                    <div>
                        <h3 className='text-neutral text-2xl'>2. Buy ETH</h3>
                        <p className='text-para'>You can buy Ethereum (ETH) directly on MetaMask or transfer it</p>
                    </div>
                </div>
                <div data-aos="fade-up-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000" 
                     className='flex justify-center items-center gap-5'>
                    <div className='rounded-full bg-accent'>
                        <img src={img2} />
                    </div>
                    <div>
                        <h3 className='text-neutral text-2xl'>3. Connect your wallet</h3>
                        <p className='text-para'>Access your wallet to AoaSwap by clicking ‘Connect to a wallet’</p>
                    </div>
                </div>
                <div data-aos="fade-up-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"  className='flex justify-center items-center gap-5'>
                    <div className='rounded-full bg-accent'>
                        <img src={img1} />
                    </div>
                    <div>
                        <h3 className='text-neutral text-2xl'>4. Swap ETH to AKO</h3>
                        <p className='text-para'>You can start swapping as you have ETH available! Press ‘Select a token’ </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickStartGuide;