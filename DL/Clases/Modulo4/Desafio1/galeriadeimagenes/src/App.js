import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Card from './components/Card';
import imagenes from './assets/imagenes';




function App() {
  return (
    <div>
      <Header />
      <Card
        img={imagenes.img1}
        titulo='Elder Ring PS5'
        descripcion='Vive la ultima aventura de from software como nunca antes, en un mundo abierto!' />
      <Card
        img={imagenes.img2}
        titulo='Returnal PS5'
        descripcion='Uno de los juegos insignia de PS5, intenta sobrevivir en este ambiente infinito' />
      <Card
        img={imagenes.img3}
        titulo='Marverl Guardians Of The Galaxy PS5'
        descripcion='Disfruta de esta historia original traida por Square Enix' />
      <Card
        img={imagenes.img4}
        titulo='Horizon: Forbidden West PS5'
        descripcion='Sumergete en el mundo de Aloy en esta nueva entrega de Guerrilla Games' />
      <Card
        img={imagenes.img5}
        titulo='Marvel Avengers PS5'
        descripcion='Si los heroes son lo tuyo, aventurate con Thor y sus amigos en esta nueva aventura de Square Enix' />
      <Card
        img={imagenes.img6}
        titulo='Final Fantasy VII Remake Integrade PS5'
        descripcion='Disfruta la version final del nuevo juego de Nomura y disfruta este Remake del tan afamado juego de PSX' />

      <Footer />
    </div>
  );
}
export default App;