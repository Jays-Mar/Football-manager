import React, { useState, useEffect } from 'react';

var data = {correo: 'admin2@gmail.com',
pass: '123abc'};
var dataRegister = {

    correo: 'profesor1',
    usuario: 'profea',
    pass: 'control',
    tipo: 'entrenador',
    equipo: 'menca'
}

var postJugador = {

    Categoria: "Sub 08",
    Equipo: "MENCA FC",
    Goles: 1,
    N: 1,
    Nacimiento: {
      $date: {
        $numberLong: "1285993800000"
      }
    },
    NequiNjugador: "A11",
    Nequipo: "A1",
    Njugador: 11,
    Rank: 3,
    nombeJugador: "Jose Perez",
    RematesA: 0,
    Asistencias: 0,
    MinutosJu: 0,
    Faltas: 0,
}

var postDatosTemp = {

    Categoria: "sub02",
    Jornada: "1",
    PartidaJornada: 2,
    Equipo1: "casa",
    Golese1: 52,
    Equipo2: "22",
    Golese2: 33,
    Campo: "casad",
    hora: "11:00",
    TiempoJuego: 60,
    RematesA1: 5,
    RematesA2: 5,
    TarjetasAE1: 5,
    TarjetasRE2: 5,
    TarjetasRe2: 5
}

var putDatosTemp = {
    _id: "62ee1c363e8456d17aad19ef",
    Categoria: 'sub03'
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

const userRegister = (event) => {
    event.preventDefault()
    fetch('http://localhost:5000/register', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(dataRegister), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
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

const postJugadores = (event) => {
    event.preventDefault()
    fetch('http://localhost:5000/jugador', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(postJugador), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
}

const getDatosTempo = (event) => {
    event.preventDefault()
    console.log("click")
    fetch(`http://localhost:5000/datosTempo`)
     .then((response) => response.json())
     .then((actualData) => console.log(actualData))
     .catch((err) => {
              console.log(err.message);
             })     
}

const postDatosTempo = (event) => {
    event.preventDefault()
    fetch('http://localhost:5000/datosTempo', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(postDatosTemp), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
}

const putDatosTempo = (event) => {
    event.preventDefault()
    fetch('http://localhost:5000/datosTempo', {
        method: 'PUT', // or 'PUT'
        body: JSON.stringify(putDatosTemp), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
}

const delDatosTempo = (event) => {
    event.preventDefault()
    fetch('http://localhost:5000/datosTempo', {
        method: 'DELETE', // or 'PUT'
        body: JSON.stringify(putDatosTemp), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
}


const getEquipos = (event) => {
    event.preventDefault()
    console.log("click")
    fetch(`http://localhost:5000/equipos`)
     .then((response) => response.json())
     .then((actualData) => console.log(actualData))
     .catch((err) => {
              console.log(err.message);
             })     
}

const getPartidos = (event) => {
    event.preventDefault()
    console.log("click")
    fetch(`http://localhost:5000/partidos`)
     .then((response) => response.json())
     .then((actualData) => console.log(actualData))
     .catch((err) => {
              console.log(err.message);
             })     
}

const Login = (props) => {
    const [correo, setCorreo] = useState('');
    const [pass, setPass] = useState('');

    return (
<div className="hero is-primary is-fullheight">
<div className="hero-body">
    
    <div className="container">
        <div className="columns is-centered">
            <div className="column is-3">
                <form action="" className="box">
                <h4>Get Datos Temporada</h4>

                    <div className="field">
                        <label className="label">
                            Email
                        </label>
                        <div className=" has-icons-left">
                        <input type="correo" value = {correo} onInput = {e => setCorreo(e.target.value)} className="input" placeholder="john@example.com"/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className=" has-icons-left">
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
                        <button className="button is-success" onClick={getDatosTempo}>Login</button>
                    </div>
                </form>
            </div>
                {/* trimmer  */}
            <div className="column is-3">
                <form action="" className="box">
                <h4>Post Datos Temporada</h4>
                    <div className="field">
                        <label className="label">
                            Email
                        </label>
                        <div className=" has-icons-left">
                        <input type="correo" value = {correo} onInput = {e => setCorreo(e.target.value)} className="input" placeholder="john@example.com"/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className=" has-icons-left">
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
                        <button className="button is-success" onClick={postDatosTempo}>Login</button>
                    </div>
                </form>
            </div>
                {/* trimmer  */}

            <div className="column is-3">
                <form action="" className="box">
                <h4>put Datos Temporada</h4>
                    <div className="field">
                        <label className="label">
                            Email
                        </label>
                        <div className=" has-icons-left">
                        <input type="correo" value = {correo} onInput = {e => setCorreo(e.target.value)} className="input" placeholder="john@example.com"/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className=" has-icons-left">
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
                        <button className="button is-success" onClick={putDatosTempo}>Login</button>
                    </div>
                </form>
            </div>
                {/* trimmer */}

            <div className="column is-3">
                <form action="" className="box">
                <h4>Del Datos Temporada</h4>
                    <div className="field">
                        <label className="label">
                            Email
                        </label>
                        <div className=" has-icons-left">
                        <input type="correo" value = {correo} onInput = {e => setCorreo(e.target.value)} className="input" placeholder="john@example.com"/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className=" has-icons-left">
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
                        <button className="button is-success" onClick={delDatosTempo}>Login</button>
                    </div>
                </form>
            </div>
                {/* trimmer  */}

        </div>

                {/* Columna fila 2  */}

        <div className="columns is-centered">
            <div className="column is-3">
                <form action="" className="box">
                <h4>Get Equipos</h4>
                    <div className="field">
                        <label className="label">
                            Email
                        </label>
                        <div className=" has-icons-left">
                        <input type="correo" value = {correo} onInput = {e => setCorreo(e.target.value)} className="input" placeholder="john@example.com"/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className=" has-icons-left">
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
                {/* trimmer  */}
            <div className="column is-3">
                <form action="" className="box">
                <h4>Post Equipos</h4>
                    <div className="field">
                        <label className="label">
                            Email
                        </label>
                        <div className=" has-icons-left">
                        <input type="correo" value = {correo} onInput = {e => setCorreo(e.target.value)} className="input" placeholder="john@example.com"/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className=" has-icons-left">
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
                {/* trimmer  */}

            <div className="column is-3">
                <form action="" className="box">
                <h4>Put Equipos</h4>
                    <div className="field">
                        <label className="label">
                            Email
                        </label>
                        <div className=" has-icons-left">
                        <input type="correo" value = {correo} onInput = {e => setCorreo(e.target.value)} className="input" placeholder="john@example.com"/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className=" has-icons-left">
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
                {/* trimmer */}

            <div className="column is-3">
                <form action="" className="box">
                <h4>Del Equipos</h4>
                    <div className="field">
                        <label className="label">
                            Email
                        </label>
                        <div className=" has-icons-left">
                        <input type="correo" value = {correo} onInput = {e => setCorreo(e.target.value)} className="input" placeholder="john@example.com"/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className=" has-icons-left">
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
                {/* trimmer  */}

        </div>

                {/* Columna fila 3  */}

        <div className="columns is-centered">
            <div className="column is-3">
                <form action="" className="box">
                <h4>Get Jugadores Caza</h4>
                    <div className="field">
                        <label className="label">
                            Email
                        </label>
                        <div className=" has-icons-left">
                        <input type="correo" value = {correo} onInput = {e => setCorreo(e.target.value)} className="input" placeholder="john@example.com"/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className=" has-icons-left">
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
                        <button className="button is-success" onClick={getJugadores}>Login</button>
                    </div>
                </form>
            </div>
                {/* trimmer  */}
            <div className="column is-3">
                <form action="" className="box">
                <h4>Post Equipos</h4>
                    <div className="field">
                        <label className="label">
                            Email
                        </label>
                        <div className=" has-icons-left">
                        <input type="correo" value = {correo} onInput = {e => setCorreo(e.target.value)} className="input" placeholder="john@example.com"/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className=" has-icons-left">
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
                {/* trimmer  */}

            <div className="column is-3">
                <form action="" className="box">
                <h4>Put Equipos</h4>
                    <div className="field">
                        <label className="label">
                            Email
                        </label>
                        <div className=" has-icons-left">
                        <input type="correo" value = {correo} onInput = {e => setCorreo(e.target.value)} className="input" placeholder="john@example.com"/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className=" has-icons-left">
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
                {/* trimmer */}

            <div className="column is-3">
                <form action="" className="box">
                <h4>Del Equipos</h4>
                    <div className="field">
                        <label className="label">
                            Email
                        </label>
                        <div className=" has-icons-left">
                        <input type="correo" value = {correo} onInput = {e => setCorreo(e.target.value)} className="input" placeholder="john@example.com"/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className=" has-icons-left">
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
                {/* trimmer  */}

        </div>

                {/* Columna fila 3  */}

        <div className="columns is-centered">
            <div className="column is-3">
                <form action="" className="box">
                <h4>Get Partidos</h4>
                    <div className="field">
                        <label className="label">
                            Email
                        </label>
                        <div className=" has-icons-left">
                        <input type="correo" value = {correo} onInput = {e => setCorreo(e.target.value)} className="input" placeholder="john@example.com"/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className=" has-icons-left">
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
                {/* trimmer  */}
            <div className="column is-3">
                <form action="" className="box">
                <h4>Post Partidos</h4>
                    <div className="field">
                        <label className="label">
                            Email
                        </label>
                        <div className=" has-icons-left">
                        <input type="correo" value = {correo} onInput = {e => setCorreo(e.target.value)} className="input" placeholder="john@example.com"/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className=" has-icons-left">
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
                {/* trimmer  */}

            <div className="column is-3">
                <form action="" className="box">
                <h4>Put Partidos</h4>
                    <div className="field">
                        <label className="label">
                            Email
                        </label>
                        <div className=" has-icons-left">
                        <input type="correo" value = {correo} onInput = {e => setCorreo(e.target.value)} className="input" placeholder="john@example.com"/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className=" has-icons-left">
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
                {/* trimmer */}

            <div className="column is-3">
                <form action="" className="box">
                <h4>Del Partidos</h4>
                    <div className="field">
                        <label className="label">
                            Email
                        </label>
                        <div className=" has-icons-left">
                        <input type="correo" value = {correo} onInput = {e => setCorreo(e.target.value)} className="input" placeholder="john@example.com"/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className=" has-icons-left">
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
                {/* trimmer  */}

        </div>

                {/* Columna fila 3  */}

                <div className="columns is-centered">
            <div className="column is-3">
                <form action="" className="box">
                <h4>Registro</h4>
                    <div className="field">
                        <label className="label">
                            Email
                        </label>
                        <div className=" has-icons-left">
                        <input type="correo" value = {correo} onInput = {e => setCorreo(e.target.value)} className="input" placeholder="john@example.com"/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className=" has-icons-left">
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
                        <button className="button is-success" onClick={userRegister}>Login</button>
                    </div>
                </form>
            </div>
                {/* trimmer  */}
            <div className="column is-3">
                <form action="" className="box">
                    <h4>Login</h4>
                    <div className="field">
                        <label className="label">
                            Email
                        </label>
                        <div className=" has-icons-left">
                        <input type="correo" value = {correo} onInput = {e => setCorreo(e.target.value)} className="input" placeholder="john@example.com"/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className=" has-icons-left">
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





    export default Login