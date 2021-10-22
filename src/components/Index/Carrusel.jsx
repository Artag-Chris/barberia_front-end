import React from 'react'
import img7 from "../img/inicio.png"
import img8 from "../img/serviciosPelo.png"
import img9 from "../img/serviciosBarba.png"

function Carrusel() {
    return (
        <div class="container-fluid seccion-servicios imgInicio col  w-100 h-100 p-5">
             <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img7} className="d-block w-100 radius" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="bgText">Carlos Villagran</h5>
                            <p className="bgText">En Barber House no trabajan chusmas </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img8} className="d-block w-100 radius" alt="..."/>
                        <div className="carousel-caption d-none d-md-block ">
                            <h5 className="bgText">Darqin Mendoza</h5>
                            <p className="bgText">En esta barberia me dan pola!!!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img9} className="d-block w-100 radius" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="bgText">Jose Leal</h5>
                            <p className="bgText">Un buen corte merece un agradable perfume!!</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Carrusel
