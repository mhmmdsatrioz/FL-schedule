import "./App.css";
import LayoutDashboard from "./layout/layout";
import "@fontsource/roboto";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Login from "./halamanAwal/Login";
import LForm from "./halamanAwal/FormLogin";
import SignUp from "./halamanAwal/SignUp";
import Filtering from "./UserManagement/UM";
import Mstaff from "./Mstaff/Mstaff";
import Products from "./pages/Products/Products";
import AddProducts from "./pages/Products/AddProduct";
import Calendars from "./pages/Calendar/Calendars";
import Notes from "./pages/Notes/Notes";
import AddNotes from "./pages/Notes/AddNotes";
import Home from "./pages";

function App() {
  return (
    <Router>
      <div className="App wrapper">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/LForm">
            <LForm />
          </Route>
          <Route exact path="/SignUp" component={SignUp} />
          <LayoutDashboard>
            <Route exact path="/home" component={Home} />
            <Route exact path="/muser" component={Filtering} />
            <Route exact path="/mstaff" component={Mstaff} />
            <Route exact path="/product" component={Products} />
            <Route exact path="/product/add" component={AddProducts} />
            <Route exact path="/mjadwal" component={Calendars} />
            <Route exact path="/notes" component={Notes} />
            <Route exact path="/notes/add" component={AddNotes} />
          </LayoutDashboard>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
