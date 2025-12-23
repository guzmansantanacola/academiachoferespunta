import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío de formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      alert('¡Gracias por tu interés! Te contactaremos pronto.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Ocultar mensaje de éxito después de 3 segundos
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Dirección',
      content: 'Av. Principal 1234, Punta del Este'
    },
    {
      icon: <FaPhone />,
      title: 'Teléfono',
      content: '+598 99 123 456'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'info@academiachoferespunta.com'
    },
    {
      icon: <FaClock />,
      title: 'Horario',
      content: ['Lunes a Viernes: 9:00 - 20:00', 'Sábados: 9:00 - 14:00']
    }
  ];

  return (
    <section id="contacto" className="contact-section" data-aos="fade-up">
      <Container>
        <h2 className="section-title">Contáctanos</h2>
        <Row>
          <Col lg={7} className="">
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
                <Button 
                  type="submit" 
                  className="btn-primary-custom"
                  disabled={isSubmitting}
                  style={{ position: 'relative' }}
                >
                  {isSubmitting ? (
                    <>
                      <span style={{ opacity: 0 }}>Enviar Mensaje</span>
                      <span style={{ 
                        position: 'absolute', 
                        left: '50%', 
                        top: '50%', 
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Enviando...
                      </span>
                    </>
                  ) : submitSuccess ? (
                    <>✓ Enviado</>
                  ) : (
                    'Enviar Mensaje'
                  )}
                </Button>
                {submitSuccess && (
                  <div style={{ 
                    marginTop: '1rem', 
                    padding: '0.75rem', 
                    backgroundColor: 'var(--primary-yellow)', 
                    color: 'var(--dark-black)',
                    borderRadius: '4px',
                    fontWeight: '500',
                    animation: 'fadeIn 0.3s ease'
                  }}>
                    ¡Mensaje enviado con éxito! Te contactaremos pronto.
                  </div>
                )}
              </Form>
            </div>
          </Col>
          <Col lg={5}>
            <div className="contact-info">
              <h3>Información de Contacto</h3>
              {contactInfo.map((info, index) => (
                <div className="contact-item" key={index}>
                  <div className="contact-item-icon">{info.icon}</div>
                  <div className="contact-item-text">
                    <h5>{info.title}</h5>
                    {Array.isArray(info.content) ? (
                      info.content.map((line, i) => <p key={i}>{line}</p>)
                    ) : (
                      <p>{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;
