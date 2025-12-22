import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaChalkboardTeacher, FaCar, FaChartLine, FaDollarSign } from 'react-icons/fa';

function FeaturesSection() {
  const features = [
    {
      icon: <FaChalkboardTeacher />,
      title: 'Instructores Certificados',
      description: 'Profesionales con años de experiencia y certificación oficial.'
    },
    {
      icon: <FaCar />,
      title: 'Vehículos Modernos',
      description: 'Flota renovada con doble comando y todas las medidas de seguridad.'
    },
    {
      icon: <FaChartLine />,
      title: 'Alta Tasa de Aprobación',
      description: 'Más del 95% de nuestros alumnos aprueban en el primer intento.'
    },
    {
      icon: <FaDollarSign />,
      title: 'Precios Accesibles',
      description: 'Planes de pago flexibles y promociones especiales todo el año.'
    }
  ];

  return (
    <section id="ventajas" className="features-section">
      <Container>
        <h2 className="section-title text-dark">¿Por Qué Elegirnos?</h2>
        <Row>
          {features.map((feature, index) => (
            <Col lg={3} md={6} key={index}>
              <div className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <h4 className="text-dark">{feature.title}</h4>
                <p className='text-secondary'>{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default FeaturesSection;
