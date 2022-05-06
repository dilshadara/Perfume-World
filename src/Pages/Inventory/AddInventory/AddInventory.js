import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const AddInventory = () => {

    const handleNewStockAddition = (event) =>{
            event.preventDefault();
            const name=event.target.name.value;
            const description=event.target.description.value;
            const price=event.target.price.value;
            const quantity=event.target.quantity.value;
            const supplier =event.target.supplier.value;
            const image = event.target.image.value;
            const brand=event.target.brand.value;
            const size="100ml";

            const perfume={name,description,price,quantity,supplier,image,brand,size};

            //send data to server
            fetch('http://localhost:5000/perfume',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(perfume),
            })
            .then(res => res.json())
            .then(data =>{
                console.log('success',data)
            })




    }

    return (
        <div>
            <h2>Add New Perfume</h2>
                <Form onSubmit={handleNewStockAddition}>
                <Container className='w-75 mx-auto ms-4'>
                    
                    <Row className='mb-2'>
                        <Col style={{textAlign:'right'}}><Form.Label >Perfume Name</Form.Label></Col>
                        <Col >
                           
                        <Form.Control type="text" name="name" required  />
                        </Col>
                    </Row>
                    <Row className='mb-2'>
                        <Col style={{textAlign:'right'}}><Form.Label>Description</Form.Label></Col>
                        <Col>
                            <Form.Control type="text" name ="description" required />
                        </Col>
                    </Row>
                    <Row className='mb-2'>
                        <Col style={{textAlign:'right'}}><Form.Label>Price</Form.Label></Col>
                        <Col>
                            <Form.Control type="text" name="price" required />
                        </Col>
                    </Row>
                    <Row className='mb-2'>
                        <Col style={{textAlign:'right'}}><Form.Label>Quantity</Form.Label></Col>
                        <Col>
                        <Form.Control type="text" name="quantity" required />
                        </Col>
                    </Row>
                    <Row className='mb-2'>
                        <Col style={{textAlign:'right'}}><Form.Label>Supplier Name</Form.Label></Col>
                        <Col>
                        <Form.Control type="text" name="supplier" required />
                        </Col>
                    </Row>
                    <Row className='mb-2'>
                        <Col style={{textAlign:'right'}}><Form.Label>Brand</Form.Label></Col>
                        <Col>
                        <Form.Control type="text" name="brand"  />
                        </Col>
                    </Row>
                    <Row className='mb-2'>
                        <Col style={{textAlign:'right'}}><Form.Label>Image</Form.Label></Col>
                        <Col>
                        <Form.Control type="text" name="image" disabled value="https://i.ibb.co/BGQmLtr/Dior-2.png"/>
                        </Col>
                    </Row>
                </Container>
                <Button class="mt-2"  type="submit" >Add New Perfume</Button>
            </Form>

        </div>
    );
};

export default AddInventory;