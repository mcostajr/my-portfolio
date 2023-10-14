import { Header } from "./components/Header";
import { SectionAbout } from "./components/SectionAbout";
import { SectionHome } from "./components/SectionHome";
import style from "./style.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={style.container} id="home">
        <SectionHome />
        <SectionAbout />
      </main>
    </>
  );
}

export default App;
