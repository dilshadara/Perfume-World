import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";

const AddInventory = () => {
    const [user] = useAuthState(auth);

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
            const email=user.email;

            const perfume={name,description,price,quantity,supplier,image,brand,size,email};

            //send data to server
            fetch('https://thawing-lake-47486.herokuapp.com/perfume',{
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
                <Button className="mt-2"  type="submit" >Add New Perfume</Button>
            </Form>

        </div>
    );
};

export default AddInventory;