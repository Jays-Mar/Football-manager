
import './App.css';
import { /*BrowserRouter as Router,*/  Route, Routes, Link} from "react-router-dom";
import Login from './Vistas/Login.jsx';
//import Lista from './Componentes/Lista.jsx';
import Control from './Vistas/controlPanel';
import Categ8 from './Vistas/Categ8.jsx';
import Categ9 from './Vistas/Categ9.jsx';
import Categ10 from './Vistas/Categ10.jsx';
import Categ11 from './Vistas/Categ11.jsx';
import Categ12 from './Vistas/Categ12.jsx';
import Home from './Componentes/Home';







function App() {
  return (

    
    <div className="App">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>



    <nav className="navbar" role="navigation" aria-label="dropdown navigation">
     <div className="container">
         <div className="navbar-item has-dropdown is-hoverable">
    <div className="navbar-link">
      CATEGORIAS
    </div>

    <div className="navbar-dropdown">
      <div className="navbar-item">
      <Link className="navbar-item" to="categ8">
      Sub 08
      </Link>
      </div>
      <div className="navbar-item">
      <Link className="navbar-item" to="categ9">
      Sub 09
      </Link>
      </div>
      <div className="navbar-item">
      <Link className="navbar-item" to="categ10">
      Sub 10
      </Link>
      </div>
      <div className="navbar-item">
      <Link className="navbar-item" to="categ11">
      Sub 11
      </Link>
      </div>
      <div className="navbar-item">
      <Link className="navbar-item" to="categ12">
      Sub 12
      </Link>
      </div>
      <hr className="navbar-divider"></hr>
      </div>
  </div>

             <span></span>
             <span></span>
             <span></span>
           </div>
         <div id="navMenu" className="navbar-menu">
           <div className="navbar-end">
             <Link className="navbar-item" to="home">
               Home
             </Link>
             <Link className="navbar-item" to="login">
               Login
             </Link>
             <Link className="navbar-item" to="Admin">
               Admin
             </Link>
           </div>
         </div>

  </nav>
  
  
  <Routes>
      <Route path='/Admin' element={ <Control />} />
      <Route path='/login' element={ <Login/ >} />
      <Route path='/categ8' element={ <Categ8/ >} />
      <Route path='/categ9' element={ <Categ9/ >} />
      <Route path='/categ10' element={ <Categ10/ >} />
      <Route path='/categ11' element={ <Categ11/ >} />
      <Route path='/categ12' element={ <Categ12/ >} />
      <Route path='/home' element={ <Home />} />
      
    </Routes>


  </div>
  );
}

export default App;
