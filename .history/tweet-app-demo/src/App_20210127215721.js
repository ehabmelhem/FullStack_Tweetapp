import "./App.css";

function App() {
  fetch("/stam").then(r=>r.json()).then()
  return (
    <div className="app">
      <h1>test</h1>
    </div>
  );
}

export default App;
