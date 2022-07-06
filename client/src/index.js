import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";

// import "semantic-ui-css/semantic.min.css"
import App from "./App";
import "./index.css";


// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Layout>
        <Router>
            <App />
        </Router>
    </Layout>
);
