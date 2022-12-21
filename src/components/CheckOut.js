import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const CheckOut = () => {

    const {clear} = useContext(CartContext);
    const navigate = useNavigate()

    const finalizarCompra = () => {
        clear();
        swal({
            title: "Compra finalizada!!",
            text: "Muchas gracias por tu compra. Que dsfrutes tus zapatillas!!",
            icon: "success",
            timer: "2500"
        });
        
        navigate("/");
    }

    return (
        <div className="containCheck">
            <form className="containForm">
                <div className="containDatos">

                    <div className="datosComprador">
                        <h5>Ingresa tus datos</h5>

                        <div className="divNombres">
                            <div className="labelName">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder="Homero" required/>
                            </div>
                            <div className="labelName">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control" placeholder="Simpson" required/>
                            </div>
                        </div>

                        <div className="ciberDatos">
                            <label className="form-label">Email Address</label>
                            <input type="email" className="form-control" placeholder="homerosipson@gmail.com" required/>
                            <div className="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
                            <label className="form-label">Phone number</label>
                            <input type="text" className="form-control" placeholder="+5493515123456" required/>
                        </div>

                        <div className="btnForm">
                            <button onClick={finalizarCompra} type="submit" className="btn btn-primary">Enviar</button>
                            <button type="reset" className="btn btn-danger">Reset</button>
                        </div>

                    </div>
                    
                    <div className="containLocation">
                        <h5>Dónde enviamos tu orden?</h5>

                        <label className="form-label">Home Address</label>
                        <input type="text" className="form-control" placeholder="Av. Siempre Viva 742" required/>

                        <div className="containCity">
                            <label className="form-label">Province</label>
                            <input type="text" className="form-control" placeholder="Illinois" required/>
                            <label className="form-label">City</label>
                            <input type="text" className="form-control" placeholder="Springfield" required/>
                        </div>


                        <div className="formComentario">
                            <label className="form-label">Agregar Comentarios</label>
                            <textarea className="form-control" placeholder="Agrega referencias sobre tu domicilio, entrecalles, etc!!"></textarea>
                        </div>
                    </div>
                </div>
                
            </form>
        </div>
    );
};