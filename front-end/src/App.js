

import './App.css';

import Login from './components/login/login';
import Registration from './components/registration/registration';
import {
  BrowserRouter as Router,
 
  Route,
  Routes
} from "react-router-dom";
import AdminRegistration from './components/registration/adminregistration';

function App() {
  return (
    <div className="App">
     

       <Router>
       
         <Routes>
           
           <Route exact path='/' element={<Registration/>}/>
           <Route exact path='/login' element={<Login/>}/>
           <Route exact path='/adminregistration' element={<AdminRegistration/>}/>
           

         </Routes>
       </Router>
      
      
      
    </div>
  );
}

export default App;
