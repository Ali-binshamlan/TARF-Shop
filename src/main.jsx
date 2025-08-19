import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
                      <App />

          <Toaster position="top-right" richColors />
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>

);
