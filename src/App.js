
import './App.css';
import { /*BrowserRouter as Router,*/  Route, Routes, Link} from "react-router-dom";
import Login from './Vistas/Login.jsx';
//import Lista from './Componentes/Lista.jsx';
import Nav from './Componentes/sideBar';
import Control from './Vistas/controlPanel';


const Elemento = () => <h1>casas</h1>



function App() {
  return (

    
  <div className="App">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>


  <nav className="navbar is-primary">
     <div className="container">
         <div className="navbar-brand">
           <Link className="navbar-item brand-text" to="../index">
             Football Manager
             </Link>
           <div className="navbar-burger burger" data-target="navMenu">
             <span></span>
             <span></span>
             <span></span>
           </div>
         </div>
         <div id="navMenu" className="navbar-menu">
           <div className="navbar-start">
             <Link className="navbar-item" to="home">
               Home
             </Link>
             <Link className="navbar-item" to="login">
               login
             </Link>
           </div>
         </div>
     </div>
  </nav>

  <Routes>
      <Route path='/login' element={ <Login/ >} />
      <Route path='/home' element={ <Elemento />} />
      <Route path='/ControlPanel' element={ <Control />} />
      
    </Routes>

    

    {Nav()}



  </div>
  );
}

export default App;
