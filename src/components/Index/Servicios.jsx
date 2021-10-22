import React from 'react'
import img2 from "../img/mostacho.png"
import img3 from "../img/corteJoven.png"
import img4 from "../img/corteVintage.png"

function Servicios() {
    return (

        <div className="container-fluid seccion-servicios imgInicio col  w-100 h-100 p-5 ">
            <h2 className="text-center  mi-estilo-h2 mi-efecto" id="Servicios">SERVICIOS</h2>

            <div className="card-deck w-md-100 row-12 col d-md-flex  ">
                <div className="card sombra radius mi-efecto col-md-4 m-1 ">
                    <img src={img2} className="card-img-top radius" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">Barba</h5>
                        <div className="row justify-content-between ">
                            <div className="col"> Corte</div>
                            <div className="col text-right"> $12000</div>
                            <div className="w-100"></div>
                            <div className="col"> Perfilado</div>
                            <div className="col text-right"> $8000</div>
                            <div className="w-100"></div>
                            <div className="col"> Afeitado</div>
                            <div className="col text-right"> $6000</div>

                        </div>

                    </div>
                </div>

                <div className="card sombra radius mi-efecto col-md-4 m-1">
                    <img src={img3} className="card-img-top radius" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">Corte</h5>
                        <div className="row justify-content-around align-items-center">
                            <div className="col-6 text-midlle">Corte</div>
                            <div className="col-6 text-right">$12000</div>
                            <div className="w-100"></div>
                            <div className="col-6 text-midlle">Corte y Peinado</div>
                            <div className="col-6 text-right">$15000</div>
                            <div className="w-100"></div>
                            <div className="col-6 text-middle">Corte y afeitado</div>
                            <div className="col-6 text-right">$14000</div>
                        </div>
                    </div>
                </div>
                <div className="card sombra radius mi-efecto col-md-4 m-1">
                    <img src={img4} className="card-img-top radius" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-center">Estilo Vintage</h5>
                        <p className="card-text text-justify">Nuestro equipo cuenta con gran experiencia, para brindarle
                            a nuestros clientes mas exigentes, ese estilo que buscan.</p>

                    </div>
                </div>
            </div>
        </div>



    )
}

export default Servicios
