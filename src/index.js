import React from 'react';
import ReactDOM from 'react-dom/client';
// import '../src/style/';
import App from './pages/App';
import Header from './components/Header';
import Footer from './components/Footer';


// export default Header;
// export default Footer;

import './style/index.css';
import RouteApp from './routes/Route'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteApp />
  </React.StrictMode>
);

