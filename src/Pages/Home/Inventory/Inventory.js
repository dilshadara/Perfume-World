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
        fetch('http://localhost:5000/perfume')
        .then(res=>res.json())
        .then(data=>setPerfumes(data))
    } ,[]);



    return (
        <div >
            <h1>Available Perfume</h1>
            <p>total count : {perfumes.length}</p>
            <div className='inventory-container w-100'>
            {
                perfumes.map(perfume => <Perfume
                    key={perfume._id} 
                    perfume={perfume}
                    ></Perfume>)

               
           }
           </div>
          <Link to="/manageInventory" onClick={navigateManageInventory}>Manage Inventories</Link>

        </div>
    );
};

export default Inventory;