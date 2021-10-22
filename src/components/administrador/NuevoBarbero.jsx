import React,{useEffect} from 'react'
import axios from 'axios';

function NuevoBarbero(props) {
    const submitHandler = (e) => {

        e.preventDefault();
        const nombres = e.target.nombres.value;
        const apellido = e.target.apellido.value;
        const email = e.target.email.value;
        const documento = e.target.documento.value;
        const telefono = e.target.telefono.value;
        const experiencia = e.target.experiencia.value;

        const barbero = {
            nombres: nombres,
            apellido: apellido, email: email, documento: documento,
            telefono: telefono, experiencia: experiencia
        }
        axios.post("https://barberiag372021.herokuapp.com/add/barber", barbero)
            .then(barbero => { console.log(barbero) })
            .catch(err => { console.log(err) })

       
    }
    useEffect(() => {
        props.setUsuario(props.usuario)
    }, [])
    
    return (
        <div>
            <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel3">Registro de barbero</h5>
                            <button type="button" class="close btn btn-secondary" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form action="" onSubmit={submitHandler}>
                                <div className="justify-content-center d-flex align-items-center m-2 p-3">
                                    <div className="col-6">
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
                                                    <label for="comentarios">Experiencia</label>
                                                    <textarea className="form-control" style={{ width: "100%" }} name="experiencia"
                                                        rows="5" placeholder="Escribe aquí..."></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Registrar</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoBarbero
