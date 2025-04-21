import React from 'react';
import '../styles/Main.css';
import Estudios from './estudios.jsx';
import SoftSkills from './softskills.jsx';

function Main() {
  const estudios = [
    { id: 1, titulo: 'Tecnicatura Universitaria en Programación', institucion: 'UTN', año: '2025' },
    { id: 2, titulo: 'Ingeniero en sistemas', institucion: 'UTN', año: '2025' },
  ];
  const softSkills = [
    { id: 1, skill: 'Trabajo en equipo' },
    { id: 2, skill: 'Resolución de problemas' },
  ];
  const proyectos = [
    { id: 1, nombre: 'Portfolio en React', descripcion: 'Un portfolio personal desarrollado para Programación 3.' },
  ];
  const experiencia = [
    { id: 1, puesto: 'Pasante de Desarrollo', empresa: 'N/A', periodo: 'N/A' },
  ];
  const idiomas = [
    { id: 1, idioma: 'Español', nivel: 'Nativo' },
    { id: 2, idioma: 'Inglés', nivel: 'Intermedio' },
  ];
  const certificados = [
    { id: 1, nombre: 'Certificado de Programación Básica', institucion: 'N/A', año: 'N/A' },
  ];

  return (
    <main className="main">
      <nav>
        <a href="#presentacion">Presentación</a>
        <a href="#estudios">Estudios</a>
        <a href="#soft-skills">Soft Skills</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#idiomas">Idiomas</a>
        <a href="#certificados">Certificados</a>
      </nav>

      <div id="presentacion">
        <h2>Presentación</h2>
        <p>Soy Lucas Ismael Leon, estudiante de Programación en la Facultad Regional Tucumán</p>
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
      <section id="proyectos">
        <h2>Proyectos Realizados</h2>
        {proyectos.map((proyecto) => (
          <div key={proyecto.id}>
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
          </div>
        ))}
      </section>
      <section id="experiencia">
        <h2>Experiencia Laboral</h2>
        {experiencia.map((exp) => (
          <div key={exp.id}>
            <h3>{exp.puesto}</h3>
            <p>{exp.empresa} - {exp.periodo}</p>
          </div>
        ))}
      </section>
      <section id="idiomas">
        <h2>Idiomas</h2>
        {idiomas.map((idioma) => (
          <p key={idioma.id}>{idioma.idioma} - {idioma.nivel}</p>
        ))}
      </section>
      <section id="certificados">
        <h2>Certificados</h2>
        {certificados.map((cert) => (
          <div key={cert.id}>
            <h3>{cert.nombre}</h3>
            <p>{cert.institucion} - {cert.año}</p>
          </div>
        ))}
      </section>

      <a href="#presentacion" className="volverArriba">
        Volver arriba
      </a>
    </main>
  );
}

export default Main;