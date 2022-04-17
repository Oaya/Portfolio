import React from "react";

import { educationData } from "./educationData.js";

export default function Education() {
  return (
    <div className="component education">
      <h1 className="component__heading">
        Education
      </h1>

      <div className="education__list">
        {educationData.map((data) => (
          <div
            className="education__content"
            key={data.id}
          >
            <a
              href={data.url}
              className="education__title"
            >
              {data.title}
            </a>
            <p className="education__day">
              {data.resource} &nbsp;&nbsp;|
              &nbsp;&nbsp;{data.day}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
