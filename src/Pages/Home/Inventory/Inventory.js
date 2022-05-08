import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Perfume from '../Perfume/Perfume';
import './Inventory.css';


const Inventory = () => {
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



    return (
        <div id="perfumes" >
            <h1 className='mb-5'>All Products</h1>
            <div className='d-flex justify-content-center w-100'>
            {/* <p>total count : {perfumes.length}</p> */}
            <div className='inventory-container w-75'>
            {
                perfumes.map(perfume => <Perfume
                    key={perfume._id} 
                    perfume={perfume}
                    ></Perfume>)

               
           }
           </div>
           </div>
          <Link to="/manageInventory" onClick={navigateManageInventory}>Manage Inventories</Link>

        </div>
    );
};

export default Inventory;