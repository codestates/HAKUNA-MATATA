import { Fragment } from 'react';
import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="box">
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    </div>
  );
}

export default App;
