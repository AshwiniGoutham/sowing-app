import React from 'react';

import Header from './components/generic/header'
import AccordionLeft from './components/generic/accordion';
import Router from './components/routing/router';

function App() {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <Header />
      <div className="d-flex" id="wrapper">
        <div className="bg-light-sidebar border-right" id="sidebar-wrapper">
          <AccordionLeft />
        </div>
        <div id="page-content-wrapper">
        <Router/>
        </div>
      </div>
    </div>
  );
}

export default App;
