import React from 'react'
import imgBH from "../img/logoBH.png"
import facebook from "../img/facebook-square-brands.svg"
import instagram from "../img/instagram-square-brands.svg"
import twitter from "../img/twitter-brands.svg"
import Modal1 from './Modal1'
const servicios = [{
    id: 1,
    servicio: "Corte",
    precio: "12,000",
    duracion: "40 min",
    tratamiento: "Corte, Lavado y masaje"
}, {
    id: 2,
    servicio: "Corte Y Barba",
    precio: "20.000",
    duracion: "60 Min",
    tratamiento: "Corte, Lavado y masaje."
}, {
    id: 3,
    servicio: "Barba",
    precio: "12.000",
    duracion: "30 Min",
    tratamiento: "Perfilado y mascarillas."
}, {
    id: 4,
    servicio: "Full service",
    precio: "45.000",
    duracion: "1 Hra y 25 Min",
    tratamiento: "Corte, Lavado y limpieza facial."
}]


function Reserva() {
    const productos = servicios.map(producto => (<div key={producto.servicio} className="card-body" id={producto.id} >
        <h5 className="card-title">1. {producto.servicio} </h5>
        <p className="card-text">$ {producto.precio} | {producto.duracion} <br /> {producto.tratamiento}
        </p>
        <button type="button" className="btn btn-secondary"
            data-toggle="modal" data-target={`#id${producto.id}`} >
            RESERVAR
        </button>
        <Modal1 id={`id${producto.id}`} servicio={producto.servicio} precio={producto.precio} duracion={producto.duracion} />      </div>
    ))

    return (
        <div className="container-fluid"> 
            <div className="row">
                <div className=" text-justify">
                    <div className="" >
                        <div className="text-justify p-5 m-5">
                            Bienvenidos a la mejor barbería de la ciudad, con nosotros podrás encontrar los mejores cortes y
                            refleja lo que tu quieres ser hoy, un hombre de grandeza. Nuestro conocimiento y experiencia le
                            brindan
                            al hombre una oferta sofisticada, práctica y económica. Barber House para hombres de grandeza.
                        </div>
                        <div className="p-3">
                            <br />
                            <button type="button" className="btn btn-outline-dark btn-sm">SERVICIOS</button>
                            <button type="button" className="btn btn-dark btn-sm">PROFESIONALES</button>
                        </div>
                    </div>
                    <div className="p-3">
                        <div>
                            <input type="search" name="busqueda" id="search" placeholder="¿Que barbero buscas?"
                                className="form-control mb-1" style={{ borderRadius: "5px" }} />
                        </div>

                        <div>
                            Haz clic en un profesional para ver los servicios que realiza.
                        </div>
                        <hr />
                        <div>
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h2 className="mb-0">
                                            <button className="btn btn-link btn-block text-left" type="button"
                                                data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                                BARBERO #1
                                            </button>
                                        </h2>
                                    </div>

                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                        data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm">
                                                        <div className="card ">
                                                            {productos }
                                                            
                                                            
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingTwo">
                                                <h2 className="mb-0">
                                                    <button className="btn btn-link btn-block text-left collapsed" type="button"
                                                        data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                                        aria-controls="collapseTwo">
                                                        BARBERO #2
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                                data-parent="#accordionExample">
                                                <div className="card-body card-deck  w-md-100 row-md-12 col d-md-flex">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-sm">
                                                                <div className="card ">
                                                                    <div className="card-body">
                                                                        <h5 className="card-title">1. {servicios.servicio} </h5>
                                                                        <p className="card-text">$12.000 | 40 Min <br /> Corte, Lavado y
                                                                            masaje.
                                                                        </p>
                                                                        <button type="button" className="btn btn-secondary"
                                                                            data-toggle="modal" data-target="#exampleModal">
                                                                            RESERVAR
                                                                        </button>                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm">
                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        <h5 className="card-title">2. CORTE Y BARBA</h5>
                                                                        <p className="card-text">$20.000 | 60 Min <br /> Corte, Lavado y
                                                                            masaje.
                                                                        </p>
                                                                        <button type="button" className="btn btn-secondary"
                                                                            data-toggle="modal" data-target="#exampleModal">
                                                                            RESERVAR
                                                                        </button>                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="w-100"></div>
                                                            <div className="col">
                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        <h5 className="card-title">3. BARBA</h5>
                                                                        <p className="card-text">$12.000 | 30 Min <br /> Perfilado y
                                                                            mascarillas.
                                                                        </p>
                                                                        <button type="button" className="btn btn-secondary"
                                                                            data-toggle="modal" data-target="#exampleModal">
                                                                            RESERVAR
                                                                        </button>                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        <h5 className="card-title">4. FULL SERVICE</h5>
                                                                        <p className="card-text">$45.000 | 1 Hra y 25 Min <br /> Corte,
                                                                            Lavado y
                                                                            limpieza facial.
                                                                        </p>
                                                                        <button type="button" className="btn btn-secondary"
                                                                            data-toggle="modal" data-target="#exampleModal">
                                                                            RESERVAR
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className=" col">


                            <div>
                                <div className="input-group m-5">
                                    <select className="custom-select" id="inputGroupSelect02">
                                        <option selected>Selecciona...</option>
                                        <option value="1">Barbería 1</option>
                                        <option value="2">Barbería 2</option>
                                        <option value="3">Barbería 3</option>
                                    </select>
                                    <div className="input-group-append">
                                        <label className="input-group-text" for="inputGroupSelect02">BARBERÍAS</label>
                                    </div>
                                </div>
                                <br />
                                <div className="map-responsive m-1">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.51641088416!2d-74.24789559433891!3d4.648283716989226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1633504421119!5m2!1ses!2sco"
                                        width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
                                </div>
                            </div>
                            <div>
                                <div className="Horarios p-5">
                                    <h3 className="text-black-100 text-center p-4 mr-2">NUESTRO HORARIO</h3>
                                    <dl className="col ">
                                        <div className="row justify-content-around ">
                                            <div className="col text-left"> Lunes-Viernes</div>
                                            <div className="col text-right"> 08:00 am - 6:00 pm</div>
                                            <div className="w-100"></div>
                                            <div className="col text-left"> Sabados</div>
                                            <div className="col text-right"> 08:00 am - 3:00 pm</div>
                                            <div className="w-100"></div>
                                            <div className="col text-left"> Domingo y festivoso</div>
                                            <div className="col text-right"> 10:00 am - 2:00 pm</div>
                                        </div>
                                    </dl>
                                </div>
                            </div>

                        </div>

                    </div>





                    {/*<!--footer-->*/}
                    <footer className="container d-md-flex align-items-center justify-content-center">
                        <div className="container-sm w-md-25 ">
                            <img src={imgBH} alt="seccion logo sitio web" style={{ height: "90px" }} />
                        </div>
                        <div className="container-sm">
                            <p className="text-left text-black-100 text-justify">Derechos reservados de autor@ Grupo 6 g37</p>
                        </div>
                        <div className="container-sm container-md container-lg">
                            <p className="text-left">Siguenos en:</p>
                            <ul className="list-unstyled">
                                <div className="container ">
                                    <li className=""><img src={facebook} alt="facebook"
                                        className="imgfluid emoticones" /> <a href="https://www.facebook.com/"
                                            target="_blank">Facebook</a></li>
                                </div>
                                <div className="container ">
                                    <li className=""><img src={instagram} alt="facebook"
                                        className="imgfluid emoticones" /> <a href="https://www.instagram.com/"
                                            target="_blank">Instagram</a></li>
                                </div>
                                <div className="container ">
                                    <li className=""><img src={twitter} alt="facebook" className="imgfluid emoticones" />
                                        <a href="https://twitter.com/?lang=en" target="_blank">Twitter</a>
                                    </li>
                                </div>

                            </ul>
                        </div>

                    </footer>

                </div>
            </div>
        </div>
    )
}

export default Reserva
