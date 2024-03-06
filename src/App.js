
import './App.css';

import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import Home from './Components/Home';
import Deposit from './Components/deposit';
import Withdraw from './Components/withdraw';
import CreateAccount from './Components/CreateAccount';
import { UserContext } from './context';
import { HashRouter } from "react-router-dom";
import { Routes, Route, Link} from "react-router-dom";
import AllData from './Components/alldata';

function App() {
return (
  <>
  <HashRouter>
    <NavBar/>   
          
      <UserContext.Provider value={{users:[{name:'Abel',email:'abel@mit.edu',password:'secret1234',balance:100, isLogged:'true'}]}}> 
              
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/CreateAccount/" element={<CreateAccount />} /> 
               <Route path="/Login/" element={<Login />} />
               <Route path="/Deposit/" element={<Deposit />} />
                 <Route path="/Withdraw/" element={<Withdraw />} />
                <Route path="/AllData/" element={<AllData />} />  
              </Routes>
      </UserContext.Provider>
      
  </HashRouter>
  </>
);
}

export default App;
