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

//Jugador

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

var putJugador = {
    _id: "62d22987aca25d4f289e4228",
    Equipo: "Prueba"

}

var deljugador = {
    _id: "62d22987aca25d4f289e4228",

}
// ------------------------------------


// Datos Temporada

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

var delDatosTemp = {
    _id: "62ee1c363e8456d17aad19ef"
}
// -----------------------------

//Datos Partidos

var postPartido = {

  Categoria: "Sub 08",
  Grupo: "A",
  Equipo: "L. Metropolintana",
  Jugados: 1,
  Ganados: 1,
  Empates: 0,
  Perdidos: 0,
  GF: 3,
  GC: 0,
  DG: 3,
  PTS: 3,
  Npartido: 1
}

var putPartido = {
_id:"62ea3e9058d5cf75a7e3c07c",
Grupo: "Prueba"
}

var delPartido = {
    _id:"62ea3e9058d5cf75a7e3c07c"
}
// -------------------------------

// Datos Equipos

var postEquipo = {

    Categoria: "Sub 08",
    Equipo: "probe",
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

var putEquipo = {
    _id: "62e9cfee58d5cf75a7e3bf94",
    Equipo: "base"
}

var delEquipo = {
    _id: "62e9cfee58d5cf75a7e3bf94"
}


//-------------------------------- FIN DATA


//Registro y login
const userLogin = (event) => {
    event.preventDefault()
    fetch('http://localhost:5000/login', {
        method: 'POST',
        body: JSON.stringify(data), 
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
        method: 'POST', 
        body: JSON.stringify(dataRegister),
        headers:{
            'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
}

// Jugadores
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
        method: 'POST',
        body: JSON.stringify(postJugador), 
        headers:{
            'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
}

const putJugadores = (event) => {
    event.preventDefault()
    fetch('http://localhost:5000/jugador', {
        method: 'PUT',
        body: JSON.stringify(putJugador), 
        headers:{
            'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
    
}

const deleteJugadores = (event) => {
    event.preventDefault()
    fetch('http://localhost:5000/jugador', {
        method: 'DELETE',
        body: JSON.stringify(deljugador), 
        headers:{
            'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));    
}

//Datos de la Temporada
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
        method: 'POST', 
        body: JSON.stringify(postDatosTemp), 
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
        method: 'PUT', 
        body: JSON.stringify(putDatosTemp), 
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
        method: 'DELETE', 
        body: JSON.stringify(delDatosTemp), 
        headers:{
            'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
}

// Equipos 
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

const postEquipos = (event) => {
    event.preventDefault()
    fetch('http://localhost:5000/equipos', {
        method: 'POST',
        body: JSON.stringify(postEquipo), 
        headers:{
            'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));  
}
const putEquipos = (event) => {
    event.preventDefault()
    fetch('http://localhost:5000/equipos', {
        method: 'PUT',
        body: JSON.stringify(putEquipo), 
        headers:{
            'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));  
}
const deleteEquipos = (event) => {
    event.preventDefault()
    fetch('http://localhost:5000/equipos', {
        method: 'DELETE',
        body: JSON.stringify(delEquipo), 
        headers:{
            'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));  
}

// PArtidos 

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

const postPartidos = (event) => {
    event.preventDefault()
    fetch('http://localhost:5000/partidos', {
        method: 'POST',
        body: JSON.stringify(postPartido), 
        headers:{
            'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));  
}

const putPartidos = (event) => {
    event.preventDefault()
    fetch('http://localhost:5000/partidos', {
        method: 'PUT',
        body: JSON.stringify(putPartido), 
        headers:{
            'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));  
}

const deletePartidos = (event) => {
    event.preventDefault()
    fetch('http://localhost:5000/partidos', {
        method: 'DELETE',
        body: JSON.stringify(delEquipo), 
        headers:{
            'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));  
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
                        <button className="button is-success" onClick={getDatosTempo}>Click</button>
                    </div>
                </form>
            </div>
                {/* trimmer  */}
            <div className="column is-3">
                <form action="" className="box">
                <h4>Post Datos Temporada</h4>
                    
                    <div className="field">
                        <button className="button is-success" onClick={postDatosTempo}>Click</button>
                    </div>
                </form>
            </div>
                {/* trimmer  */}

            <div className="column is-3">
                <form action="" className="box">
                <h4>put Datos Temporada</h4>
                    
                    <div className="field">
                        <button className="button is-success" onClick={putDatosTempo}>Click</button>
                    </div>
                </form>
            </div>
                {/* trimmer */}

            <div className="column is-3">
                <form action="" className="box">
                <h4>Del Datos Temporada</h4>
                    
                    <div className="field">
                        <button className="button is-success" onClick={delDatosTempo}>click</button>
                    </div>
                </form>
            </div>
                {/* trimmer  */}

        </div>

                {/* Columna fila Equipos  */}

        <div className="columns is-centered">
            <div className="column is-3">
                <form action="" className="box">
                <h4>Get Equipos</h4>
                    
                    <div className="field">
                        <button className="button is-success" onClick={getEquipos}>click</button>
                    </div>
                </form>
            </div>
                {/* trimmer  */}
            <div className="column is-3">
                <form action="" className="box">
                <h4>Post Equipos</h4>
                    
                    <div className="field">
                        <button className="button is-success" onClick={postEquipos}>click</button>
                    </div>
                </form>
            </div>
                {/* trimmer  */}

            <div className="column is-3">
                <form action="" className="box">
                <h4>Put Equipos</h4>
                    
                    <div className="field">
                        <button className="button is-success" onClick={putEquipos}>click</button>
                    </div>
                </form>
            </div>
                {/* trimmer */}

            <div className="column is-3">
                <form action="" className="box">
                <h4>Del Equipos</h4>
                    
                    <div className="field">
                        <button className="button is-success" onClick={deleteEquipos}>click</button>
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
                        <button className="button is-success" onClick={getJugadores}>click</button>
                    </div>
                </form>
            </div>
                {/* trimmer  */}
            <div className="column is-3">
                <form action="" className="box">
                <h4>Post Equipos</h4>
                    
                    <div className="field">
                        <button className="button is-success" onClick={postJugadores}>click</button>
                    </div>
                </form>
            </div>
                {/* trimmer  */}

            <div className="column is-3">
                <form action="" className="box">
                <h4>Put Equipos</h4>
                    
                    <div className="field">
                        <button className="button is-success" onClick={putJugadores}>click</button>
                    </div>
                </form>
            </div>
                {/* trimmer */}

            <div className="column is-3">
                <form action="" className="box">
                <h4>Del Equipos</h4>
                    
                    <div className="field">
                        <button className="button is-success" onClick={deleteJugadores}>click</button>
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
                        <button className="button is-success" onClick={getPartidos}>Click</button>
                    </div>
                </form>
            </div>
                {/* trimmer  */}
            <div className="column is-3">
                <form action="" className="box">
                <h4>Post Partidos</h4>
                    
                    <div className="field">
                        <button className="button is-success" onClick={postPartidos}>Click</button>
                    </div>
                </form>
            </div>
                {/* trimmer  */}

            <div className="column is-3">
                <form action="" className="box">
                <h4>Put Partidos</h4>
                    
                    <div className="field">
                        <button className="button is-success" onClick={putPartidos}>Click</button>
                    </div>
                </form>
            </div>
                {/* trimmer */}

            <div className="column is-3">
                <form action="" className="box">
                <h4>Del Partidos</h4>
                    
                    <div className="field">
                        <button className="button is-success" onClick={deletePartidos}>Click</button>
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
                        <button className="button is-success" onClick={userRegister}>click</button>
                    </div>
                </form>
            </div>
                {/* trimmer  */}
            <div className="column is-3">
                <form action="" className="box">
                    <h4>Login</h4>
                    
                    <div className="field">
                        <button className="button is-success" onClick={userLogin}>Click</button>
                    </div>
                </form>
            </div>

            

        </div>


    </div>
</div>
</div>
    );  }





    export default Login