import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useForm } from "react-hook-form";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const InventoryDetail = () => {
    const {perfumeId}= useParams();
    const [perfume,setPerfume]=useState({});

    const [perfumeQuantity,setPerfumeQuantity]=useState(0);
    

    useEffect( ()=>{
        const url=`http://localhost:5000/perfume/${perfumeId}`;
        // console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPerfume(data))

    },[perfumeQuantity]);

    // const [quantityUpdate,setQuantityUpdate]=useState(0);

    const handleStockUpdateByOne = (event) =>{
        event.preventDefault();
        // console.log("initial quantity # ", quantity, "perfume-Quantity #", perfume.quantity);
        // const quantityNew=perfume.quantity-1;
        // console.log("quantityNew # ", quantityNew);
        // setQuantity(quantityNew); 
        // console.log("after decreasing # " ,quantity);
        const quantity=perfume.quantity -1;
        // setQuantityUpdate(quantity);
        // const name="ABC";

        const updatedQuantity={quantity};
        // console.log(updatedQuantity);
        const url=`http://localhost:5000/perfume/${perfumeId}`;

        // console.log("from update #", url);

        fetch(url, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
        .then(res => res.json())
        .then(data =>{
            // fetch(url)
            // .then(res=>res.json())
            // .then(data=>setPerfume(data))
            setPerfumeQuantity(quantity);

            //document.getElementById('stockQuantity').innerHTML=quantity;
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

        </div>
    );
};

export default InventoryDetail;
