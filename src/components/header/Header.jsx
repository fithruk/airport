import "./header.scss";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logo} alt="logo" className="header__logo" />
      </div>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">For passengers</li>
          <li className="navigation__item">IEV Services</li>
          <li className="navigation__item">VIP</li>
          <li className="navigation__item">Corporate</li>
          <li className="navigation__item">Press Room</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
