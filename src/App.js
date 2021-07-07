import './App.css';
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <br />
      <br />
      <ItemListContainer greeting="Hola, mundo! (por fin me sale esto ^.^)" />
      <ItemCount />
    </div>
  );
}

export default App;
