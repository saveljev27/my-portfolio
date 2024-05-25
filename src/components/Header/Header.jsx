import './Header.styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Olegs</em>
          </strong>
          <br />
        </h1>
        <h3 className="header__subtitle">I am frontend developer</h3>
        <div className="header__text">
          <p>
            with a passion for my job. Motivated, initiative and fast learning
            person. I have worked with responsive web development and have
            gained a solid foundation for creating web applications using modern
            JavaScript frameworks and libraries. I'm ready to invest all my
            knowledge and time to get the best results and solutions.
          </p>
        </div>
        <a href="#!" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
