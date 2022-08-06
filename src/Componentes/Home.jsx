import React from 'react'
//import Nav from '../Componentes/Home'
import Logo from "../Img/benzema.jpg";
import { /*BrowserRouter as Router,*/  Route, Routes, Link} from "react-router-dom";


const Elemento = () =>

<section className="section">
 <div className="columns is-centered">
  <div className="column is-narrow">
    <table className="table">
      <thead>
        <tr>
          <th>Team</th>
          <th><abbr title="Partidos">Partidos</abbr></th>
          <th><abbr title="Won">Ganados</abbr></th>
          <th><abbr title="Drawn">Empatados</abbr></th>
          <th><abbr title="Lost">Perdidos</abbr></th>
          <th><abbr title="Goals for">Goles</abbr></th>
          <th><abbr title="Goals against">Goles en contra</abbr></th>
          <th>Última instancia</th>
        </tr>
      </thead>
    </table>
  </div>
 </div> 
 <div className="columns is-centered">
  <div className="column is-full">
<table className="table">
      
  <thead>
    <div className="columns is-multiline is-mobile">
    <div className="box">
        <div className="column is-narrow">
        
          Goleadores
          <figure className="image is-64x64">
          <img src={Logo} alt="Logo" />
          </figure>
          <hr></hr>
    
          <th>01. Kristiano Bernardo </th>
          <progress className="progress is-primary" value="100" max="100">100%</progress>
          <th>02. Aca se importa </th>
          <progress className="progress is-link" value="80" max="100">80%</progress>
          <th>03. Aca se importa de la BDD el siguiente</th>
          <progress className="progress is-success" value="60" max="100">60%</progress>
          <th>04. Aca se importa de la BDD el siguiente</th>
          <progress className="progress is-warning" value="40" max="100">40%</progress>
          <th>05. Aca se importa de la BDD el siguiente</th>
          <progress className="progress is-danger" value="20" max="100">20%</progress>
          </div>
</div>
<div className="box">
        <div className="column">
            Tiros al Arco
           <figure className="image is-64x64">
           <img src={Logo} alt="Logo" />
            </figure>
            <hr></hr>
            <th>01. Benzema</th>
            <progress className="progress is-primary" value="100" max="100">100%</progress>
            <th>02. Aca se importa de la BDD el siguiente</th>
            <progress className="progress is-link" value="80" max="100">80%</progress>
            <th>03. Aca se importa de la BDD el siguiente</th>
            <progress className="progress is-success" value="60" max="100">60%</progress>
            <th>04. Aca se importa de la BDD el siguiente</th>
            <progress className="progress is-warning" value="40" max="100">40%</progress>
            <th>05. Aca se importa de la BDD el siguiente</th>
            <progress className="progress is-danger" value="20" max="100">20%</progress>
            </div>
</div>

<div className="box">
<div className="column">
  Pases Concretados
  <figure className="image is-64x64">
  <img src={Logo} alt="Logo" />
</figure>
<hr></hr>
<th>01. Benzema</th>
<progress className="progress is-primary" value="100" max="100">100%</progress>
<th>02. Aca se importa de la BDD el siguiente</th>
<progress className="progress is-link" value="80" max="100">80%</progress>
<th>03. Aca se importa de la BDD el siguiente</th>
<progress className="progress is-success" value="60" max="100">60%</progress>
<th>04. Aca se importa de la BDD el siguiente</th>
<progress className="progress is-warning" value="40" max="100">40%</progress>
<th>05. Aca se importa de la BDD el siguiente</th>
<progress className="progress is-danger" value="20" max="100">20%</progress>
</div>
</div>

<div className="box">
<div className="column">
  Asistidores
  <figure className="image is-64x64">
  <img src={Logo} alt="Logo" />
</figure>
<hr></hr>
<th>01. Benzema</th>
<progress className="progress is-primary" value="100" max="100">100%</progress>
<th>02. Aca se importa de la BDD el siguiente</th>
<progress className="progress is-link" value="80" max="100">80%</progress>
<th>03. Aca se importa de la BDD el siguiente</th>
<progress className="progress is-success" value="60" max="100">60%</progress>
<th>04. Aca se importa de la BDD el siguiente</th>
<progress className="progress is-warning" value="40" max="100">40%</progress>
<th>05. Aca se importa de la BDD el siguiente</th>
<progress className="progress is-danger" value="20" max="100">20%</progress>
</div>
</div>

<div className="box">
<div className="column">
  Recuperaciones
  <figure className="image is-64x64">
  <img src={Logo} alt="Logo" />
</figure>
<hr></hr>
<th>01. Benzema</th>
<progress className="progress is-primary" value="100" max="100">100%</progress>
<th>02. Aca se importa de la BDD el siguiente</th>
<progress className="progress is-link" value="80" max="100">80%</progress>
<th>03. Aca se importa de la BDD el siguiente</th>
<progress className="progress is-success" value="60" max="100">60%</progress>
<th>04. Aca se importa de la BDD el siguiente</th>
<progress className="progress is-warning" value="40" max="100">40%</progress>
<th>05. Aca se importa de la BDD el siguiente</th>
<progress className="progress is-danger" value="20" max="100">20%</progress>
</div>
</div>

<div className="box">
<div className="column">
  Salvadas
  <figure className="image is-64x64">
  <img src={Logo} alt="Logo" />
</figure>
<hr></hr>
<th>01. Benzema</th>
<progress className="progress is-primary" value="100" max="100">100%</progress>
<th>02. Aca se importa de la BDD el siguiente</th>
<progress className="progress is-link" value="80" max="100">80%</progress>
<th>03. Aca se importa de la BDD el siguiente</th>
<progress className="progress is-success" value="60" max="100">60%</progress>
<th>04. Aca se importa de la BDD el siguiente</th>
<progress className="progress is-warning" value="40" max="100">40%</progress>
<th>05. Aca se importa de la BDD el siguiente</th>
<progress className="progress is-danger" value="20" max="100">20%</progress>
            </div>
          </div>
        </div>

  </thead>
</table>
</div>
 </div> 
</section>


export default Elemento