import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/style.css';
import App from './App.jsx'

import Datadiri from './biodata.jsx'

import Menu from './component/Menu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
