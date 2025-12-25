import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';

function HeroSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
            <Button className="btn-primary-custom mx-auto mx-lg-0 mb-2 d-block d-lg-inline-block" href="#/contacto">
              ¡Inscríbete Ahora!
            </Button>
          </Col>
          <Col lg={5} className="text-center" data-aos="fade-left" data-aos-delay="200">
            {/* Logo solo en desktop */}
            <img 
              src="https://guzmansantanacola.github.io/academiachoferespunta/Logo%20circular.png" 
              alt="Conducción Segura" 
              className="hero-image w-50 d-none d-lg-block m-auto"
              loading="eager"
            />
            {/* Indicador de scroll solo en móvil */}
            <div 
              className="scroll-indicator d-lg-none" 
              onClick={() => scrollToSection('ventajas')}
              style={{ cursor: 'pointer' }}
            >
              <p className="mb-2" >Descubre más</p>
              <FaChevronDown className="scroll-icon" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
