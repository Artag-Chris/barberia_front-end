import React from 'react'
import DatosCitas from './DatosCitas'

function Citas(props) {
    const dataCitas = props.citas
    const {citas} = dataCitas 
    //const ver = ()=> console.log(citas)
    const ver = citas.map(item=>(
        <div key={item.id}>
            <button type="button" class="m-1 btn btn-primary"data-toggle="modal" data-target={`#id${item.id}`} >{item.datos.fecha} </button>
            <DatosCitas id={`id${item.id}` } idx={item.id} fecha={item.datos.fecha} hora={item.datos.hora} nombreBarbero={item.datos.nombreBarbero} />
        </div>
   ))
    return (
        <div>
            <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel2">Citas</h5>
                            <button type="button" className="close btn btn-secondary" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body row justify-content-between m-3 p-3">
                        </div>
                           {ver}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                            
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Citas
