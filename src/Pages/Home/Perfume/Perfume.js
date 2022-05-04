import React from 'react';
import {Button,Card} from 'react-bootstrap';


const Perfume = ({perfume}) => {
    console.log("from perfume page", perfume);
    const {name,image} = perfume;

    //    brand,price,quantity,supplier,size,
    // style={{ width: '18rem' }}
    const  {"short-description" : shortDescription} = perfume;

    return (
        <div>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {shortDescription}
    </Card.Text>
    <Button variant="primary">Stock Update</Button>
  </Card.Body>
</Card> 
        </div>
    );
};

export default Perfume;