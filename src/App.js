import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,  Route, Routes, Link} from "react-router-dom";
import Login from './Vistas/Login.jsx'

const Elemento = () => <h1>casas</h1>

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


function App() {
  return (
  <div className="App">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>


  <nav className="navbar is-primary">
     <div className="container">
         <div className="navbar-brand">
           <a className="navbar-item brand-text" href="../index">
             Football Manager
             </a>
           <div className="navbar-burger burger" data-target="navMenu">
             <span></span>
             <span></span>
             <span></span>
           </div>
         </div>
         <div id="navMenu" className="navbar-menu">
           <div className="navbar-start">
             <a className="navbar-item" href="admin.">
               Home
             </a>
             <a className="navbar-item" href="login">
               login
             </a>
           </div>
         </div>
     </div>
  </nav>


  <body>
    <Routes>
      <Route path='/login' element={ <Llogin />} />
      <Route path='/elemento' element={ <Elemento />} />
      <Route path='/loginv1' element={Login} />
    </Routes>

    <div className="columns">
      <div className="column is-3 ">
        <aside className="menu is-hidden-mobile">
          <p className="menu-label">
            Datos Generales
          </p>
          <ul className="menu-list">
            <li><a className="is-active" href='admin.html'>Administrador</a></li>
            <li><a href='OpcionA.html'>Opcion A</a></li>
            <li><a href='OpcionB.html'>Opcion B</a></li>
          </ul>
        </aside>
      </div>
    </div> 
  </body>



  </div>
  );
}

export default App;
