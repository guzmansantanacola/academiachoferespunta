import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

function CTASection() {
  return (
    <section className="cta-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0" data-aos="fade-right">
            <div className="cta-image-placeholder">
              <img 
                src="https://guzmansantanacola.github.io/academiachoferespunta/training_photo1.jpeg" 
                alt="Estudiante aprendiendo a conducir"
                className="cta-image"
              />
            </div>
          </Col>
          <Col lg={6} data-aos="fade-left" data-aos-delay="200">
            <div className="cta-content">
              <h2 className="cta-title">¿Listo para Comenzar?</h2>
              <p className="cta-text">
                No esperes más para obtener tu licencia de conducir. 
                Contáctanos hoy y comienza tu camino hacia la libertad al volante.
              </p>
              <div className="cta-buttons">
                <Button className="btn-cta-primary" href="/contacto">
                  <FaPhoneAlt style={{ marginRight: '10px' }} />
                  Contactar Ahora
                </Button>
                <Button className="btn-cta-secondary" href="https://wa.me/59899123456" target="_blank">
                  <FaWhatsapp style={{ marginRight: '10px' }} />
                  WhatsApp
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CTASection;
