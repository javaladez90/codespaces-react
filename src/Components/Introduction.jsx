import React from 'react';

function Introduction({ title, text, image }) {
  return (
    <section className="intro">
      <h2>{title}</h2>
      <p>{text}</p>
      <img src={image} alt="Introduction" />
    </section>
  );
}

export default Introduction;
