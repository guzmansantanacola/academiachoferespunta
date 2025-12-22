import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUsers, FaTrophy, FaCar, FaStar } from 'react-icons/fa';

function StatsSection() {
  const stats = [
    {
      icon: <FaUsers />,
      number: '2500+',
      label: 'Alumnos Graduados'
    },
    {
      icon: <FaTrophy />,
      number: '95%',
      label: 'Tasa de Aprobación'
    },
    {
      icon: <FaCar />,
      number: '15',
      label: 'Vehículos'
    },
    {
      icon: <FaStar />,
      number: '15+',
      label: 'Años de Experiencia'
    }
  ];

  return (
    <section className="stats-section bg-secondary text-white py-5">
      <Container>
        <Row>
          {stats.map((stat, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <div className="stat-item">
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
