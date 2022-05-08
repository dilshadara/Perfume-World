import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
// import { useForm } from "react-hook-form";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const InventoryDetail = () => {
    const {perfumeId}= useParams();
    const [perfume,setPerfume]=useState({});

    const [perfumeQuantity,setPerfumeQuantity]=useState(0);

    const navigate=useNavigate();
    const navigateManageInventory = () =>{
        navigate('/manageInventory');
    }
    

    useEffect( ()=>{
        const url=`https://thawing-lake-47486.herokuapp.com/perfume/${perfumeId}`;
        // console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPerfume(data))

    },[perfumeQuantity]);


    const handleStockUpdateByOne = (event) =>{
        event.preventDefault();
      
        const quantity=perfume.quantity -1;
        const updatedQuantity={quantity};
       
        const url=`https://thawing-lake-47486.herokuapp.com/perfume/${perfumeId}`;

        fetch(url, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
        .then(res => res.json())
        .then(data =>{          
            setPerfumeQuantity(quantity);            
            console.log('success',data);
            alert('quantity updated successfully');            
        })
    }

    const handleRestock = (event) =>{
        event.preventDefault();
        const newStockQuantity=event.target.newStockInput.value;
        // console.log(newStockQuantity);
        const quantity= parseInt(newStockQuantity)+parseInt(perfume.quantity);
        // console.log(updatedNewStockQuantity);
        const updatedQuantity={quantity};
        console.log(updatedQuantity);

        const url=`https://thawing-lake-47486.herokuapp.com/perfume/${perfumeId}`;
        console.log(url);

        fetch(url, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
        .then(res => res.json())
        .then(data =>{          
            setPerfumeQuantity(quantity);            
            console.log('success',data);
            alert('quantity updated successfully');            
        })
    }
    
    return (
        <div>
            <Form onSubmit={handleStockUpdateByOne}>
                <Container>
                    <Row>
                        <Col ><Form.Label>ID</Form.Label></Col>
                        <Col>  
                            <Form.Label>{perfume._id}</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col><Form.Label>Perfume Name</Form.Label></Col>
                        <Col>
                           
                            <Form.Label>{perfume.name}</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col><Form.Label>Description</Form.Label></Col>
                        <Col>
                            <Form.Label>{perfume.description}</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col><Form.Label>Quantity</Form.Label></Col>
                        <Col>
                            <Form.Label id="stockQuantity" >{perfume.quantity}</Form.Label>
                        </Col>
                    </Row>
                </Container>
                <Button  type="submit" >Delivered</Button>
            </Form>

            <Form onSubmit={handleRestock}>
                <Form.Control type="number" name="newStockInput" required placeholder="Enter new stock" />
                
                <Button variant="primary" type="submit">
                Restock the item
                </Button>
            </Form>

            <Link to='/manageInventory' onClick={navigateManageInventory}>Manage Inventories</Link>
        </div>
    );
};

export default InventoryDetail;
