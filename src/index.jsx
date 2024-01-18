import React from "react"
import ReactDOM from "react-dom"
import App from "/src/App.jsx"
import { createRoot } from 'react-dom/client';
import './index.css';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);