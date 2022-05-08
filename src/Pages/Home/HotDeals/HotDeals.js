import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HotDealItem from '../HotDealItem/HotDealItem';

const HotDeals = () => {
    const [perfumes,setPerfumes]=useState([]);

    const navigate= useNavigate();
    const navigateManageInventory = () =>{
        navigate('/manageInventory');
    }


    useEffect(() =>{
        fetch('https://thawing-lake-47486.herokuapp.com/perfume')
        .then(res=>res.json())
        .then(data=>setPerfumes(data))
    } ,[]);

    let perfumeTop3=perfumes.slice(0,3);

    return (
        <div id="perfumes" >
            <h1 className='mb-5'>Hot Deals</h1>
            <div className='d-flex justify-content-center w-100'>
            {/* <p>total count : {perfumes.length}</p> */}
            <div className='inventory-container w-75'>
            {
                perfumeTop3.map(perfume => <HotDealItem
                    key={perfume._id} 
                    perfume={perfume}
                    ></HotDealItem>)

               
           }
           </div>
           </div>
          <Link to="/manageInventory" onClick={navigateManageInventory}>Manage Inventories</Link>

        </div>
    );
};

export default HotDeals;