import React from 'react'
import DatosBarbero from './DatosBarbero';

function Barberos(props) {
    const dataBarberos = props.barberos
    const {barberos} = dataBarberos 
    //const ver = ()=> console.log(barberos)
    const ver = barberos.map(item=>(
        <div key={item.id}>
            <button type="button" className="m-1 btn btn-primary"data-toggle="modal" data-target={`#id${item.id}`} >{item.datos.nombres} </button>
            <DatosBarbero id={`id${item.id}` } idx={item.id} nombres={item.datos.nombres} apellido={item.datos.apellido} email={item.datos.email}
            telefono={item.datos.telefono} documento={item.datos.documento} experiencia={item.datos.experiencia} />
        </div>
   ))
    return (
        <div>
            <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel1">Barberos</h5>
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

export default Barberos
