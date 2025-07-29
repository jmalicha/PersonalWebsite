import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx';
import CertificatesPage from './pages/CertificatesPage.tsx';
import SeeMoreCertificates from './pages/SeeMoreCerts.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/src/pages/CertificatesPage.tsx" element={<CertificatesPage />} />
        <Route path="src/pages/SeeMoreCerts.tsx" element={<SeeMoreCertificates />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CertificatesPage from "./pages/CertificatesPage.tsx";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/certificates" element={<CertificatesPage />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );
