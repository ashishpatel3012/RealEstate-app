// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Auth0Provider
  domain="dev-3jty6fcsrl7kx0ir.us.auth0.com"
  clientId="3kyqDzZQuOa63hssquKVds1zXpASFb8w"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>

  <App />

 </Auth0Provider>
 </BrowserRouter>
  
)
