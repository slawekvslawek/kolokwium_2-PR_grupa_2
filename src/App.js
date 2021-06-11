import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Posts from "./components/posts";
import Home from "./components/SNhome";
import SNnavbar from "./components/common/SNnavbar";
function App() {

  return (
      <div className="container-fluid">
        <SNnavbar />
        <div className="container">
            <div className="content">
                <Switch>
                    <Route path="/" exact component={Posts} />
                </Switch>
            </div>
        </div>
      </div>
  );
}

export default App;
