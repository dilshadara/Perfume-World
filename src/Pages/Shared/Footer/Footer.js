import React from 'react';
import './Footer.css';

const Footer = () => {

    const date= new Date();
    let year = date.getFullYear();

    return (
        <div className='footer w-100 mt-5'>
            <div>
                <h2>NO#1 wholesaler of World's famous brand perfumes
                    
                </h2>
                <p style={{textAlign:'left'}}> <small>You can trust us</small></p>
            </div>
            <div>
                <p>&copy; Perfume World {year}</p>
                <p style={{textAlign:'right'}}>All rights reserved</p>
            </div>
            
        </div>
    );
};

export default Footer;