import style from "./style.module.css";
import aboutImage from "/undraw_dev_productivity_umsq.svg";

const SectionAbout: React.FC = () => {
  return (
    <section className={style.aboutContainer} id="about">
      <div className={style.aboutWrapper}>
        <div>
          <img src={aboutImage} width="250px" height="200px" alt="Foto About" />
        </div>
        <div className={style.aboutInfo}>
          <h2>Sobre</h2>
          <p>
            Oi, eu sou Mauro Freire, um entusiasta do desenvolvimento web. Minha
            paixão reside em criar experiências online extraordinárias. Meu
            maior motivo: proporcionar o melhor para cada usuário, transformando
            ideias em interfaces incríveis.
          </p>
          <ul>
            <li>Typescript</li>
            <li>React</li>
            <li>Docker</li>
            <li>PostgresSQL</li>
            <li>Node.Js</li>
            <li>Cloud (GCP)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export { SectionAbout };
