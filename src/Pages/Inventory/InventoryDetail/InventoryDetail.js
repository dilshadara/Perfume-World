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
        <div className='container w-100 mx-auto '>
             <h2 style={{textAlign:'center'}}>{perfume.name}</h2>
             <div className='d-flex flex-row'>
             <div className='container w-50 mx-auto '>
                <img className='mt-5' src={perfume.image} alt=""></img>
             </div>
            <div className='container w-50 mx-auto ' >
                <Form onSubmit={handleStockUpdateByOne}>
                    <Container style={{textAlign:'left'}}>
                        <Row>
                           
                            <Col>
                            <b>Brand:</b> <Form.Label>{perfume.brand}</Form.Label>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col>
                            <b>Description:</b> <Form.Label>{perfume.description}</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                           
                            <Col>
                            <b>Price:</b> <Form.Label id="stockQuantity" >{perfume.price}</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                           
                            <Col>
                            <b>Quantity:</b> <Form.Label id="stockQuantity" >{perfume.quantity}</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                           
                            <Col>
                            <b>Supplier:</b>  <Form.Label id="stockQuantity" >{perfume.supplier}</Form.Label>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{textAlign:'center'}}><Button  type="submit" className='w-75 mb-3' >Delivered</Button></Col>
                        </Row>
                        
                    </Container>
                    
                </Form>

                <Form onSubmit={handleRestock}>
                    <Form.Control type="number" name="newStockInput" required placeholder="Enter new stock" className='mb-2'/>
                    
                    <Button variant="primary" type="submit" className='w-75 mb-3'>
                    Restock the item
                    </Button>
                </Form>

               
            </div>
            </div>
            <Link to='/manageInventory' onClick={navigateManageInventory}>Manage Inventories</Link>
        </div>
    );
};

export default InventoryDetail;
