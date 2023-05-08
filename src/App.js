import Header from "./Components/Header"
import Menu from "./Components/Menu"
import Section from "./Components/Section"
import Section2 from "./Components/Section2"
import Produtos from "./Components/Produtos"
import Inscreva from "./Components/Inscreva"
import Diferencial from "./Components/Vegano"
import Footer from "./Components/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Section />
      <Section2 />
      <Produtos />
      <Inscreva />
      <Diferencial />
      <Footer />
    </div>
  );
}

export default App;