import React from 'react';
import {Button,Card} from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';


const Perfume = ({perfume}) => {
    console.log("from perfume page", perfume);
    const {_id,name,image} = perfume;

    //    brand,price,quantity,supplier,size,
    // style={{ width: '18rem' }}
    const  {"short-description" : shortDescription} = perfume;

    const navigate=useNavigate();

    const navigateToPerfumeDetail = id =>{
        navigate(`/perfume/${id}`);

    }

    

    return (
        <div>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {shortDescription}
    </Card.Text>
    <Button onClick={() => navigateToPerfumeDetail(_id)} variant="primary">Stock Update</Button>
   
  </Card.Body>
</Card> 
        </div>
    );
};

export default Perfume;