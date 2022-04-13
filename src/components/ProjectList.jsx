import React from 'react';

import { projectData } from './projectData';

export default function ProjectList() {
  console.log(projectData.id);

  return (
    <div>
      {projectData.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.img} alt=""></img>
          <p>{item.description}</p>
          <p>{item.tech}</p>
          <p>{item.github}</p>
        </div>)

      )}

    </div>)
}
