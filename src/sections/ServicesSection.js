import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBookOpen, FaCar, FaCheckCircle, FaRedoAlt, FaShieldAlt, FaCalendarAlt } from 'react-icons/fa';

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
      icon: <FaRedoAlt />,
      title: 'Recuperación de Puntos',
      description: 'Cursos especiales para recuperación de puntos y renovación de licencia de conducir.'
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
    <section id="cursos" className="services-section">
      <Container>
        <h2 className="section-title">Nuestros Cursos</h2>
        <Row>
          {services.map((service, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="service-card">
                <div className="service-icon text-center">{service.icon}</div>
                <Card.Body>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ServicesSection;
