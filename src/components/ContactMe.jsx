import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/ContactMeStyle.css';

const ContactMe = () => {
    return (
        <div className='formContacto'>
            <Container>
                <Row>
                    <Col className='d-flex flex-column align-items-center'>
                        <h1>Fromulario de contacto</h1>
                        <div className="formularioContacto">
                            <Form>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    {/*<Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>*/}
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Telefono de contacto</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Phone number" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Mensaje</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default ContactMe;