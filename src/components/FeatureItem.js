import React from 'react';

function FeatureItem({ icon, title, description }) {
  return (
    <div className="feature-item">
      <div className="feature-icon">{icon}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default FeatureItem;
