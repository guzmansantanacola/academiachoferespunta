import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

function LocationSection() {
  return (
    <section className="location-section">
      <Container>
        <h2 className="section-title">Dónde Encontrarnos</h2>
        
        <Row>
          <Col lg={6} className="mb-4" data-aos="fade-right">
            <div className="map-container">
              <iframe
                title="Ubicación Academia Choferes Punta"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.676711622327!2d-54.9643633!3d-34.9145593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x957511348d9fc7b7%3A0xe755a1d8711427e8!2sAcademia%20de%20Choferes%20Punta!5e0!3m2!1ses!2suy!4v1734901234567!5m2!1ses!2suy"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
          
          <Col lg={6} data-aos="fade-left" data-aos-delay="200">
            <Card className="location-info-card h-100">
              <Card.Body>
                <h3 className="mb-4">Información de Contacto</h3>
                
                <div className="location-info-item">
                  <FaMapMarkerAlt className="location-icon" />
                  <div>
                    <h5>Dirección</h5>
                    <p>35000 Maldonado, Departamento de Maldonado</p>
                  </div>
                </div>
                
                <div className="location-info-item">
                  <FaPhone className="location-icon" />
                  <div>
                    <h5>Teléfono</h5>
                    <p><a href="tel:094774465">094 774 465</a></p>
                  </div>
                </div>
                
                <div className="location-info-item">
                  <FaClock className="location-icon" />
                  <div>
                    <h5>Horario</h5>
                    <p>Lunes a Sábado: 8:00 - 20:00 hs</p>
                    <p>Domingos: Cerrado</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LocationSection;
