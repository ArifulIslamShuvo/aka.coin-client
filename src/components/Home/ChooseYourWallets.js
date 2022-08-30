import React from 'react';

import { AiOutlineArrowRight, AiOutlineAntDesign, AiOutlineMobile,AiFillGithub } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";

const ChooseYourWallets = () => {
    return (
        <div className='container'>
            <h2 style={{ fontSize: '48px' }} className='text-neutral font-bold text-center p-4'>Choose Your Wallets?</h2>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-3 py-5'>
                <div data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                 style={{ backgroundColor: '#1F33D8' }} class="rounded-lg p-2">
                    <div class="p-3">
                        <h2 class="text-white text-center flex justify-center items-center gap-2 text-2xl p-3"><AiOutlineAntDesign />AkaWallet</h2>
                        <p className='text-white'>Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide</p>
                        <div className='flex items-center gap-2 pb-10 text-white'>
                            <AiOutlineMobile />
                            <AiFillGithub />
                            <TbWorld />
                        </div>
                        <div class="">
                            <button class="text-white flex justify-center items-center gap-2">Choose Wallet<AiOutlineArrowRight /></button>
                        </div>
                    </div>
                </div>
                {/* ------------------ */}
                <div data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                 style={{ backgroundColor: '#FFD456' }} class="rounded-lg p-2">
                    <div class="p-3">
                        <h2 class=" text-neutral text-center flex justify-center items-center gap-2 text-2xl p-3"><AiOutlineAntDesign /> AkaSafe</h2>
                        <p className='text-neutral'>AkaSafe wallet is a secure, decentralized, easy-to-use, and free application to manage more than 10,000 cryptocurrencies.</p>
                        <div className='flex items-center gap-2 pb-10 text-neutral'>
                            <AiOutlineMobile />
                            <AiFillGithub />
                            <TbWorld />
                        </div>
                        <div className=''>
                            <button class="text-white flex justify-center items-center gap-2">Choose Wallet<AiOutlineArrowRight /></button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                style={{ backgroundColor: '#1F33D8' }} class="rounded-lg p-2">
                    <div class="p-3">
                        <h2 class="text-white text-center flex justify-center items-center gap-2 text-2xl p-3"><AiOutlineAntDesign /> AkaMask</h2>
                        <p className='text-white'>AkaMask is a decentralized multi-chain digital wallet, dedicated to providing safe and convenient one-stop digital asset management services to users around the world.</p>
                        <div className='flex items-center gap-2 pb-10 text-white'>
                            <AiOutlineMobile />
                            <AiFillGithub />
                            <TbWorld />
                        </div>
                        <div class="">
                            <button class="text-white flex justify-center items-center gap-2">Choose Wallet<AiOutlineArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ChooseYourWallets;