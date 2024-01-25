import './Header.styles.css'

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
          <p>with passion for learning and creating.</p>
        </div>
        <a href="#!" className="btn">
          Download CV
        </a>
      </div>
    </header>
  )
}

export default Header
