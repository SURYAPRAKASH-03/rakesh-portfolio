import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './components/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './index.css'
import Apps from './components/Apps';
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <Apps />
  </StrictMode>,
)
