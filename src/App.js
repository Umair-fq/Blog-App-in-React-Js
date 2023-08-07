import Navbar from './Navbar.js';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import {PersonData} from './StakeHook.js'
import CreateBlog from './CreateBlog';
import BlogDetails from './BlogDetails.js';
import NotFound from './NotFound';


function App() {
  //we can write javascript out of return
  //if we want to write inside return then we have to use curly braces
  //we can use the values which are declared outside of return in return with using curly braces
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/create">
          <CreateBlog />
        </Route>
        <Route exact path="/blog/:id">
          <BlogDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      {/* <PersonData /> */}
    </div>
    </Router>
  );
}

export default App;
