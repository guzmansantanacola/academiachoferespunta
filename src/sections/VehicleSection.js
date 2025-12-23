import react from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCar, FaMotorcycle} from 'react-icons/fa';

function AboutVehicles() {
    const vehicles = [
        {
            type: 'Auto',
            licence : 'Licencia Categoría A',
            name: 'Chevrolet Onix RS Turbo',
            description: 'Modelo 2022. Compacto deportivo con motor 1.0 Turbo de 116 HP. Transmisión manual de 6 velocidades. Ideal para aprender con tecnología moderna y seguridad.',
            image: 'https://guzmansantanacola.github.io/academiachoferespunta/chevroletOnix.png',
            icon: <FaCar />
        },
        {
            type: 'Auto',
            licence : 'Licencia Categoría A',
            name: 'Chevrolet LT',
            description: 'Sedán compacto con motor 1.4L. Amplio espacio interior y excelente visibilidad. Perfecto para principiantes por su conducción suave y cómoda.',
            image: 'https://guzmansantanacola.github.io/academiachoferespunta/chevroletLT.png',
            icon: <FaCar />
        },
        {
            type: 'Auto',
            licence : 'Licencia Categoría A',
            name: 'Suzuki Alto',
            description: 'Auto compacto y ágil con motor 1.0L. Muy fácil de manejar y estacionar. Excelente para ciudad y aprendizaje inicial por su tamaño y maniobrabilidad.',
            image: 'https://guzmansantanacola.github.io/academiachoferespunta/suzukiAlto.png',
            icon: <FaCar />
        },
        {
            type: 'Auto',
            licence : 'Licencia Categoría A',
            name: 'Citroen C3',
            description: 'Hatchback moderno con motor 1.2L. Diseño ergonómico y confortable. Gran visibilidad panorámica ideal para practicar maniobras con confianza.',
            image: 'https://guzmansantanacola.github.io/academiachoferespunta/citroenc3.png',
            icon: <FaCar />
        },
        {
            type: 'Moto',
            licence : 'Licencia Categoría G2',
            name : 'Honda Wave 110cc',
            description : 'Moto ligera y económica de 110cc. Motor 4 tiempos fiable. Perfecta para dar los primeros pasos en dos ruedas con seguridad y estabilidad.',
            image: 'https://guzmansantanacola.github.io/academiachoferespunta/hondaWave.png',
            icon: <FaMotorcycle />
        },
        {
               type: 'Moto',
        licence : 'Licencia Categoría G3',
        name : 'Bmw G310R',
        description : 'Moto naked de 313cc con tecnología BMW. 34 HP y peso ligero. Excelente maniobrabilidad y control para practicar con equipamiento premium.',
        image: 'https://guzmansantanacola.github.io/academiachoferespunta/bmwg310r.png',
        icon: <FaMotorcycle />
        }
    ];
     return (
        <section id="vehicles" className="vehicles-section bg-black text-white py-5">
          <Container>
    
            <h3 className="text-center mb-5" style={{ color: 'white', fontWeight: 600 }} data-aos="fade-down">
              Nuestros Vehiculos
            </h3>
            
            <Row className="justify-content-center" data-aos="fade-left">
              {vehicles.map((vehicle, index) => (
                <Col lg={4} md={6} className="mb-4" key={index} data-aos="flip-up" data-aos-delay={index * 150}>
                  <Card className="team-card h-100">
                    <Card.Body className="text-center">
                      <div className="team-icon mb-3">
                        {vehicle.icon}
                      </div>
                      <img 
                        src={vehicle.image} 
                        alt={vehicle.name} 
                        className=" w-50"
                        loading="lazy"
                      />
                      <h4 className="team-name">{vehicle.name}</h4>
                      <p className="team-role">{vehicle.licence}</p>
                      <p className="team-description">{vehicle.description}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      );
    }

    export default AboutVehicles;