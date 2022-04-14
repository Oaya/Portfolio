import React from "react";

export default function Education() {
  return (
    <div className="component">
      <h1 className="component__heading">
        Education
      </h1>

      <div className="education__list">
        <div className="education__content">
          <p className="education__title">
            Full-stack Web Development Bootcamp
          </p>
          <p className="education__day">
            Lighthouse Labs | 2022
          </p>
        </div>

        <div className="about__content">
          <p className="education__title">
            TypeScript-2022 Edition course
          </p>
          <p className="education__day">
            Udemy | 2022
          </p>
        </div>

        <div className="about__content">
          <p className="education__title">
            Advanced CSS and Sass course
          </p>
          <p className="education__day">
            Lighthouse Labs | 2021
          </p>
        </div>

        <div className="about__content">
          <p className="education__title">
            Web development Bootcamp course
          </p>
          <p className="education__day">
            Lighthouse Labs | 2021
          </p>
        </div>
      </div>
    </div>
  );
}
