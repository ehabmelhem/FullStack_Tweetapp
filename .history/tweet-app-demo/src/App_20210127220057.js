import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [loadPage, setLoadpage] = useState("hi from client side");
  useEffect(() => {
    fetch("/stam")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setLoadpage(data.messege);
      });
  }, []);
  return (
    <div className="app">
      <h1>{loadPage}</h1>
    </div>
  );
}

export default App;
