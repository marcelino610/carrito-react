import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
      <Switch>
      <Route exact path="/">
        <ItemListContainer />
      </Route>
      <Route exact path="/categorias/:catId">
        <ItemListContainer />
      </Route>
      <Route path="/item/:id">
        <ItemDetailContainer />
      </Route>
        </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
