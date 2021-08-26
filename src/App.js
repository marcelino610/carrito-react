import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import CartContextProvider from './context/cartContext'
function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
            <NavBar />
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
              <Route path='/cart'>
                <Cart />
              </Route>
            </Switch>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
