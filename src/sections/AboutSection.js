import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCar, FaMotorcycle, FaBrain } from 'react-icons/fa';

function AboutSection() {
  const team = [
    {
      name: 'Darío Agesta Catania',
      image: '/dario.png',
      role: 'Coaching Autos',
      icon: <FaCar />,
      description: 'Instructor de manejo.',
      credentials: [
        'Curso de Acreditación de Instructores de Academias de Conducir dictado por UNASEV',
        'Licencias de conducir: Categoría E, F, G3'
      ]
    },
    {
      name: 'Fernando Agesta Catania',
       image: '/fernando.png',
      role: 'Coaching Motos',
      icon: <FaMotorcycle />,
      description: 'Instructor de manejo.',
      credentials: [
        'Maestro en Educación Primaria',
        'Licencias de conducir: Categoría E, B, G3'
      ]
    },
    {
      name: 'Lic. Psic. Ana Claudia Martínez',
        image: '/claudia.png',
      role: 'Psicóloga',
      icon: <FaBrain />,
      description: 'Psicóloga clínica egresada de UCUDAL en 2005.',
      credentials: [
        'Trabaja en Ministerio del Interior y consultorio privado desde 2006',
        'Orientación y abordaje específico de ansiedad, fobia, estrés, depresión',
        'Colaboradora en Academia de Choferes Punta con descuento en aranceles'
      ],
    }
  ];

  return (
    <section id="nosotros" className="about-section">
      <Container>
        <h2 className="section-title">Quiénes Somos</h2>
        <Row className="justify-content-center mb-5">
          <Col lg={10}>
            <p className="about-text text-center">
              En Academia Choferes Punta, llevamos más de 15 años formando conductores
              responsables y seguros. Contamos con instructores altamente calificados,
              vehículos equipados con doble comando y un programa de estudio completo
              que te preparará para obtener tu licencia de conducir con éxito.
            </p>
            <p className="about-text text-center mt-4">
              Nuestra misión es brindarte la mejor educación vial, combinando teoría y
              práctica con las técnicas más modernas de enseñanza, siempre priorizando
              la seguridad y la confianza al volante.
            </p>
          </Col>
        </Row>

        <h3 className="text-center mb-5" style={{ color: 'var(--dark-black)', fontWeight: 600 }}>
          Nuestro Equipo
        </h3>
        
        <Row className="justify-content-center">
          {team.map((member, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="team-card h-100">
                <Card.Body className="text-center">
                  <div className="team-icon mb-3">
                    {member.icon}
                  </div>
                  <img src={member.image} alt={member.name} className=" w-50"/>
                  <h4 className="team-name">{member.name}</h4>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                  <ul className="team-credentials">
                    {member.credentials.map((credential, idx) => (
                      <li key={idx}>{credential}</li>
                    ))}
                  </ul>
                  {member.website && (
                    <p className="team-website">
                      <a href={`https://${member.website}`} target="_blank" rel="noopener noreferrer">
                        {member.website}
                      </a>
                    </p>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
