// App.jsx

import React from 'react';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import './App.css';

function App() {
  document.title = 'Olimpos';

  return (
    <>
      <Header />
      <div>
        <h1>Olimpos</h1>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  );
}

export default App;
