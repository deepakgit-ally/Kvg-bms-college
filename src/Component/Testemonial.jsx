// src/TestimonialCarousel.js
import React, { useState } from 'react';
import {  Button, Row, Col } from 'react-bootstrap';
import s1 from '../Assets/Image/student1.jpg'
import s2 from '../Assets/Image/student2.avif'
import s3 from '../Assets/Image/student-3.jpg'
import s4 from '../Assets/Image/student4.avif'
const testimonials = [
  {
    image: s1,
    quote: "Education Planner helped me in accomplishing my dream to study abroad. The team members at this consultancy are quite understanding and helpful and know what suits us the best. They aided in getting me my respective college and a scholarship too. I can’t thank the Education Planner enough for this!",
    name: "Harshdeep Kaur",
    position: "Student"
  },
  {
    image: s2,
    quote: "This product is amazing! It has changed my life for the better.",
    name: "John Doe",
    position: "CEO, Company Inc."
  },
  {
    image: s3,
    quote: "I can't imagine my work without this tool. Highly recommended!",
    name: "Jane Smith",
    position: "CTO, Another Company"
  },
  {
    image: s4,
    quote: "A must-have for any professional. Excellent support and easy to use.",
    name: "Alice Johnson",
    position: "Manager, Some Company"
  }
];

const Testemonial = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonials = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonials = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[index];

  return (
    <div  className="container"style={{ textAlign: 'center', color: '#000',margin: 'auto', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px', height:"30%" }}>
      <h2 style={{ marginBottom: '20px', color: '#495057' }}>Hear from our <span style={{ color: '#007bff' }}>happy students</span></h2>
      <hr className='beautiful-hr'/>
      <Row className="justify-content-center mb-4">
        <Col md={3} style={{ textAlign: 'right' }}>
          <img src={currentTestimonial.image} alt={currentTestimonial.name} style={{ borderRadius: '50%', width: '100px', height: '100px', border: '5px solid #007bff' }} />
        </Col>
        <Col md={9} style={{ textAlign: 'left', paddingLeft: '20px' }}>
          <div style={{ fontSize: '1.5em', color: '#007bff', marginBottom: '10px' }}>“</div>
          <p style={{ fontSize: '1.1em', fontStyle: 'italic' }}>{currentTestimonial.quote}</p>
          <h5>{currentTestimonial.name}</h5>
          <p className="text-muted">{currentTestimonial.position}</p>
        </Col>
      </Row>
      <div>
        <Button onClick={prevTestimonials} style={{ marginRight: '10px' }}>←</Button>
        <Button onClick={nextTestimonials}>→</Button>
      </div>
    </div>
  );
};

export default Testemonial;
