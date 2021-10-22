import axios from 'axios'
import React from 'react'

function DatosCitas(props) {
    
    
    const handleDelete = async() =>{
      await axios.delete(`http://localhost:5000/citas/delete/${props.idx}`,{data:props.idx})
        .then(cita => { console.log(cita) }) 
        .catch(err => { console.log(err) })
    }
    return (
        <div>
             <div className="modal fade" id={props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={props.id}>Cita</h5>
                            <button type="button" className="close btn btn-secondary" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body justify-content-center d-flex align-items-center m-2 p-3">
                            <form method="delete" action="" className=" m-2" >
                                <label for="nombreBarbero" > El barbero 
                                <input type="text" name="nombreBarbero" value={props.nombreBarbero} />
                                </label>
                                <label for="fecha" >La fecha
                                <input type="text" name="fecha" value={props.fecha}/>
                                </label>
                                <label for="hora"> a la hora
                                <input type="text" name="hora" value={props.hora}/>
                                </label>
                                <input type="text" name="id" value={props.id} disabled="true"/>
                                
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger" onClick={()=>handleDelete()} method="delete" >Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default DatosCitas
