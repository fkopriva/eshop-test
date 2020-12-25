import React from 'react';
import Product from './components/Product';
import data from './data';

function App() {
  return (
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
          <div>
            <div className="row center">
              {
                data.products.map(product => (
                  <Product key={product._id} product={product}></Product>
                ))
              }
            </div>
          </div>
        </main>
        <footer class="row center">All right reserved</footer>
      </div>
    </body>
  );
}

export default App;
