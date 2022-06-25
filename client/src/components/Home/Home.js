import { useEffect, useState } from "react";

import "./Home.css";

function Home() {
  const [initialState, setInitialSate] = useState([]);

  useEffect(() => {
    fetch("/api/")
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((jsonResponse) => setInitialSate(jsonResponse.generalData[0]));
  }, []);

  console.log(initialState)

  return <div className="Home">{initialState.aboutUs}</div>;
}

export default Home;
