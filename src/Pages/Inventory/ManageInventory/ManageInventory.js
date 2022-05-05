import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {

    const navigate = useNavigate();
    const navigateAddInventory = () =>{
        navigate('/addInventory');
    }


    return (
        <div>
           <button onClick={navigateAddInventory}>Add Inventory</button> 
        </div>
    );
};

export default ManageInventory;