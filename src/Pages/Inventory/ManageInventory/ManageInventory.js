import React,{ useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';

const ManageInventory = () => {

    const [perfumes,setPerfumes]=useState([]);

    const navigate = useNavigate();
    const navigateAddInventory = () =>{
        navigate('/addInventory');
    }

    useEffect(() =>{
        fetch('https://thawing-lake-47486.herokuapp.com/perfume')
        .then(res=>res.json())
        .then(data=>setPerfumes(data))
    } ,[]);

    const handlePerfumeDelete = (id) =>{
        const consentDelete = window.confirm('Do you really want to delete this record?');
        if(consentDelete){
            console.log('deleting with id', id);
            const url=`https://thawing-lake-47486.herokuapp.com/perfume/${id}`;

            fetch(url, {
                method:'DELETE',
            })
            .then(res => res.json())
            .then(data =>{          
                    if(data.deletedCount>0){
                        console.log('deleted',data);
                        const remaining = perfumes.filter(perfume=>perfume._id!==id);
                        setPerfumes(remaining);
                    }
                           
            })
        }
    }


    return (
        <div className="w-75 mx-auto table-responsive-sm table-responsive-md">
            <h2 className='mb-3'>Manage Inventory</h2>
              <button style={{marginBottom:'15px'}} onClick={navigateAddInventory}>Add Inventory</button> 
            <Table table striped bordered hover >
  <thead>
    <tr class="table-info">
     
      <th>Name</th>
      <th>Brand</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Supplier</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
        {
            perfumes.map(perfume => <tr key={perfume._id}>
                    <td style={{textAlign:'left'}}>{perfume.name}</td>
                    <td style={{textAlign:'center'}}>{perfume.brand}</td>
                    <td>{perfume.price}</td>
                    <td>{perfume.quantity}</td>
                    <td>{perfume.supplier}</td>
                    <td><Button onClick={() => handlePerfumeDelete(perfume._id)}>X</Button></td>
                </tr>)}
  </tbody>
</Table>
        </div>
    );
};

export default ManageInventory;