import { useParams } from 'react-router'

import { projects } from '../helpers/projects'

import GithubBtn from '../components/GithubBtn/GithubBtn'

const ProjectPage = () => {
  const { id } = useParams()
  const project = projects[id]

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
            <p>{project.skills}</p>
          </div>
          {project.github ? <GithubBtn link={project.github} /> : ''}
        </div>
      </div>
    </main>
  )
}

export default ProjectPage
