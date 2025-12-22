import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaQuoteLeft, FaGoogle } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Agustina Hernández',
      course: 'Preparación Examen',
      text: 'Recomiendo 100% la academia. Fernando es un profesor genial!! súper paciente, positivo y con una forma de enseñar que no te frustra aunque te equivoques. Explica todo el paso a paso para poder hacer los exámenes teórico y práctico, así que cero estrés. Llegué por las reseñas de Google y fue un acierto!! Muy feliz.',
      image: <BsPersonFill style={{ fontSize: '4rem', color: '#FFC300' }} />
    },
    {
      name: 'Joaquin Ramos',
      course: 'Clases Prácticas',
      text: 'Para rendir el examen de práctica está academia es genial. Todos los autos super nuevos, buen funcionamiento, Darío un fenómeno como explica todo y te enseña para rendir bien el exámen. Super recomendad',
      image: <BsPersonFill style={{ fontSize: '4rem', color: '#FFC300' }} />
    },
    {
      name: 'Raul Suarez',
      course: 'Preparación Examen y Trámite en IDM',
      text: 'Agradezco con todo a Darío, un profesional del servicio de Academia de Choferes Punta, se encargó de agendarme todas las vueltas en las oficinas públicas y para terminar... dando una Masterclass en conducción de motocicletas categoría G3. Genio total!',
      image: <BsPersonFill style={{ fontSize: '4rem', color: '#FFC300' }} />
    }
  ];

  return (
    <section className="testimonials-section">
      <Container>
        <h3 className="text-center mb-3" style={{ color: 'var(--primary-yellow)', fontSize: '1.2rem', fontWeight: '500' }}>
          700+ reseñas en Google, 5 estrellas ⭐⭐⭐⭐⭐
        </h3>
         <div className="text-center mt-4">
          <Button 
            href="https://www.google.com/search?client=opera-gx&hs=9nY&sca_esv=c3198df572da3298&sxsrf=AE3TifPFpfHUMO0a06lihJVf2_wE1QrL1w:1766363693738&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E-u0Vhfh1i3EGF6Rdpvs7jnq9YIq3pMkce4P1nqGDnOANl8XPU6Y-nmu_AopyTS91PPFMRTGviiX4lXz6IFUMkLpTdiIYuWgoBIGjhK7wmjjx4vRiA%3D%3D&q=Academia+de+Choferes+Punta+Opiniones&sa=X&ved=2ahUKEwjuuYnE-c-RAxVWKLkGHWj8F6cQ0bkNegQIPhAE&biw=1707&bih=781&dpr=1.1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta mb-3"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
          >
            <FaGoogle /> Ver Todas las Reseñas en Google
          </Button>
        </div>
        <h2 className="section-title text-white">Lo Que Dicen Nuestros Alumnos</h2>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="testimonial-card h-100">
                <Card.Body>
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className='testimonial-icon'>{testimonial.image}</div>
                    <div>
                      <h5 className="testimonial-name">{testimonial.name}</h5>
                      <p className="testimonial-course">{testimonial.course}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
       
      </Container>
    </section>
  );
}

export default TestimonialsSection;
