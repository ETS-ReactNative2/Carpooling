import { Route, Switch } from "react-router-dom";
import Form from "./components/Form";

function App() {
  return (
  <Switch>
    <Route path="/reset-password" component={Form}/>
  </Switch>
  );
}

export default App;
