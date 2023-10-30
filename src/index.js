import React from "react";
import "./index.css";
import { createRoot } from 'react-dom/client';
import App from './App'; // Your main React component

const root = createRoot(document.getElementById('root')); // Replace 'root' with your root element ID
root.render(<App />);
