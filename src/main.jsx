import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css"; // for non-minified version
import './index.css'; // Import your CSS file here
import './translations/i18n.js'; // Import the i18n configuration

import {
  RouterProvider,
} from "react-router-dom";

import './index.css'

import router from "./Routers/router.jsx"


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
