import React from "react";
import { createRoot } from 'react-dom/client';
import { TrailersProvider } from "./context/trailersContext";
import App from "./App";

import "./assets/styles/global.css";

createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <TrailersProvider>
      <App />
    </TrailersProvider>
  </React.StrictMode>
  );
