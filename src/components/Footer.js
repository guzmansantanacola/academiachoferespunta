import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
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
              <li className="mb-2"><Link to="/">Inicio</Link></li>
              <li className="mb-2"><Link to="/nosotros">Nosotros</Link></li>
              <li className="mb-2"><Link to="/cursos">Cursos</Link></li>
              <li className="mb-2"><Link to="/contacto">Contacto</Link></li>
            </ul>
          </Col>
          <Col lg={4} md={6} className="mb-4">
            <h5>Síguenos</h5>
            <div style={{ fontSize: '2rem', display: 'flex', gap: '15px' }}>
              <a href="#facebook" style={{ color: 'var(--light-gray)' }}><FaFacebook /></a>
              <a href="#instagram" style={{ color: 'var(--light-gray)' }}><FaInstagram /></a>
              <a href="#whatsapp" style={{ color: 'var(--light-gray)' }}><FaWhatsapp /></a>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p>&copy; 2025 Academia Choferes Punta. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
