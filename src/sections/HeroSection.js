import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function HeroSection() {
  return (
    <section id="inicio" className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={7} className="text-center text-lg-start" data-aos="fade-right">
            <h1>Aprende a Conducir con Confianza</h1>
            <p>
              Tu camino hacia la libertad comienza aquí. Instructores certificados,
              vehículos modernos y horarios flexibles para tu comodidad.
            </p>
            <Button className="btn-primary-custom mx-auto mx-lg-0 mb-2 d-block d-lg-inline-block" href="/contacto">
              ¡Inscríbete Ahora!
            </Button>
          </Col>
          <Col lg={5} className="text-center" data-aos="fade-left" data-aos-delay="200">
            <img 
              src="https://guzmansantanacola.github.io/academiachoferespunta/Logo%20circular.png" 
              alt="Conducción Segura" 
              className="hero-image w-50"
              loading="eager"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
