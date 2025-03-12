import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import LogoDash from '../assets/Solo_logo_grande.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Header = () => {
    return (
        <>
            <div className="containerHeader">
                <Container>
                    <Row>
                        <Col xl={6} className='d-flex flex-column justify-content-center align-items-start'>
                            <h3 className='headerText'>Hola, <span className='greenText'>soy</span></h3>
                            <h1 className='headerName'>Daniel Andrade</h1>
                            <h3 className='headerText'>Desarrollador <span className='greenText'>Front-End</span> y <span className='greenText'>Back-End</span></h3>
                            <p className='headerParrafo'>Gracias por visitar este portafolio, espero encuentres algun proyecto que sea de tu interes, no dudes en contactarme para cualquier duda y recuerda, <em>Si puedes imaginarlo puedo crearlo</em></p>
                            <Button className='headerButton'>Contactame</Button>
                        </Col>
                        <Col xl={6}>
                            <div className="poligonBackground d-flex justify-content-center">
                                <img src={LogoDash} alt="logo" width={500} />
                            </div>
                        </Col>
                        <Col xl={12} className='d-flex justify-content-start'>
                            <p className='textoRedes'>Mis Redes</p>
                            <div className="backgroundIcon">
                                <FaFacebook className='iconoRedes' />
                            </div>
                            <div className="backgroundIcon">
                                <FaInstagram className='iconoRedes' />
                            </div>
                            <div className="backgroundIcon">
                                <FaWhatsapp className='iconoRedes' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
};

export default Header;