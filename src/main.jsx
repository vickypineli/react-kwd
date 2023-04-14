//cambios en react18 en adelante (importamos libreris createRoot)
import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './index.css'


//creamos constate donde va a ir alojada toda la aplicacion
const container = document.getElementById("root");
//creamos raiz de la aplicacion
const root = createRoot(container);


//Aqui es donde renderizamos la aplicacion
root.render(<App/>);

