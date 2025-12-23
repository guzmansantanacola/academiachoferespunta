import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUsers, FaTrophy, FaCar, FaStar } from 'react-icons/fa';

function StatsSection() {
  const stats = [
    {
      icon: <FaUsers />,
      number: '500+',
      label: 'Alumnos Graduados'
    },
    {
      icon: <FaTrophy />,
      number: '98%',
      label: 'Tasa de Aprobación'
    },
    {
      icon: <FaCar />,
      number: '6',
      label: 'Vehículos'
    },
    {
      icon: <FaStar />,
      number: '5+',
      label: 'Años de Experiencia'
    }
  ];

  return (
    <section className="stats-section bg-secondary text-white py-5">
      <Container>
        <Row>
          {stats.map((stat, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <div className="stat-item" data-aos="flip-up" data-aos-delay={index * 150}>
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default StatsSection;
