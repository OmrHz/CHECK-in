import Search from "./Search";
function App() {
  return (
    <div className="MyApp">
      <div className="Head">
        <h1 id="Check-in">
          Check<span>In</span>
        </h1>
        <button id="Btn_Quit">Quit</button>
      </div>
      <hr></hr>
      <h2>Welcome to</h2>
      <h1>Training Camp X</h1>
      <Search />
    </div>
  );
}

export default App;
