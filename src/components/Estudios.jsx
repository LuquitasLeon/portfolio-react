import React from 'react';

function Estudios({ titulo, institucion, año }) {
  return (
    <div>
      <h3>{titulo}</h3>
      <p>{institucion} - {año}</p>
    </div>
  );
}

export default Estudios;