import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./Context/AuthProvider.jsx";

// Get the root element
const rootElement = document.getElementById("root");

// Check if rootElement is found
if (rootElement) {
  const root = createRoot(rootElement); // Create a root for React 18
  root.render(
    <StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </StrictMode>
  );
} else {
  console.error('Element with id "root" not found');
}
