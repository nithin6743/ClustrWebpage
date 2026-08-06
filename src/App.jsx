import './index.css';
import MenuBar from './Components/MenuBar';
import Home from './Components/Home';
import Installation from './Components/Installation';
import CopyCard from './Components/CopyCard';
import Features from './Components/Features';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <MenuBar />
      <main>
        <Home />
        <Features />
        <Installation />
        <Footer />
      </main>
    </>
  );
}

export default App;
