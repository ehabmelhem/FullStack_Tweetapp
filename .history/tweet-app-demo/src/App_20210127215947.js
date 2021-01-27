import "./App.css";
import { useEffect,useState } from "react";

function App() {
  const [loadPage,setLoadpage]=useState("hi from ")
  useEffect(() => {
    fetch("/stam")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div className="app">
      <h1>test</h1>
    </div>
  );
}

export default App;
