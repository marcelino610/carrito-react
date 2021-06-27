import './App.css';
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <br />
      <br />
      <ItemListContainer greeting="Hola, mundo! (por fin me sale esto ^.^)" />
    </div>
  );
}

export default App;
