import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddProductScreen from "./screens/AddProductScreen";
import DashboardScreen from "./screens/DashboardScreen";
import Login from "./screens/LoginScreen";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={DashboardScreen} />
        <Route exact path="/addproduct" component={AddProductScreen} />
      </Switch>
    </Router>
  );
};

export default App;
