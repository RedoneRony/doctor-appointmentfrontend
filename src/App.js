import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Appointment from "./pages/Appointment/Appointment/Appointment";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Register from "./pages/Login/Register/Register";
import PrivateRoute from "../src/pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/appointment">
              <Appointment />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
