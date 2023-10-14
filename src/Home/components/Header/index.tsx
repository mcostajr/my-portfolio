import style from "./style.module.css";

const Header: React.FC = () => {
  return (
    <header className={style.headerContainer}>
      <nav className={style.navContainer}>
        <ul className={style.navWrapper}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
        </ul>
      </nav>
      {/* <div className={style.menuButton}>
        <button className={style.buttonDropdown}>
          <i className="icon-menu-open"></i>
        </button>
        <div id="menuDropdown" className="dropdown-container">
          <ul className="dropdown-wrapper">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#project">Projetos</a>
            </li>
          </ul>
        </div>
      </div> */}
    </header>
  );
};

export { Header };
