import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Project.styles.css';

const Project = ({ title, img, id }) => {
  return (
    <div>
      <li className="project">
        <Link to={`/project/${id}`}>
          <img src={img} alt={title} className="project__img" loading="lazy" />
          <h3 className="project__title">{title}</h3>
        </Link>
      </li>
    </div>
  );
};

export default Project;
