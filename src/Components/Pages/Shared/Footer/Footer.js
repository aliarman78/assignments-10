import React from 'react';
import {
    Col,
    Row
} from 'react-bootstrap';
import {
    BsFacebook,
} from 'react-icons/bs';
import {
    SiInstagram
} from 'react-icons/si';
import {
    MdOutlineMarkEmailUnread
} from 'react-icons/md'

import './Footer.css';

const Footer = () => {
    return (<div className='footer-bg p-5 ' >
        <Row xs={
            1
        }
            md={
                2
            } >
            <Col >
                <h5 className='fw-bold' > Category </h5>
                <div >
                    <p> Home </p> <p> Service </p> <p> Blogs </p> <p> About </p>
                </div>
            </Col>
            <Col>
                <div >
                    <BsFacebook className='ms-3 text-'
                        size={
                            40
                        }
                    /> <SiInstagram className='ms-3 '
                        size={
                            40
                        }
                    />
                    <p className='my-3' > < MdOutlineMarkEmailUnread className='mx-3' /> Contact Me</p></div> </Col> </Row> <p className='text-center text-white mt-5' > Ali Arman - Official© 2022 all rights reserved </p> </div>
    );
};

export default Footer;