import estilos from  './landing.module.css'
import { useRef } from 'react'
import Header from './LandingPages/Inicio'
import Logros from './LandingPages/Logros'
import Equipo from './LandingPages/Equipo'
import Colaboraciones from './LandingPages/Colaboraciones'
import Noticias from './LandingPages/Noticias'
import Contacto from './LandingPages/Contacto'
import Nav from './Navegacion/Nav'

function Landing() {

  const colaboracionesRef = useRef(null)
  const headerRef = useRef(null)
  const logrosRef = useRef(null)
  const equipoRef = useRef(null)
  const noticiasRef = useRef(null)
  const contactoRef = useRef(null)

  //No pasar al Header
  const navRef = useRef(null)




  return ( 
  <>
    <div>
      <div ref={navRef} className={estilos.nav}><Nav headerRef={headerRef} logrosRef={logrosRef} equipoRef={equipoRef} colaboracionesRef={colaboracionesRef} noticiasRef={noticiasRef} contactoRef={contactoRef}/></div>
      <div ref={headerRef} className={estilos.header}><Header /></div>
      <div ref={logrosRef} className={estilos.logros}><Logros /></div>
      <div ref={equipoRef} className={estilos.equipo}><Equipo /></div>
      <div ref={colaboracionesRef} className={estilos.colaboraciones}><Colaboraciones /></div>
      <div ref={noticiasRef} className={estilos.noticias}><Noticias /></div>
      <div ref={contactoRef} className={estilos.noticias}><Contacto /></div>
    </div>
  </> );
}

export default Landing;