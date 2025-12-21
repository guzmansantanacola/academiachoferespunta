import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Card, Form, Button } from 'react-bootstrap';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por tu interés! Te contactaremos pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar expand="lg" className="navbar-custom" fixed="top">
        <Container>
          <Navbar.Brand href="#home">🚗 Academia Choferes Punta</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#inicio">Inicio</Nav.Link>
              <Nav.Link href="#nosotros">Nosotros</Nav.Link>
              <Nav.Link href="#cursos">Cursos</Nav.Link>
              <Nav.Link href="#ventajas">Ventajas</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="inicio" className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <h1>Aprende a Conducir con Confianza</h1>
              <p>
                Tu camino hacia la libertad comienza aquí. Instructores certificados,
                vehículos modernos y horarios flexibles para tu comodidad.
              </p>
              <Button className="btn-primary-custom" href="#contacto">
                ¡Inscríbete Ahora!
              </Button>
            </Col>
            <Col lg={5} className="text-center">
              <div style={{ fontSize: '10rem' }}>🚙</div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="nosotros" className="about-section">
        <Container>
          <h2 className="section-title">Sobre Nosotros</h2>
          <Row className="justify-content-center">
            <Col lg={8}>
              <p className="about-text text-center">
                En Academia Choferes Punta, llevamos más de 15 años formando conductores
                responsables y seguros. Contamos con instructores altamente calificados,
                vehículos equipados con doble comando y un programa de estudio completo
                que te preparará para obtener tu licencia de conducir con éxito.
              </p>
              <p className="about-text text-center mt-4">
                Nuestra misión es brindarte la mejor educación vial, combinando teoría
                práctica con las técnicas más modernas de enseñanza, siempre priorizando
                la seguridad y la confianza al volante.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section id="cursos" className="services-section">
        <Container>
          <h2 className="section-title">Nuestros Cursos</h2>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <Card className="service-card">
                <div className="service-icon text-center">📝</div>
                <Card.Body>
                  <h3>Curso Teórico</h3>
                  <p>
                    Aprende todas las normas de tránsito, señales viales y
                    conceptos fundamentales para una conducción segura.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="service-card">
                <div className="service-icon text-center">🚗</div>
                <Card.Body>
                  <h3>Clases Prácticas</h3>
                  <p>
                    Práctica real en ciudad y carretera con instructores
                    certificados y vehículos modernos con doble comando.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="service-card">
                <div className="service-icon text-center">✅</div>
                <Card.Body>
                  <h3>Preparación Examen</h3>
                  <p>
                    Te preparamos específicamente para aprobar el examen
                    teórico y práctico de la intendencia.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="service-card">
                <div className="service-icon text-center">🔄</div>
                <Card.Body>
                  <h3>Recuperación de Puntos</h3>
                  <p>
                    Cursos especiales para recuperación de puntos y
                    renovación de licencia de conducir.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="service-card">
                <div className="service-icon text-center">⚙️</div>
                <Card.Body>
                  <h3>Conducción Defensiva</h3>
                  <p>
                    Técnicas avanzadas de conducción preventiva y manejo
                    en condiciones adversas.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="service-card">
                <div className="service-icon text-center">📅</div>
                <Card.Body>
                  <h3>Horarios Flexibles</h3>
                  <p>
                    Adaptamos nuestros horarios a tu disponibilidad,
                    incluyendo fines de semana y horarios nocturnos.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section id="ventajas" className="features-section">
        <Container>
          <h2 className="section-title">¿Por Qué Elegirnos?</h2>
          <Row>
            <Col lg={3} md={6}>
              <div className="feature-item">
                <div className="feature-icon">👨‍🏫</div>
                <h4>Instructores Certificados</h4>
                <p>
                  Profesionales con años de experiencia y certificación oficial.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="feature-item">
                <div className="feature-icon">🚘</div>
                <h4>Vehículos Modernos</h4>
                <p>
                  Flota renovada con doble comando y todas las medidas de seguridad.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="feature-item">
                <div className="feature-icon">📊</div>
                <h4>Alta Tasa de Aprobación</h4>
                <p>
                  Más del 95% de nuestros alumnos aprueban en el primer intento.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="feature-item">
                <div className="feature-icon">💰</div>
                <h4>Precios Accesibles</h4>
                <p>
                  Planes de pago flexibles y promociones especiales todo el año.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="contact-section">
        <Container>
          <h2 className="section-title">Contáctanos</h2>
          <Row>
            <Col lg={7} className="mb-4">
              <div className="contact-form">
                <h3 className="mb-4" style={{ color: 'var(--dark-blue)' }}>
                  Envíanos un mensaje
                </h3>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tucorreo@ejemplo.com"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="099 123 456"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="¿En qué curso estás interesado?"
                      required
                    />
                  </Form.Group>
                  <Button type="submit" className="btn-primary-custom">
                    Enviar Mensaje
                  </Button>
                </Form>
              </div>
            </Col>
            <Col lg={5}>
              <div className="contact-info">
                <h3>Información de Contacto</h3>
                <div className="contact-item">
                  <div className="contact-item-icon">📍</div>
                  <div className="contact-item-text">
                    <h5>Dirección</h5>
                    <p>Av. Principal 1234, Punta del Este</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">📞</div>
                  <div className="contact-item-text">
                    <h5>Teléfono</h5>
                    <p>+598 99 123 456</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">✉️</div>
                  <div className="contact-item-text">
                    <h5>Email</h5>
                    <p>info@academiachoferespunta.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">🕒</div>
                  <div className="contact-item-text">
                    <h5>Horario</h5>
                    <p>Lunes a Viernes: 9:00 - 20:00</p>
                    <p>Sábados: 9:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Container>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <h5>Academia Choferes Punta</h5>
              <p>
                Formando conductores responsables y seguros desde 2008.
                Tu éxito es nuestro compromiso.
              </p>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <h5>Enlaces Rápidos</h5>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li className="mb-2"><a href="#inicio">Inicio</a></li>
                <li className="mb-2"><a href="#nosotros">Nosotros</a></li>
                <li className="mb-2"><a href="#cursos">Cursos</a></li>
                <li className="mb-2"><a href="#contacto">Contacto</a></li>
              </ul>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <h5>Síguenos</h5>
              <div style={{ fontSize: '2rem' }}>
                <a href="#facebook" style={{ marginRight: '15px' }}>📘</a>
                <a href="#instagram" style={{ marginRight: '15px' }}>📷</a>
                <a href="#whatsapp">💬</a>
              </div>
            </Col>
          </Row>
          <div className="footer-bottom">
            <p>&copy; 2024 Academia Choferes Punta. Todos los derechos reservados.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;
