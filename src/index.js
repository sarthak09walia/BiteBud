import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";   
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
