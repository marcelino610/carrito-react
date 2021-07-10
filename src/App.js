import './App.css';
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
