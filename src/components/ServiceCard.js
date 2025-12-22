import React from 'react';
import { Card as BSCard } from 'react-bootstrap';

function ServiceCard({ icon, title, description }) {
  return (
    <BSCard className="service-card">
      <div className="service-icon text-center">{icon}</div>
      <BSCard.Body>
        <h3>{title}</h3>
        <p>{description}</p>
      </BSCard.Body>
    </BSCard>
  );
}

export default ServiceCard;
