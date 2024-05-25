import './SocialBtn.styles.css';
import gitHub from '../../img/icons/gitHub-black.svg';
import vercel from '../../img/icons/vercel.svg';

function SocialBtn({ gitLink, vercelLink }) {
  return (
    <div className="project-social">
      <a
        href={gitLink}
        target="_blank"
        rel="noreferrer"
        className="btn-outline"
      >
        <img src={gitHub} alt="GitHub" />
        GitHub
      </a>
      <a
        href={vercelLink}
        target="_blank"
        rel="noreferrer"
        className="btn-outline"
      >
        <img src={vercel} alt="Vercel" />
        Vercel
      </a>
    </div>
  );
}

export default SocialBtn;
