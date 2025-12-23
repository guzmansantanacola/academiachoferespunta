import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaBookOpen, FaCar, FaCheckCircle, FaRedoAlt, FaShieldAlt, FaCalendarAlt, FaFile, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ServicesSection() {
  const services = [
    {
      icon: <FaBookOpen />,
      title: 'Curso Teórico',
      description: 'Aprende todas las normas de tránsito, señales viales y conceptos fundamentales para una conducción segura.'
    },
    {
      icon: <FaCar />,
      title: 'Clases Prácticas',
      description: 'Práctica real en ciudad y carretera con instructores certificados y vehículos modernos con doble comando.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Preparación Examen',
      description: 'Te preparamos específicamente para aprobar el examen teórico y práctico de la intendencia.'
    },
    {
      icon: <FaFile />,
      title: 'Trámite en IDM',
      description: 'Academia Punta realiza los trámites correspondientes para las diferentes licencias de conducir ante la Intendencia.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Conducción Defensiva',
      description: 'Técnicas avanzadas de conducción preventiva y manejo en condiciones adversas.'
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Horarios Flexibles',
      description: 'Adaptamos nuestros horarios a tu disponibilidad, incluyendo fines de semana y horarios nocturnos.'
    }
  ];

  return (
    <section id="cursos" className="services-section" data-aos="fade-up">
      <Container>
        <h2 className="section-title">Nuestros Cursos</h2>
        <Row>
          {services.map((service, index) => (
            <Col xs={12} sm={6} md={6} lg={4} className="mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
              <Card className="service-card">
                <div className="service-icon text-center" >{service.icon}</div>
                <Card.Body>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <Row className="mt-5">
          <Col className="text-center">
            <Link to="/contacto">
              <Button variant="primary" size="lg" className="cta-button btn-primary-custom ">
                <FaEnvelope className="me-2" />
                ¡Consulta por Cursos!
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ServicesSection;
