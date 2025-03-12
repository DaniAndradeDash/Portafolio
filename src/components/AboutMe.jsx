import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import '../styles/AboutMeStyle.css'

const AboutMe = () => {
    // Estado para manejar el contenido del Card
    const [content, setContent] = useState({
        title: "Sobre Mí",
        text: "Soy un desarrollador apasionado con experiencia en tecnologías Frontend y Backend...",
    });

    // Función para cambiar el contenido del Card
    const handleContentChange = (type) => {
        if (type === "sobreMi") {
            setContent({
                title: "Sobre Mí",
                text: "Soy un desarrollador apasionado por el diseño y la programación. Me encanta experimentar con diferentes combinaciones de librerías para crear sitios increíbles. Me mantengo actualizado con las últimas novedades tecnológicas y busco mejorar constantemente en programación. Mi objetivo es ofrecer un servicio de primer nivel, brindando la mejor atención a los clientes y resolviendo urgencias de manera eficiente y en el menor tiempo posible",
            });
        } else {
            setContent({
                title: "Mi Experiencia",
                text: "Actualmente, tengo más de dos años de experiencia trabajando con los frameworks React y Node.js, además de conocimientos en PHP. Trabajé como desarrollador de simuladores, utilizando Unity para renderizar escenarios y C# para programar animaciones, interacciones y físicas. También cuento con más de tres años de experiencia en soporte técnico y atención al cliente.",
            });
        }
    };

    return (
        <>
            <div className="boxAbout">
                <Container>
                    <Row>
                        <Col xl={12} className='d-flex flex-column align-items-center'>
                            <h1 className='tittleAboutMe'>Sobre Mí</h1>
                            <div className="buttonsAbout d-flex justify-content-evenly">
                                <Button className='btnOne' onClick={() => handleContentChange("sobreMi")}>Sobre mi</Button>
                                <Button className='btnOne' onClick={() => handleContentChange("experiencia")}>Mi Experiencia</Button>
                            </div>

                            <Card border="success" style={{ width: '40rem', textAlign: 'justify' }}>
                                <Card.Body>
                                    <Card.Title>{content.title}</Card.Title>
                                    <Card.Text>
                                        {content.text}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
        </>
    );
};

export default AboutMe;