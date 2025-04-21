import React from 'react';
import Estudios from './estudios.jsx';
import SoftSkills from './softskills';

function main() {
  const estudios = [
    { id: 1, titulo: 'Tecnicatura Universitaria en Programación', institucion: 'UTN', año: '2025' },
    { id: 2, titulo: 'Ingeniero en sistemas', institucion: 'UTN', año: '2025' },
  ];
  const softSkills = [
    { id: 1, skill: 'Trabajo en equipo' },
    { id: 2, skill: 'Resolución de problemas' },
  ];

  return (
    <main>
      <div>
        <h2>Presentación</h2>
        <p>Soy Lucas Ismael Leon, estudiante de Programación en la Facultad Regional Tucumán...</p>
      </div>

      <section id="estudios">
        <h2>Estudios</h2>
        {estudios.map((estudio) => (
          <Estudios key={estudio.id} {...estudio} />
        ))}
      </section>

      <section id="soft-skills">
        <h2>Soft Skills</h2>
        {softSkills.map((skill) => (
          <SoftSkills key={skill.id} {...skill} />
        ))}
      </section>
      
    </main>
  );
}

export default main;