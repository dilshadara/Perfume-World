import React from 'react';
import {Button,Card} from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';


const Perfume = ({perfume}) => {
    // console.log("from perfume page", perfume);
    const {_id,name,image,price,quantity,supplier} = perfume;

    //    ,brand,price,quantity,supplier,size,
    // style={{ width: '18rem' }}
    const  {"short-description" : shortDescription} = perfume;

    const navigate=useNavigate();

    const navigateToPerfumeDetail = id =>{
        navigate(`/perfume/${id}`);

    }

    return (
        <div>
           <Card style={{ width: '18rem', border:'0px', minHeight: '630px' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body style={{ display: 'flex', flexDirection: 'column'}}>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     <small>{shortDescription}</small>
     <br></br>
     <b>Price: ${price}</b>
     <br></br>
     Quantity: {quantity}
     <br></br>
     Supplier: {supplier}
    </Card.Text>
    <Button onClick={() => navigateToPerfumeDetail(_id)} variant="primary" style={{marginTop: 'auto'}}>Stock Update</Button>
   
  </Card.Body>
</Card> 
        </div>
    );
};

export default Perfume;