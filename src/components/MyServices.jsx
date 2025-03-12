import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { RiPagesLine } from "react-icons/ri";
import { FaSquareWebAwesomeStroke } from "react-icons/fa6";
import '../styles/MyServicesStyle.css'

const MyServices = () => {
    return (
        <div className='MyServiceContainer'>
            <Container>
                <Row>
                    <Col className='d-flex flex-column align-items-center'>
                        <h1>Mis Servicios</h1>
                        <div className="conteinerCards d-flex">
                            <Card border="success" >
                                <Card.Body>
                                    <Card.Title><HiOutlineComputerDesktop className='iconService' /></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">UI/UX</Card.Subtitle>
                                    <Card.Text>
                                        Puedo ayudarle a rediseñar tu pagina web o aplicacion movil, para que sea mas llamativa o bien, tenga una apriencia y diseño conforme a tus ideas
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card border="success" >
                                <Card.Body>
                                    <Card.Title><RiPagesLine className='iconService' /></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Desarrollo Web</Card.Subtitle>
                                    <Card.Text>
                                        Realicemos paginas interactivas, Dinamicas y llamativas o bien, puedo ayudarte a realizar algo sencillo pero atractivo. Puedes gestionar tu pagina o bien, puedo hacerlo por ti.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card border="success">
                                <Card.Body>
                                    <Card.Title><FaSquareWebAwesomeStroke className='iconService' /></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Hosting</Card.Subtitle>
                                    <Card.Text>
                                        Puedo asesorarte para que consigas tu propio hosting de una manera sencilla y practica con precios accesibles desde semestrales, hasta anuales con muchos mas beneficios.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card border="success">
                                <Card.Body>
                                    <Card.Title><FaSquareWebAwesomeStroke className='iconService' /></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Implementacion servicios SAE</Card.Subtitle>
                                    <Card.Text>
                                        Si necesitas algun sistema contable, administrativo o de facturación, SAE es de los mejores sistemas para realizar estas actividades del día a día, con una interfaz intuitiva y tu servidor puede dar el soporte de manera rapida y eficiente.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default MyServices;