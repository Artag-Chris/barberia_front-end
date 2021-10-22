import React from 'react'
import axios from 'axios';

function Modal2(props) {
    const submitHandler = (e) => {
        
        e.preventDefault();
        const nombres = e.target.nombres.value;
        const apellido = e.target.apellido.value;
        const email = e.target.email.value;
        const documento = e.target.documento.value;
        const telefono = e.target.telefono.value;
        const comentario = e.target.comentario.value;

        const cliente = {
            nombres: nombres,
            apellido: apellido, email: email, documento: documento,
            telefono: telefono, comentario: comentario
        }
        console.log(cliente)
        axios.post("https://barberiag372021.herokuapp.com/add", cliente

        ).then(cliente => { console.log(cliente) }).catch(err => { console.log(err) })

        const cita= {
            nombreBarbero: props.barbero,
            fecha: props.dia,
            hora: props.tiempo
        }
        axios.post("https://barberiag372021.herokuapp.com/add/citas", cita

        ).then(cliente => { console.log(cliente) }).catch(err => { console.log(err) })

    }
    return (
        <div>
            <div className="modal fade" id={props.id} aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
                tabindex="-1">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={props.id} > Mi Reserva</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <form action="" onSubmit={submitHandler}>
                                    <div className="row justify-content-between">
                                        <div className="col-6">4. DATOS DE LA RESERVA
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-ls-6">
                                                        <label for="name">NOMRBES*</label><br />
                                                        <input className="mr-2" type="text" name="nombres" size="25%" placeholder="Nombre para agendar" />
                                                    </div>

                                                    <div className="col-ls-6">
                                                        <label for="lastname">APELLIDOS*</label><br />
                                                        <input className="mr-2" type="text" name="apellido" size="25%" placeholder="Apellido" />
                                                    </div>
                                                </div>
                                                <div className="row mt-1">
                                                    <div className="col-ls-6">
                                                        <label for="name">EMAIL*</label><br />
                                                        <input className="mr-2" type="text" name="email" size="25%" placeholder="Su E-mail" />
                                                    </div>
                                                    <div className="col-ls-6">
                                                        <label for="name">TELEFONO*</label><br />
                                                        <input className="mr-2" type="text" name="telefono" size="25%" placeholder="Un telefono " />
                                                    </div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col-ls-8">
                                                        <p>DOCUMENTO* <br /><input type="text" name="documento" size="20%" placeholder="Algun documento de id" /></p>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className="form-group shadow-textarea">
                                                        <label for="comentarios">COMENTARIOS</label>
                                                        <textarea className="form-control" style={{ width: "100%" }} name="comentario"
                                                            rows="5" placeholder="Escribe aquí..."></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="">
                                                <div className="row p-1" style={{ border: "solid 1px grey;" }}>
                                                    <div className="icono col-md-1">
                                                        <h1><i className="bi bi-cash-coin"></i></h1>
                                                    </div>
                                                    <div className="informacion col-md-11" style={{ width: "70%" }}>
                                                        <h5 className="mt-2">MI RESUMEN</h5>
                                                        <hr />
                                                    </div>
                                                    <div className="container">
                                                        <label for="CORTE">{props.servicio} </label>
                                                        <div className="row icono">
                                                            <h3 className="col-md-1"><i className="bi bi-calendar-date"></i></h3>
                                                            <div className="col-md-11">
                                                                <p>fecha</p>
                                                                <p className="mt-2">{props.dia}</p>
                                                                <p>Hora</p>
                                                                <p>{props.tiempo} </p>
                                                                <p>Barbero</p>
                                                                <p>{props.barbero} </p>
                                                            </div>
                                                        </div>
                                                        <div className="row icono">
                                                            <h3 className="col-md-1"><i className="bi bi-clock"></i>
                                                            </h3>
                                                            <div className="col-md-11">
                                                                <p className="mt-2">Duración total:{props.duracion} </p>
                                                            </div>
                                                        </div>
                                                        <div className="row icono">
                                                            <h3 className="col-md-1"><i className="bi bi-geo-alt-fill"></i>
                                                            </h3>
                                                            <div className="col-md-11">
                                                                <p className="mt-2">Calle 30 80122, Colombia</p>
                                                            </div>
                                                        </div>
                                                        <div className="container">
                                                            <p className="text-right">Precio total: {props.precio} </p>
                                                        </div>


                                                    </div>
                                                </div>
                                                <div className="modal-footer">

                                                    <button type="submit" className="btn btn-primary">Guardar</button>
                                                    <button type="button" className="btn btn-secondary"
                                                        data-dismiss="modal">Cerrar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Modal2
