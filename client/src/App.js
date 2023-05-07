import "./App.css";
import { Home, Landing, Detail, Form } from "./Views";
import NavBar from "./components/NavBar/NavBar";
import { Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={Landing} />
      <Route path="/home" render={() => <Home />} />
      <Route exact path="/detail" component={Detail} />
      <Route exact path="/create" component={Form} />
    </div>
  );
}

export default App;
