import React,{useState} from 'react'
import Modal2 from './Modal2'

function Modal1(props) {
    const [fecha, setFecha] = useState("")
    const [tiempo, setTiempo] = useState("")
    const [barbero, setBarbero] = useState("Libre")
    const cita = (e) => {
        e.preventDefault();
        const dia = e.target.date.value;
        const hora = e.target.time.value;
        const barber = e.target.barber.value;
        setFecha(dia);
        setTiempo(hora);
        setBarbero(barber)
        
    }


    return (
        <div>
            <div className="modal fade" id={props.id} tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={props.id}>Mi Reserva</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row p-4 rounded-lg" style={{ border: "solid 1px gray" }}>
                                    <div className="icono">
                                        <h1><i className="bi bi-calendar-date"></i></h1>
                                    </div>
                                    <div className="informacion">
                                        <ul>
                                            <li>SERVICIO SELECCIONADO</li>
                                            <li>{props.servicio} </li>
                                            <li>Precio total:$ {props.precio} </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-lg p-4 rounded-lg" style={{ border: "solid 1px gray" }}>
                                        <div className="pt-3">
                                            <h6> {props.servicio} </h6>
                                            <p>{props.duracion} </p>
                                        </div>
                                        
                                    </div>
                                    <form action="" onSubmit={cita}>
                                    <div>
                                            <h6>BARBEROS:</h6>
                                            <select className="p-2" name="barber" id="barber">Seleccione...
                                            <option value={barbero} >Seleccione...</option>
                                                <option value="Pepe Iniesta">Pepe Iniesta</option>
                                                <option value="Carlos Tejada">Carlos Tejada</option>
                                            </select>
                                        </div>
                                        <div className="col-lg p-4 rounded-lg" style={{ border: "solid 1px gray" }}>
                                            <div className="pt-3">
                                                <h6>2. SELECCIONE EL DÍA.</h6>
                                                <input type="date" name="date" id="date" style={{ width: "100%" }} />
                                            </div>
                                        </div>
                                        <div className="col-lg p-4 rounded-lg" style={{ border: "solid 1px gray" }}>
                                            <div className="pt-3">
                                                <label for="appt">Select a time:</label>
                                                <input type="time" id="time" name="time" />
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                            <button type="submit" className="btn btn-primary" data-toggle="modal"
                                                data-target={`#id${props.id}`}>Siguiente</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <Modal2 id={`id${props.id}`} 
                            servicio={props.servicio} 
                            precio={props.precio} 
                            duracion={props.duracion}
                            dia={fecha} 
                            tiempo={tiempo}
                            barbero={barbero} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal1
