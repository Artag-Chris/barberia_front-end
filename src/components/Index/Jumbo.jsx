import React from 'react'
import { Link } from 'react-router-dom'

function Jumbo() {
    return (
        
            <div className="text-light col imgInicio container-fluid">
                <div className="text-light  ">
                    <div className="container-fluid">
                        <div className="row contenedorSlider  align-items-center">
                            <div className="slider">

                                <h1 className="card-item ">LA ELEGANCIA</h1>
                                <p className="">es cuestión de estilo.</p>
                                <Link to="/reserva" className="boton-flex btn btn-lg btn-warning btnInicio sombra btnReserva"> Reserva Ahora </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Jumbo
