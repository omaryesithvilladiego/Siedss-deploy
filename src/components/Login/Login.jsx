import './login.css'
import {Row, Col } from "react-bootstrap";
import styled from 'styled-components'
import { useState, useEffect } from "react";

function Login() {
    const [modulo, setModulo] = useState(null);

    const [trasladarLogin, setTrasladarLogin] = useState(false)
    const [usuario, setUsuario] = useState("")



    function handleBotton() {

        setTrasladarLogin(true)


    }

    function handleBottonreturn() {

        setTrasladarLogin(false)


    }
   





    return (
        <main>

        <div className="father">

            <div className={trasladarLogin ? "registro showregistro" : "registro"}>
            
            <div>
                <div>
                <div onClick={() => {
                    setTrasladarLogin(false)                    }} className="icon-close">
                <ion-icon name="close-outline"></ion-icon>
                </div>
                
                    <form action="">
                       
                       <div className="inputbox">
                        <input type="text" id="nombre" name="nombre" required></input>
                        <label for="nombre">Nombres</label>
                        </div>

                        <div className="inputbox">
                        <input type="text" id="apellidos" name="apellidos" required></input> <br />
                        <label for="apellidos">Apellidos</label>
                        </div>

                        <div >
                        <label for="mes">Mes de Nacimiento</label> <br />
                        <select id="mes" name="mes" required>
                            <option value="">Selecciona un mes</option>
                            <option value="1">Enero</option>
                            <option value="2">Febrero</option>
                            <option value="3">Marzo</option>
                            <option value="4">Abril</option>
                            <option value="5">Mayo</option>
                            <option value="6">Junio</option>
                            <option value="7">Julio</option>
                            <option value="8">Agosto</option>
                            <option value="9">Septiembre</option>
                            <option value="10">Octubre</option>
                            <option value="11">Noviembre</option>
                            <option value="12">Diciembre</option>
                        </select>
                        </div>


                        
                        <div className="inputbox">
                        <input type="number" id="anio" name="anio" required></input> <br />

                        <label for="anio">Año de Nacimiento</label>
                        </div>

                        <div className="inputbox">
                       
                        <input type="number" id="dianaci" name="dianaci" required></input> 
                        <label for="dia">Día de Nacimiento:</label>
                        </div>
                   <div className="inputbox">
                
                    <input type="email" id="correo" name="correo" required></input> 
                    <label for="correo">Correo Institucional:</label>
                    </div>

                    <div >
                    <label for="campus">Campus:</label> <br />
                    <select id="campus" name="campus" required>
                        <option value="">Selecciona un campus</option>
                        <option value="Bogotá">Bogotá</option>
                        <option value="Medellín">Medellín</option>
                        <option value="Cali">Cali</option>
                        <option value="Bucaramanga">Bucaramanga</option>

                    </select><br />
                    </div>

                    <div className="inputbox">

                    <input type="number" id="telefono" name="telefono" required></input> 
                    <label for="telefono">Teléfono Celular:</label> <br />
                    </div>


                    <input type="submit" className="button-registro" value="Registrarse"></input>
                    </form>
                </div>
            </div>

            </div>
                  
            <div className={trasladarLogin ? "login-content trasladar-login" : "login-content"}>


                <div>
                    <div>
                        <div onClick={() => {
                            handleBottonreturn()
                        }} className="logo-siedss">

                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className="">Iniciar Sesión</h3>

                    </div>
                </div>
                <div>

                    <div>

                        <form>

                            <div className="input-content">
                                <div className="inputbox">
                                    <ion-icon name="person-circle-outline"></ion-icon>
                                    <input
                                       required
                                        type="text"
                                        onChange={(e) => {
                                            setUsuario(e.target.value)
                                        }}
                                    /> 
                                       
                                    <label>Usuario</label>

                                </div>

                                <div className="inputbox" >
                                    <ion-icon name="lock-closed-outline"></ion-icon>

                                    <input
                                        type="password"
                                        required


                                    />

                                    <label>Contraseña</label>
                                </div>
                            </div>

                            <button onClick={() => {

                            }}
                                type="button">
                                <ion-icon name="log-in-outline"></ion-icon>
                                Iniciar sesión
                            </button>
                            <button onClick={() => {
                                handleBotton()
                            }}
                                type="button">
                                <ion-icon name="arrow-redo-outline"></ion-icon>
                                Registrate
                            </button>

                        </form>

                    </div>
                </div>




            </div>
            <Divider />
            <div className={trasladarLogin ? "hide-extra-content  extra-content" : "extra-content"}>

            </div>
        </div>

    </main>
     );
}

export default Login;

const Divider = styled.div`

    height: 32rem;
    width: 0.01rem;
    background-color: #0e748e;
    

`