import React from 'react';
import {Button,Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './HotDealItem.css';

const HotDealItem = ({perfume}) => {
    const {_id,name,image,price} = perfume;

    //    ,brand,price,quantity,supplier,size,
   
    const  {"short-description" : shortDescription} = perfume;

    const navigate=useNavigate();

    const navigateToPerfumeDetail = id =>{
        navigate(`/perfume/${id}`);

    }

    return (
       <div>
           <Card style={{ width: '18rem', border:'0px', minHeight: '590px' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body style={{ display: 'flex', flexDirection: 'column'}}>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {/* <small>{shortDescription}</small> */}
     <p className='newHotPrice'><b>Price: ${price}</b></p>
     <p style={{color:'red'}}><b>New Price: ${price/2}</b></p>
    </Card.Text>
    <Button onClick={() => navigateToPerfumeDetail(_id)} variant="primary" style={{marginTop: 'auto'}}>See Details</Button>
   
  </Card.Body>
</Card> 
        </div>
    );
};

export default HotDealItem;