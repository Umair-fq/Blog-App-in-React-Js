import Navbar from './Navbar.js';
import Home from './Home';
// import {PersonData} from './StakeHook.js'


function App() {
  //we can write javascript out of return
  //if we want to write inside return then we have to use curly braces
  //we can use the values which are declared outside of return in return with using curly braces
  return (
    <div className="App">
      <Navbar />
      <Home/>
      {/* <PersonData /> */}
    </div>
  );
}

export default App;
