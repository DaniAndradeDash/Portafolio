import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/MySkillsStyles.css';

const MySkills = () => {
    return (
        <div className='skillContainer d-flex flex-column align-items-center'>
            <h1>Mis Habilidades</h1>
            <Container>
                <Row >
                    <Col xl={6} >
                        <div className="partOne">
                            <h3>Desarrollo y Programación</h3>
                            <h4>Front-End:</h4>
                            <div className="skill">
                                <p>React</p>
                                <ProgressBar striped variant="success" now={70} />
                            </div>
                            <div className="skill">
                                <p>Boostrap</p>
                                <ProgressBar striped variant="success" now={80} />
                            </div>
                            <div className="skill">
                                <p>HTML5</p>
                                <ProgressBar striped variant="success" now={90} />
                            </div>
                            <div className="skill">
                                <p>CSS</p>
                                <ProgressBar striped variant="success" now={80} />
                            </div>
                            <div className="skill">
                                <p>JavaScript</p>
                                <ProgressBar striped variant="success" now={40} />
                            </div>
                            <hr />
                            <h4>Back-End:</h4>
                            <div className="skill">
                                <p>Node.js</p>
                                <ProgressBar striped variant="success" now={50} />
                            </div>
                            <div className="skill">
                                <p>PostGresSQL</p>
                                <ProgressBar striped variant="success" now={50} />
                            </div>
                            <div className="skill">
                                <p>PHP</p>
                                <ProgressBar striped variant="success" now={30} />
                            </div>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <div className="partOne">
                            <h3>Gestion y WordPress</h3>
                            <div className="skill">
                                <p>Wordpress</p>
                                <ProgressBar striped variant="success" now={70} />
                            </div>
                            <div className="skill">
                                <p>Elementor</p>
                                <ProgressBar striped variant="success" now={50} />
                            </div>
                            <div className="skill">
                                <p>E-commerce</p>
                                <ProgressBar striped variant="success" now={50} />
                            </div>
                            <div className="skill">
                                <p>Blogs</p>
                                <ProgressBar striped variant="success" now={50} />
                            </div>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <div className="partOne">
                            <h3>Estrategia y Marketing Digital</h3>
                            <div className="skill">
                                <p>Google</p>
                                <ProgressBar striped variant="success" now={40} />
                            </div>
                            <div className="skill">
                                <p>Facebook</p>
                                <ProgressBar striped variant="success" now={40} />
                            </div>
                            <div className="skill">
                                <p>Instagram,</p>
                                <ProgressBar striped variant="success" now={40} />
                            </div>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <div className="partOne">
                            <h3>Software Empresarial y ERP</h3>
                            <div className="skill">
                                <p>Sistema

                                    SAE</p>
                                <ProgressBar striped variant="success" now={50} />
                            </div>
                            <div className="skill">
                                <p>Sistema Contable COI</p>
                                <ProgressBar striped variant="success" now={30} />
                            </div>
                            <div className="skill">
                                <p>Sistema de Facturacion Facture</p>
                                <ProgressBar striped variant="success" now={40} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MySkills;