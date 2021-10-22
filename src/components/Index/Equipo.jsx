import React from 'react'
import img5 from "../img/barber2.png"
import img6 from "../img/barber1.png"

function Equipo() {
    return (
        <div className="container-fluid seccion-servicios imgInicio col  w-100 h-100 p-5">
           <div class="container seccion-miEquipo w-100 h-100 imgInicio">
                <h2 class="text-center  p1 mi-estilo-h2 mi-efecto" id="equipo">MI EQUIPO</h2>

                <div class="card-deck mi-efecto card-deck w-md-100 row-md-12 col d-md-flex">
                    <div class="card sombra radius col-md-6 m-1">
                        <img src={img5} class="card-img-top radius p-3" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title text-center">Pepe Reina</h5>
                            <p class="card-text text.justify">5 años de experiencia profecional, ganador del Barber
                                festival pereira</p>
                        </div>
                    </div>
                    <div class="card sombra radius mi-efecto col-md-6 m-1">
                        <img src={img6} class="card-img-top radius p-3" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title text-center">Carles Puyol</h5>
                            <p class="card-text text-justify">8 años de experiencia, graduado de la escuela de barberos
                                a la edad de 16 años con las mejores calificaciones</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Equipo
