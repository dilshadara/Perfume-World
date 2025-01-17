import React,{ useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import deleteIcon from '../../../images/delete.png';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [perfumes,setPerfumes]=useState([]);
    // const [email,setEmail]=useState('');
    let showTable= false;
    const navigate = useNavigate();
    const navigateAddInventory = () =>{
        navigate('/addInventory');
    }

    useEffect(() =>{
        // setEmail(user.email);
        // console.log(email);
        const email=user.email;
        const url=`https://thawing-lake-47486.herokuapp.com/myItems?email=${email}`;
        console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPerfumes(data))
    } ,[user]);

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
          <h2 className='mb-3'>My Items</h2>
        <button style={{marginBottom:'15px'}} onClick={navigateAddInventory}>Add Inventory</button> 
        {
         
            (perfumes.length===0) && <p>No data found</p>
        }
        {
            (perfumes.length===0) || 
            <Table table striped bordered hover >
               <thead>
               <tr className="table-info">
   
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
                           <td><Button onClick={() => handlePerfumeDelete(perfume._id)}><img src={deleteIcon} alt="Delete"></img></Button></td>
                       </tr>)}
               </tbody>
           </Table>
        }
            
               
           
          
         
       
        
  </div>
    );
};

export default MyItems;