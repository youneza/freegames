
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Menu from './components/menu'
import Home from './components/home'
import Browsergames from './components/Browsergames'
import News from './components/News'
import Pcgame from "./components/Pcgame";
function App() {
  return (
    <div className="App">
   
    <Router>
    <Menu/>
      <Routes>
        <Route exact path="" element={<Home/>}/>
        <Route path="/Browsergames" element={<Browsergames/>} />
        <Route path="/News" element={<News/>} />
        <Route path="/Pcgame" element={<Pcgame/>} />
      </Routes>
    </Router>

   
     

  

 

   


   
    </div>
  );
}

export default App;
