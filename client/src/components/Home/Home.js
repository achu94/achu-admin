import { useEffect, useState } from "react";

import CustomTable from "./CustomTable";

function Home() {
  const [initialState, setInitialSate] = useState([]);

  useEffect(() => {
    fetch("/api/")
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((jsonResponse) => setInitialSate(jsonResponse.generalData[0]));
  }, []);

  const sendData = (e) => {
    const inputObj = {
      [e.target.name]: e.target.value,
    };
  };

  return (
    <div>
      <CustomTable data={initialState} />
    </div>
  );
}

export default Home;
