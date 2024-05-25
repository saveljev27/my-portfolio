import { useParams } from 'react-router';

import { projects } from '../utils/projects';

import SocialBtn from '../components/SocialBtn/SocialBtn';

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p className="project-details__desc-title">{project.skills}</p>
            <p className="project-details__desc-about">{project.desc}</p>
          </div>
          {project.github ? (
            <SocialBtn gitLink={project.github} vercelLink={project.vercel} />
          ) : (
            ''
          )}
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
