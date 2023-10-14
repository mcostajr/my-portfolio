import style from "./style.module.css";

const SectionHome: React.FC = () => {
  return (
    <section className={style.homeContainer}>
      <div className={style.homeWrapper}>
        <div className={style.homeInfo}>
          <div className={style.ballon}>
            <span>Olá, sou</span>
          </div>
          <h2>Mauro Freire</h2>
          <h4>Desenvolvedor Web</h4>
          <span>
            <i className="fas fa-envelope"></i>
            <span>maurofreirejr@gmail.com</span>
          </span>
          <span>
            <i className="fas fa-phone"></i>
            <span>+55 (71) 99669-5848</span>
          </span>
          <span>
            <i className="fas fa-map-marker-alt"></i>
            <span>Lauro de Freitas, Bahia, Brasil</span>
          </span>
          <ul>
            <li>
              <a href="https://github.com/mcostajr">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/maurofreirejr/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/mauro.freire.33">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className={style.moldure}>
          <div className={style.image}></div>
        </div>
      </div>
    </section>
  );
};

export { SectionHome };
