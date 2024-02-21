import React from 'react';

function Service({ title, text, image }) {
  return (
    <section className="service">
      <h2>{title}</h2>
      <p>{text}</p>
      <img src={image} alt={title} />
    </section>
  );
}

export default Service;
