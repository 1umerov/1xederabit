import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


    ReactDOM.render(            //react renderer diffing the algorithm for updates
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
    );

reportWebVitals();


