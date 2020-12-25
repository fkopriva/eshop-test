import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <body>
        <div className="grid-container">
          <header className="row">
            <div>
              <a className="brand" href="/">Eshop</a>
            </div>
            <div>
              <a href="/cart">Cart</a>
              <a href="/signin">Sign In</a>
            </div>
          </header>
          <main>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/" component={HomeScreen} exact></Route>
          </main>
          <footer class="row center">All right reserved</footer>
        </div>
      </body>
    </BrowserRouter>
  );
}

export default App;
