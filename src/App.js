
import './App.css';
import { /*BrowserRouter as Router,*/  Route, Routes, Link} from "react-router-dom";
import Login from './Vistas/Login.jsx';
import Lista from './Componentes/Lista.jsx';
import Nav from './Componentes/sideBar'


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

  <Routes>
      <Route path='/login' element={ <Login/ >} />
      <Route path='/elemento' element={ <Elemento />} />
      
    </Routes>

    componentDidmount(){
      fetch('http://localhost:5000/jugador')
        .then( response => {return response.json(); })
        .then(response => {
          console.log(response);
        })
        .then( data => console.log(data) )
        .catch( error => console.log(error) )
    }

    {Nav()}



  </div>
  );
}

export default App;
