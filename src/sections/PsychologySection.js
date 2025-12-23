import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBrain } from 'react-icons/fa';

function PsychologySection() {
  return (
    <section className="psychology-section">
      <Container>
        <h2 className="section-title">Apoyo Psicológico</h2>
        
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="psychology-info-card" data-aos="fade-up">
              <Card.Body>
                <div className="psychology-header">
                  <FaBrain className="psychology-icon" />
                  <div>
                    <h3>Apoyo Psicológico Disponible</h3>
                    <p className="psychology-subtitle">Convenio con Profesional de la Salud Mental</p>
                  </div>
                </div>
                
                <div className="psychology-content">
                  <h5>Lic. Psic. Ana Claudia Martínez</h5>
                  <p>
                    Contamos con el apoyo de una psicóloga clínica especializada en el abordaje de 
                    <strong> ansiedad, fobia, estrés y depresión</strong> relacionados con la conducción.
                  </p>
                  
                  <Row className="mt-4">
                    <Col md={6}>
                      <h6>Experiencia</h6>
                      <ul className="psychology-list">
                        <li>Egresada de UCUDAL (2005)</li>
                        <li>Ministerio del Interior desde 2006</li>
                        <li>Consultorio privado desde 2006</li>
                      </ul>
                    </Col>
                    <Col md={6}>
                      <h6>Beneficios para Alumnos</h6>
                      <ul className="psychology-list">
                        <li>Orientación sobre ansiedad al conducir</li>
                        <li>Apoyo en fobias relacionadas al manejo</li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PsychologySection;
