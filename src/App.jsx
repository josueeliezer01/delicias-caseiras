import NavBar from "./Components/NavBar/NavBar";
import Anounce from "./Components/Anounce/Anounce";
import Opcoes from "./Components/Opcoes/Opcoes";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Combos from "./Components/Combos/Combos";
import Depoimentos from "./Components/Depoimentos/Depoimentos";
import Contato from "./Components/Contato/Contato";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import { useState } from "react";

function App() {
  const [playState, setPlayState] = useState(false);
  return (
    <div className="App">
      <NavBar />
      <Anounce />
      <div className="container">
        <Title
          subTitle="Escolha a opção"
          title="Que mais combina com você"
        />
        <Opcoes />
        <About setPlayState={setPlayState} />
        <Title
          subTitle="Combos"
          title="Aproveite as promoções"
        />
        <Combos />
        <Title
          subTitle="Depoimentos"
          title="Aproveite as promoções"
        />
        <Depoimentos />
        <Title
          subTitle="Entre em contato"
          title="Faça já os seus pedidos!"
        />
        <Contato />
        <Footer />
      </div>
      <VideoPlayer
        playState={playState}
        setPlayState={setPlayState}
      />
    </div>
  );
}

export default App;
