import axios from 'axios'
import React from 'react'

function DatosCliente(props) {

    const handleDelete = async (e) => {
        console.log("click")
        e.preventDefault();
        await axios.delete(`http://localhost:5000/delete/${props.idx}`, { data: props.idx })
            .then(cliente => { console.log(cliente) })
            .catch(err => { console.log(err) })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const cliente = {
            nombres: e.target.nombres.value,
            apellido: e.target.apellido.value,
            email: e.target.email.value,
            telefono: e.target.telefono.value,
            documento: e.target.documento.value,
            comentario: e.target.comentario.value,
            id: props.idx
        }
        console.log(cliente)
        console.log(props.idx)
        axios.put("http://localhost:5000/cliente/post/" + props.idx, cliente)
            .then(cliente => { console.log(cliente) })
            .catch(err => { console.log(err) })
    }

    return (
        <div>
            <div className="modal fade" id={props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={props.id}>Clientes</h5>
                            <button type="button" className="close btn btn-secondary" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form action="" onSubmit={handleUpdate}>
                                <div className=" justify-content-center d-flex align-items-center m-2 p-3">
                                    <div className="col-6 justify-content-center">
                                        <div className="container justify-content-center">
                                            <div className="row justify-content-center">
                                                <div className="col-ls-6">
                                                    <label for="name">Nombres</label><br />
                                                    <input className="mr-2" type="text" name="nombres" size="25%" defaultValue={props.nombres} />
                                                </div>

                                                <div className="col-ls-6">
                                                    <label for="lastname">Apellidos</label><br />
                                                    <input className="mr-2" type="text" name="apellido" size="25%" defaultValue={props.apellido} />
                                                </div>
                                            </div>
                                            <div className="row mt-1">
                                                <div className="col-ls-6">
                                                    <label for="name">E-mail</label><br />
                                                    <input className="mr-2" type="text" name="email" size="50%" defaultValue={props.email} />
                                                </div>
                                                <div className="col-ls-6">
                                                    <label for="name">Telefono</label><br />
                                                    <input className="mr-2" type="text" name="telefono" size="50%" defaultValue={props.telefono} />
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-ls-8">
                                                    <p>Documento <br /><input type="text" name="documento" size="50%" defaultValue={props.documento} /></p>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="form-group shadow-textarea">
                                                    <label for="comentarios">Comentario</label>
                                                    <textarea className="form-control" style={{ width: "100%" }} name="comentario"
                                                        rows="5" defaultValue={props.comentario} ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary"   >Update</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <form action="" onSubmit={handleDelete} >
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-danger" method="delete" onclick={() => handleDelete} >Delete</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DatosCliente
