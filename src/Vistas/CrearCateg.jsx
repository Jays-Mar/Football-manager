import React from 'react'
import Nav from '../Componentes/Home'
import { /*BrowserRouter as Router,*/  Route, Routes, Link} from "react-router-dom";

const categ = () => 

<div className="hero is-primary is-fullheight">
<section className="section">
    
   <div className="container is-2">
   <div className="columns is-left">
  <div className="column is-6"> 
    <p className="title is-2">Crear categoría</p>
                <form className="box">
  <div className="field">
    <label className="label">Año:</label>
    <div className="field">
  <div className="select">
  <select>
    <option value="Sub07">Sub 07</option>
    <option value="Sub08">Sub 08</option>
    <option value="Sub09">Sub 09</option>
    <option value="Sub10">Sub 10</option>
    <option value="Sub11">Sub 11</option>
  </select>
</div>
  </div>
  </div>

  <div className="field">
    <label className="label">Cantidad de equipos:</label>
    <div className="field">
  <div className="select">
  <select>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">13</option>
    <option value="14">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
  </select>
</div>
  </div>
  </div>

  <div className="field">
  <label className="label">Seleccionar equipos:</label>
    <div className="field">
  <div className="select is-multiple">
  <select>
    <option>Equipos</option>
    <option value="MENCA SPORT">MENCA SPORT</option>
    <option value="JESUS YENDIS">JESUS YENDIS</option>
    <option value="TALENTO DE ANZ">TALENTO DE ANZ</option>
    <option value="DINAMO PUERTO">DINAMO PUERTO</option>
    <option value="JUVENIL SPORT">JUVENIL SPORT</option>
    <option value="WUILLY CALLESTER">WUILLY CALLESTER</option>
    <option value="LIGA METROPOLITANA">LIGA METROPOLITANA</option>
    <option value="ORIENTE F.C">ORIENTE F.C</option>
    <option value="ANZ. S.C">ANZ. S.C</option>
    <option value="CC CULTURAL ESPAÑOL">CC CULTURAL ESPAÑOL</option>
    <option value="PLAYA EL ANGEL">PLAYA EL ANGEL</option>
    <option value="PIRITU SPORT">PIRITU SPORT</option>
    <option value="FUND. MENCA SPORT">FUND. MENCA SPORT</option>
    <option value="DYNAMO MARGARITA">DYNAMO MARGARITA</option>
    <option value="VENALUM">VENALUM</option>
    <option value="PUMA CARABALLO">PUMA CARABALLO</option>
    <option value="ELITE MARGARITA">ELITE MARGARITA</option>
    <option value="BANCO OBRERO">BANCO OBRERO</option>
    <option value="REVELACIÓN">REVELACIÓN</option>
    <option value="KARIÑA SPORT">KARIÑA SPORT</option>
    <option value="AIFI">AIFI</option>
    <option value="REAL VICTORIA">REAL VICTORIA</option>
    <option value="PORTUGUES">PORTUGUES</option>
    <option value="UD. PUEBLO NUEVO">UD. PUEBLO NUEVO</option>
    <option value="REAL BARCELONA">REAL BARCELONA</option>
    <option value="SUR AEREOPUERTO">SUR AEREOPUERTO</option>
    <option value="OROPEZA CASTILLO">OROPEZA CASTILLO</option>
    <option value="UDPN">UDPN</option>
    <option value="AT. MARGARITA">AT. MARGARITA</option>
  </select>
  </div>
</div>


  </div>

  <button className="button is-primary">Guardar</button>
</form>
             </div>
         </div>
     </div> 
     </section>
</div>

export default categ
