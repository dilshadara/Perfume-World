import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Button,Card} from 'react-bootstrap';

const NewArrivalItem = ({perfume}) => {

    const {_id,name,image,price} = perfume;

    //    ,brand,price,quantity,supplier,size,
   
    const  {"short-description" : shortDescription} = perfume;

    const navigate=useNavigate();

    const navigateToPerfumeDetail = id =>{
        navigate(`/perfume/${id}`);

    }

    return (
        <div>
           <Card style={{ width: '18rem', border:'0px', minHeight: '600px' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body style={{ display: 'flex', flexDirection: 'column'}}>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     <small>{shortDescription}</small>
     <br></br>
     <b>Price: ${price}</b>
     
    </Card.Text>
    <Button onClick={() => navigateToPerfumeDetail(_id)} variant="primary" style={{marginTop: 'auto'}}>See Details</Button>
   
  </Card.Body>
</Card> 
        </div>
    );
};

export default NewArrivalItem;