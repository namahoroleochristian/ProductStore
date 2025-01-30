import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ColorModeContextProvider } from './context/colorMode.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorModeContextProvider >
     <App />
    </ColorModeContextProvider>
  </React.StrictMode>
);


