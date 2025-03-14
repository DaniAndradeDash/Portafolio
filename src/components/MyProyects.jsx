import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import photoProyect from '../assets/web_canva.png';
import { motion } from "motion/react"
import '../styles/MyProyectsStyles.css';

const MyProyects = () => {
    return (
        <div className='proyectsContainer d-flex flex-column align-items-center'>
            <h1>Mis Proyectos</h1>
            <div class="alert alert-dismissible alert-secondary">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <strong>Obseravción:</strong> Para habilitar la sección "Visualización", es importante dar clic en el boton de la tarjeta del proyecto a visualizar.
            </div>
            <Container>
                <Row className='d-flex flex-column '>
                    <Col>
                        <Nav variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="/home">Proyectos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/option2" disabled>Visualización</Nav.Link>
                            </Nav.Item>
                        </Nav>

                    </Col>
                    <Col className='d-flex justify-content-center mb-3'>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='motion-div'
                        >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={photoProyect} />
                                <Card.Body>
                                    <Card.Title>Topp & Screed México</Card.Title>
                                    <Card.Text>
                                        Creacion de un sitio web sencillo, dando a conocer las maquinas que el cliente maneja, conoce mas detalles de este proyecto.
                                    </Card.Text>
                                    <Button variant="primary">Ver informacion General</Button>
                                </Card.Body>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className='motion-div'
                        >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={photoProyect} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className='motion-div'
                        >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={photoProyect} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className='motion-div'
                        >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={photoProyect} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}
                            className='motion-div'
                        >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={photoProyect} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}
                            className='motion-div'
                        >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={photoProyect} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default MyProyects;