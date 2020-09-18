import React from 'react';
import ReactDOM from 'react-dom';
//home组件
// import Home from './home.jsx'
import ERouter from './router'
//9.14作业
// import Pirce from './9.14work/lowPrice.jsx'
// import Center from './9.14work/center.jsx'
// import Live from './9.14work/live.jsx'
// import Shop from './9.14work/shop.jsx'
// import Square from './9.14work/square.jsx'

import './index.css'

ReactDOM.render(
  <div id ="container">
    <ERouter/>
  </div>,
  document.getElementById('root')
);

