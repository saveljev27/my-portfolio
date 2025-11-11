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
      </div>
    </header>
  );
};

export default Header;
