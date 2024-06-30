import React from 'react'
import { Header } from './components/header/header.js'
import {Sobre} from './components/sobre/sobre.js'
import {Menu} from './components/menu/menu.js'
import { Projetos } from './components/projetos/projetos.js'
import { Habilidades } from './components/habilidades/habilidades.js'
import './App.css';

function App() {
  return (
    <section>
      <Menu></Menu>
      <Header></Header>
      <Sobre></Sobre>
      <Projetos></Projetos>
      <Habilidades></Habilidades>
    </section>
  );
}

export default App;
