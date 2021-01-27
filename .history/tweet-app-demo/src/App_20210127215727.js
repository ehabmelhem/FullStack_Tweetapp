import "./App.css";

function App() {
  fetch("/stam")
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
    });
  return (
    <div className="app">
      <h1>test</h1>
    </div>
  );
}

export default App;
