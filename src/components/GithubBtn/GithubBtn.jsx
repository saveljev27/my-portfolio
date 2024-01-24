import image from './gitHub-black.svg'
import './GithubBtn.styles.css'

function GithubBtn({ link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={image} alt="" />
      GitHub repository
    </a>
  )
}

export default GithubBtn
