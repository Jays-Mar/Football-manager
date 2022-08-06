import React, { useState, useEffect } from 'react';

//import Nav from '../Componentes/sideBar'
// import { /*BrowserRouter as Router,  Route, Routes,*/ Link} from "react-router-dom";
var data = {correo: 'admin2@gmail.com',
pass: '123abc'};


const oClick = (event) => {
    event.preventDefault()
    console.log("click")
    fetch(`http://localhost:5000/jugador`)
     .then((response) => response.json())
     .then((actualData) => console.log(actualData))
     .catch((err) => {
              console.log(err.message);
             })
     
}

const getJugadores = (event) => {
    event.preventDefault()
    console.log("click")
    fetch(`http://localhost:5000/jugador`)
     .then((response) => response.json())
     .then((actualData) => console.log(actualData))
     .catch((err) => {
              console.log(err.message);
             })     
}

const userLogin = (event) => {
    event.preventDefault()
    fetch('http://localhost:5000/login', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
}

const exmpl = () => {
    


return <div />;
}

const Example = (props) => {
    const [correo, setCorreo] = useState('');
const [pass, setPass] = useState('');
<input type="email" value = {correo} onInput = {e => setCorreo(e.target.value)} className="input" placeholder="john@example.com"/>

    return <div />;
  }

  const Examle = (props) => {
    const [correo, setCorreo] = useState('');
    const [pass, setPass] = useState('');

    return (
<div className="hero is-primary is-fullheight">
<div className="hero-body">
    
    <div className="container">
       
        <div className="columns is-centered">
            <div className="column is-3">
                <form action="" className="box">
                    <div className="field">
                        <label className="label">
                            Email
                        </label>
                        <div className="control has-icons-left">
                        <input type="correo" value = {correo} onInput = {e => setCorreo(e.target.value)} className="input" placeholder="john@example.com"/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control has-icons-left">
                            <input type="pass" value = {pass} onInput = {e => setPass(e.target.value)} className="input" placeholder="john@example.com"/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-lock"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">
                            <input type="checkbox" className="checkbox"/>
                            Remember me
                        </label>
                    </div>
                    <div className="field">
                        <button className="button is-success" onClick={userLogin}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</div>
    );  }


const login = () => 



<div className="hero is-primary is-fullheight">
<div className="hero-body">
    
    <div className="container">
       
        <div className="columns is-centered">
            <div className="column is-3">
                <form action="" className="box">
                    <div className="field">
                        <label className="label">
                            Email
                        </label>
                        <div className="control has-icons-left">
                            <input type="email" className="input" placeholder="john@example.com"/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control has-icons-left">
                            <input type="password" className="input" placeholder="john@example.com"/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-lock"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">
                            <input type="checkbox" className="checkbox"/>
                            Remember me
                        </label>
                    </div>
                    <div className="field">
                        <button className="button is-success" onClick={userLogin}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</div>


    
export default Examle