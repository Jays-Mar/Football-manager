import React, { useState, useEffect } from 'react';import Nav from '../Componentes/Home'
import { /*BrowserRouter as Router,*/  Route, Routes, Link} from "react-router-dom";

var data = {correo: 'admin2@gmail.com',
pass: '123abc'};

const logd = (event) => {
    event.preventDefault()
    console.log("click")
    fetch(`http://localhost:5000/jugador`)
     .then((response) => response.json())
     .then((actualData) => console.log(actualData))
     .catch((err) => {
              console.log(err.message);
             })     
}

const login = () => 



<div className="hero is-primary is-fullheight">
<div className="hero-body">
    
    <div className="container">
        <div className="columns is-centered">
            <div className="column is-4">
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
                        <button className="button is-success" onClick={logd}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</div>
    
export default login