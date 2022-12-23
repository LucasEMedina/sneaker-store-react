import React, { useEffect , useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { addDoc, collection, doc, getFirestore, updateDoc, serverTimestamp } from "firebase/firestore";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const CheckOut = () => {

    const { totalPrice, clear, carrito: products } = useContext(CartContext);
    const navigate = useNavigate()
    const [subiendoProductos, setSubiendoProductos] = useState(false);
    const db = getFirestore();

    console.log(products);

    const finalizarCompra = (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        const lastName = event.target[1].value;
        const email = event.target[2].value;
        const phone = event.target[3].value;
        const homeAdress = event.target[4].value;
        const province = event.target[5].value;
        const city = event.target[6].value;
    

        const venta = {
          buyer: { name, lastName, phone, email, homeAdress, province, city },
          products,
          total: totalPrice(),
          date: serverTimestamp(),
        };        
        const collectionDeVentas = collection(db, "ventas");    
        addDoc(collectionDeVentas, venta)
        .then(respuesta => alert('Tu numero de compra es '+  respuesta.id))
          .then(() => {
            setSubiendoProductos(true);
          })
          .catch((err) => console.error({ err }))
          .finally(() => {});
      };
    
      useEffect(() => {
        if (subiendoProductos) {
              
          products.forEach((element) => {
            const itemRef = doc(db, "items", element.id);
            const datosAsubir = {
              stock: element.stock - element.cantidad,
            };
            updateDoc(itemRef, datosAsubir)
              .then(() => {
                clear();
                swal({
                    title: "Compra finalizada!!",
                    text: "Muchas gracias por tu compra. Que dsfrutes tus zapatillas!!",
                    icon: "success",
                    timer: "2500"
                });
                navigate("/");                
              })
              .catch((err) => console.error(err));
          });
        }
        
      }, [subiendoProductos]);

   
    return (
        <div className="containCheck">
            <form onSubmit={finalizarCompra} className="containForm">
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

                        <p className="totalCompra"><strong>Total de la compra ${totalPrice()}</strong></p>

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


                        <div className="btnForm">
                            <button type="submit" className="btn btn-primary">Enviar</button>
                            <button type="reset" className="btn btn-danger">Reset</button>
                        </div>
                    </div>
                </div>
                
            </form>
        </div>
    );
};