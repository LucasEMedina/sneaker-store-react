import React from "react";
import {Link} from "react-router-dom";

const footer = () => {
    return (
        <div className="footer">
            <div className="footerDiv">
                <h5 className="footCategorias">CATEGORIAS</h5>
                <ul className="footCategoriasUl">
                    <li><Link to="/category/Jordan">Jordan</Link></li>
                    <li><Link to="/category/Runners">Runners</Link></li>
                    <li><Link to="/category/Street">Street</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default footer;