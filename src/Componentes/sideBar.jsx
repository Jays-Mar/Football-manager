import React from 'react'
import { /*BrowserRouter as Router,*/  Route, Routes, Link} from "react-router-dom";


const Side = () => 

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

export default Side