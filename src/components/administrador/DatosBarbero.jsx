import React from 'react'
import axios from 'axios';

function DatosBarbero(props) {
    const handleDelete = async(e) =>{
        console.log("click")
        e.preventDefault();
        await axios.delete(`http://localhost:5000/barberos/delete/${props.idx}`,{data:props.idx})
          .then(barbero => { console.log(barbero) }) 
          .catch(err => { console.log(err) })
      }
      const handleUpdate = (e)=>{
        e.preventDefault();
       const barbero={ nombres: e.target.nombres.value,
           apellido: e.target.apellido.value,
           email: e.target.email.value,
           telefono: e.target.telefono.value,
           documento: e.target.documento.value,
           experiencia: e.target.experiencia.value,
           id:props.idx
       }
       console.log(barbero)
       console.log(props.idx)
        axios.put("http://localhost:5000/barbero/post/"+props.idx,barbero )
        .then(barbero => { console.log(barbero) })
        .catch(err => { console.log(err) })}
    return (
        <div>
            <div className="modal fade" id={props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={props.id}>Barberos</h5>
                            <button type="button" className="close btn btn-secondary" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {/*<form method="get"onSubmit={handleUpdate} >
                                <input type="text" name="nombres" defaultValue={props.nombres} />
                                <input type="text" name="apellido" defaultValue={props.apellido}/>
                                <input type="text" name="email" defaultValue={props.email}/>
                                <input type="text" name="telefono" defaultValue={props.telefono} />
                                <input type="text" name="documento" defaultValue={props.documento} />
                                <input type="text-field" name="experiencia" defaultValue={props.experiencia} />
                                <input type="text" name="id" defaultValue={props.id} disabled="true"/>
                                <button type="submit"className="btn btn-primary" >Update</button>
    </form>*/}
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
                                                    <label for="experiencia">Experiencia</label>
                                                    <textarea className="form-control" style={{ width: "100%" }} name="experiencia"
                                                        rows="5" defaultValue={props.experiencia} ></textarea>
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
                            <button type="submit" className="btn btn-danger"  >Delete</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DatosBarbero
