import React from "react";

import { projectData } from "./projectData";

export default function ProjectList() {
  console.log(projectData.id);

  return (
    <div>
      {projectData.map((item) => (
        <div
          key={item.id}
          className="project__list"
        >
          <div className="project__image">
            <img
              className="image"
              src={item.img}
              alt=""
            />
          </div>
          <div className="project__content">
            <h2 className="project__title">
              {item.title}
            </h2>
            <p>{item.description}</p>
            <p>{item.tech}</p>
            <p>{item.github}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
