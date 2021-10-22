import React from 'react'
import DatosCliente from './DatosCliente';

function Clientes(props) {
    const dataClientes = props.clientes; 
    const {cliente} = dataClientes 
    //const ver = ()=> console.log(cliente)
    const ver = cliente.map(item=>(
        <div key={item.id}>
            <button type="button" className="m-1 btn btn-primary"data-toggle="modal" data-target={`#id${item.id}`} >{item.datos.nombres} </button>
            <DatosCliente id={`id${item.id}` } idx={item.id} nombres={item.datos.nombres} apellido={item.datos.apellido} email={item.datos.email}
            telefono={item.datos.telefono} documento={item.datos.documento} comentario={item.datos.comentario} />
        </div>
  ))
    
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">Clientes</h5>
                            <button type="button" className="close btn btn-secondary" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body row justify-content-between m-3 p-3 ">
                           {ver}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clientes
