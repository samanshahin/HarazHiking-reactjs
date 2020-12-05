import './App.css';
import React from 'react'

import { ItemsList } from './Items/ItemsList'
import { Navbar } from './app/Navbar';
import { Footer } from './app/Footer';

function App() {
  return (
    <div>
      <React.Fragment>
        <Navbar />
        <div class="album py-5 bg-light">
          <div class="container">
            <ItemsList />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
