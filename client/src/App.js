import "./App.css";

import Home from "./components/Home/Home";
import BusinessHours from "./components/BusinessHours/BusinessHours";
import Layout from "./components/Layout/Layout";


function App() {
  return (
      <Layout>
        <Home />
        <BusinessHours />
      </Layout>
  );
}

export default App;
