import { useEffect, useRef, useState } from "react";
import './nav.css'
import { Link} from "react-router-dom";



function Nav({
    headerRef,
    logrosRef,
    equipoRef,
    colaboracionesRef,
    noticiasRef,
    contactoRef,
  }) {

  const [isActiveHeader, setIsActiveHeader] = useState(false);
  const [isActiveLogros, setIsActiveLogros] = useState(false);
  const [isActiveEquipo, setIsActiveEquipo] = useState(false);
  const [isActiveColaboraciones, setIsActiveColaboraciones] = useState(false);
  const [isActiveNoticias, setIsActiveNoticias] = useState(false);
  const [isActiveContacto, setIsActiveCoctacto] = useState(false);



  const navbarRef = useRef(null);
  const sidebarRef = useRef(null);


   //Asigna en falso el estado de los botones
   function setActive() {
    setIsActiveHeader(false);
    setIsActiveLogros(false);
    setIsActiveEquipo(false);
    setIsActiveColaboraciones(false);
    setIsActiveNoticias(false);
    setIsActiveCoctacto(false);
  }
  function handleHeader() {
    const header = headerRef.current;
    header.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
    setActive();
    setIsActiveHeader(true);
  }

  function handleLogros() {
    const logros = logrosRef.current;
    logros.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
    setActive();
    setIsActiveLogros(true);
  }

  function handleEquipo() {
    const equipo = equipoRef.current;
    equipo.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
    setActive();
    setIsActiveEquipo(true);
  }

  

  function handleColaboraciones() {
    const colaboraciones = colaboracionesRef.current;
    colaboraciones.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
    setActive();
    setIsActiveColaboraciones(true);
  }

  function handleNoticias() {
    const noticias = noticiasRef.current;
    noticias.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
    setActive();
    setIsActiveNoticias(true);
  }

  function handleContacto() {
    const contacto = contactoRef.current;
    contacto.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
    setActive();
    setIsActiveCoctacto(true);
  }


  
  //Efecto de scroll para ubicar menu

  useEffect(() => {
    console.log(headerRef.current)
    window.addEventListener("scroll", () => {

      var screen = window.innerHeight * -1;

      //Pages
      let firstPage = headerRef.current.getBoundingClientRect().top;
      let secondPage = logrosRef.current.getBoundingClientRect().top;
      let thirdPage = equipoRef.current.getBoundingClientRect().top;
      let fourthPage = colaboracionesRef.current.getBoundingClientRect().top;
      let fifthPage = noticiasRef.current.getBoundingClientRect().top;
      let sixthPage = contactoRef.current.getBoundingClientRect().top;



      if ((firstPage <= 0) && (firstPage >= screen)) {
        setActive();
        setIsActiveHeader(true);
      } 

      if ((secondPage <= 100) && (secondPage >= screen * 2)) {
        setActive();
        setIsActiveLogros(true);
      } 
      if ((thirdPage <= 100) && (thirdPage >= screen * 3)) {
        setActive();
        setIsActiveEquipo(true);
      } 

      if ((fourthPage <= 100) && (fourthPage >= screen * 4)) {
        setActive();
        setIsActiveColaboraciones(true);
      } 

      if ((fifthPage <= 100) && (fifthPage >= screen * 5)) {
        setActive();
        setIsActiveNoticias(true);
      }
      if ((sixthPage <= 100) && (sixthPage >= screen * 6)) {
        setActive();
        setIsActiveCoctacto(true);
      } 

      return (() => {
        setIsActiveHeader(false);
        setIsActiveLogros(false);
        setIsActiveEquipo(false);
        setIsActiveColaboraciones(false);
        setIsActiveNoticias(false);
        setIsActiveCoctacto(false);
        
      })




    });
  }, [setIsActiveHeader, headerRef, equipoRef, contactoRef, logrosRef, noticiasRef, colaboracionesRef]);


 



    return ( 
        <div
        sx={{
          width: "100%",
          overflow: "hidden",
  
          "&:hover": {},
        }}
      >
        <div
          onClick={() => {
            const nav = navbarRef.current;
            const sidebar = sidebarRef.current;
            sidebar.classList.remove("addAnimation");
            sidebar.classList.toggle("addAnimationBack");
  
            setTimeout(() => {
              nav.classList.remove("show");
            }, 50);
            document.body.style.overflowY = "";
          }}
          ref={navbarRef}
          className="navbar"
        >
          <div ref={sidebarRef} className="sidebar">
            <div
              onClick={() => {
                const nav = navbarRef.current;
                const sidebar = sidebarRef.current;
                sidebar.classList.remove("addAnimation");
                sidebar.classList.toggle("addAnimationBack");
  
                setTimeout(() => {
                  nav.classList.remove("show");
                }, 50);
  
                document.body.style.overflowY = "";
              }}
              className="menu-button position-bar mebu-bar"
            >
              {" "}
              {/* <MenuIcon className="icon-menu" /> */}
              <span className="icon-menu-bar">|||</span>
              
            </div>
  
            <div className="container-button">
              <div
                onClick={() => {
                  handleHeader();
                }}
                className="nav bar-button bar-button nav"
              >
                {/* <HomeIcon /> */}
                <h5>Inicio</h5>
              </div>
  
              <div
                onClick={() => {
                  handleLogros();
                }}
                className="nav bar-button bar-button nav"
              >
                {/* <Groups2Icon /> */}
                <h5>logros</h5>
              </div>
  
              <div
                onClick={() => {
                  handleEquipo();
                }}
                className="nav bar-button bar-button nav"
              >
                {/* <PermPhoneMsgIcon /> */}
                <h5>Equipo</h5>
              </div>
  
              <div
                onClick={() => {
                  handleColaboraciones();
                }}
                className="nav bar-button bar-button nav"
              >
                {/* <AccountTreeIcon /> */}
                <h5>Colaboraciones</h5>
              </div>
  
              <div
                onClick={() => {
                  handleNoticias();
                }}
                className="nav bar-button bar-button nav"
              >
                {/* <NewspaperIcon /> */}
                <h5>noticias</h5>
              </div>
  
              <div
                onClick={() => {
                  handleContacto();
                }}
                className="nav bar-button bar-button nav"
              >
                {/* <Diversity3Icon /> */}
                <h5>contacto</h5>
              </div>

              
            </div>
          </div>
        </div>
  
        <div className="content-header">
          <div>
            <div className="header">
              <div
                onClick={() => {
                  const nav = navbarRef.current;
                  const sidebar = sidebarRef.current;
                  nav.classList.toggle("show");
                  document.body.style.overflowY = "hidden";
                  sidebar.classList.remove("addAnimationBack");
                  sidebar.classList.toggle("addAnimation");
                }}
                className="menu-button position-bar mebu-bar"
              >
                {" "}
                {/* <MenuIcon className="icon-menu" /> */}
                <span className="icon-menu-bar">|||</span>
              </div>
  
              
              
  
              <div className="position-home">
              
            
              
                <div
                  onClick={() => {
                    handleHeader();
                  }}
                  className={
                    isActiveHeader ? "active menu-button  nav " : "menu-button  nav"
                  }
                >
                  {/* <HomeIcon /> */}
                  <h5>Inicio</h5>
                </div>
  
                <div
                  onClick={() => {
                    handleLogros();
                  }}
                  className={
                    isActiveLogros
                      ? "active menu-button  nav hiiden"
                      : "menu-button  nav hiiden"
                  }
                >
                  {/* <Groups2Icon
                    style={{
                      fontSize: "1.9rem",
                    }}
                  /> */}
                  <h5>Logros</h5>
                </div>
  
                <div
                  onClick={() => {
                    handleEquipo();
                  }}
                  className={
                    isActiveEquipo
                      ? "active menu-button  nav hiiden"
                      : "menu-button  nav hiiden"
                  }
                >
                  {/* <PermPhoneMsgIcon /> */}
                  <h5>Equipo</h5>
                </div>
                <div
                  onClick={() => {
                    handleColaboraciones();
                  }}
                  className={
                    isActiveColaboraciones
                      ? "active menu-button  nav hiiden"
                      : "menu-button  nav hiiden"
                  }
                >
                  {/* <AccountTreeIcon /> */}
                  <h5>Colaboraciones</h5>
                </div>
  
                <div
                  onClick={() => {
                    handleNoticias();
                  }}
                  className={
                    isActiveNoticias
                      ? "active menu-button  nav hiiden"
                      : "menu-button  nav hiiden"
                  }
                >
                  {/* <NewspaperIcon /> */}
                  <h5>Noticias</h5>
                </div>

                <div
                  onClick={() => {
                    handleContacto();
                  }}
                  className={
                    isActiveContacto
                      ? "active menu-button  nav hiiden"
                      : "menu-button  nav hiiden"
                  }
                >
                  {/* <NewspaperIcon /> */}
                  <h5>Contacto</h5>
                </div>
  
                 <div 
                
                  className={
                    
                      "menu-button-login  nav"
                    
                  }
                >
                   {/* <Diversity3Icon />  */}
                   <Link style={{
                    textDecoration:'none'
                   }} to="/login"><h5 style={{
                    color:'black'
                   }}>IniciarSesión</h5></Link> 
                </div> 

                   
              </div>
            </div>
          </div>
        </div>
      </div> );
}

export default Nav;