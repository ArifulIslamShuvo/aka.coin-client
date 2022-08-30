import React from 'react';
import { BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";
const Footer = () => {
    return (
        <div data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className='border-t-4 border-accent mt-12'>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div className='text-start'>
                    <h1 style={{ fontSize: "22px" }} className="text-start"><span style={{ color: '#1F33D8' }} className='font-bold'> AKA</span><span className='text-neutral'>.COIN</span></h1>
                    <p>Living Ecosystem
                        <br /> Decentralized Token</p>
                    <div className='flex justify-center items-center gap-3'>
                        <BsGithub />
                        <BsFacebook />
                        <BsInstagram />
                    </div>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <h6 className='text-center text-sm'>copy right © 2002</h6>
        </div>
    );
};

export default Footer;