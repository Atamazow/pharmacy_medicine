import Header from "./components/Header";
import "./scss/app.scss";
import Home from "./components/Home";

function App() {
  return (
    <div className="wrapper">
      <Header/>
        <Home/>
    </div>
  );
}

export default App;
