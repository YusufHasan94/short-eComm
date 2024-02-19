import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="max-w-[1440px] my-0 mx-10 md:mx-auto">
      {token ? <Home token={token} /> : <Login setToken={setToken} />}
    </div>
  );
}

export default App;
