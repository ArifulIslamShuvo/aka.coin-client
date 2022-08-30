import React from 'react';

const QuickStartGuide2 = () => {
    return (
        <div className='container pb-16'>
            <div style={{ height: '444px' }} className='grid lg:grid-cols-12  gap-4 py-10'>
                <div data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className='lg:col-span-3 col-span-1 '>
                    <div style={{ backgroundColor: '#1F33D8', height:'400px' }} class="rounded-lg p-2">
                        <div class="p-3">
                            <h2 class="text-white text-centertext-2xl p-3">Akacoin Community</h2>
                            <p className='text-white'>There's something for everybody. Follow along, chat on Discord, or read up on what we’re doing.</p>
                            <div class="pt-5">
                                <button class="text-white text-sn">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className='lg:col-span-4 col-span-1 '>
                    <div style={{ backgroundColor: '#FFD456', height:'400px' }} class="rounded-lg p-2">
                        <div class="p-3">
                            <h2 class="text-neutral text-center text-2xl p-3">Become Validator</h2>
                            <p className='text-neutral'>
                                Help secure the network by
                                running decentralized infrastructure. Learn about operating a validator node.
                            </p>
                            <div class="pt-5">
                                <button class="text-white text-sn">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className='lg:col-span-5 col-span-1 '>
                    <div style={{ backgroundColor: '#1F33D8', height:'400px' }} class="rounded-lg p-2">
                        <div class="p-3">
                            <h2 class="text-white text-center text-2xl p-3">Dev. Resource</h2>
                            <p className='text-white'>Help secure the network by
                                running decentralized infrastructure. Learn about operating a validator node.</p>
                        </div>
                        <div class="pt-5">
                            <button class="text-white text-sn">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickStartGuide2;