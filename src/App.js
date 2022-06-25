
import './App.css';
import { /*BrowserRouter as Router,*/  Route, Routes, Link} from "react-router-dom";
import Login from './Vistas/Login.jsx';

const Elemento = () => <h1>casas</h1>

/*
const Llogin = () => {
  const login = '/login'

  return(
    <div class="hero is-primary is-fullheight">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-4">
                        <form action="" class="box">
                            <div class="field">
                                <label class="label">
                                    Email
                                </label>
                                <div class="control has-icons-left">
                                    <input type="email" class="input" placeholder="john@example.com"/>
                                    <span class="icon is-small is-left">
                                        <i class="fa fa-envelope"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Password</label>
                                <div class="control has-icons-left">
                                    <input type="password" class="input" placeholder="john@example.com"/>
                                    <span class="icon is-small is-left">
                                        <i class="fa fa-lock"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">
                                    <input type="checkbox" class="checkbox"/>
                                    Remember me
                                </label>
                            </div>
                            <div class="field">
                                <button class="button is-success">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )

}
*/


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
             <Link className="navbar-item" to="admin.">
               Home
             </Link>
             <Link className="navbar-item" to="login">
               login
             </Link>
           </div>
         </div>
     </div>
  </nav>


  <body>
    <Routes>
      <Route path='/login' element={ <Login/ >} />
      <Route path='/elemento' element={ <Elemento />} />
    </Routes>

    <div className="columns">
      <div className="column is-3 ">
        <aside className="menu is-hidden-mobile">
          <p className="menu-label">
            Datos Generales
          </p>
          <ul className="menu-list">
            <li><Link className="is-active" to='admin.html'>Administrador</Link></li>
            <li><Link to='OpcionA.html'>Opcion A</Link></li>
            <li><Link to='OpcionB.html'>Opcion B</Link></li>
          </ul>
        </aside>
      </div>
    </div> 
  </body>



  </div>
  );
}

export default App;
