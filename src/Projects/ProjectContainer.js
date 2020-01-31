import React from 'react';

const ProjectContainer = props => {
  const baseUrl = 'https://reifnotreef.github.io/';
  return (
    <section className='project-container' key={props.project.id}>
      <h3 className='project-title'>{props.project.name}</h3>
      <p className='project-description'>{props.project.description}</p>
      <p className='project-link'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={props.project.projectsUrl}
        >
          See the code
        </a>
      </p>
      <p className='project-live'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={baseUrl + props.project.name}
        >
          See it Live
        </a>
      </p>
      <p className='project-languages'>{props.project.Language}</p>
      <img
        src={props.project.imgLink}
        alt={props.project.alt}
        className='project-image'
      />
    </section>
  );
};

export default ProjectContainer;
