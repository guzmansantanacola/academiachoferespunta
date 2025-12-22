import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function HeroSection() {
  return (
    <section id="inicio" className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={7}>
            <h1>Aprende a Conducir con Confianza</h1>
            <p>
              Tu camino hacia la libertad comienza aquí. Instructores certificados,
              vehículos modernos y horarios flexibles para tu comodidad.
            </p>
            <Button className="btn-primary-custom" href="/contacto">
              ¡Inscríbete Ahora!
            </Button>
          </Col>
          <Col lg={5} className="text-center">
            <img src="https://guzmansantanacola.github.io/academiachoferespunta/auto_hero.jpeg" alt="Conducción Segura" className="hero-image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
