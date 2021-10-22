import React, { useState, useEffect } from 'react'
import Clientes from './Clientes'
import Barberos from './Barberos'
import Citas from "./Citas"
import NuevoBarbero from './NuevoBarbero'
import { fetchCitas, fetchClientes } from '../api/Rutas'
import { fetchBarberos } from '../api/Rutas'




function Administrador(props) {
    const [cliente, setcliente] = useState([])
    const [barberos, setbarberos] = useState([])
    const [citas, setcitas] = useState([])

    useEffect(() => {
        console.log("recargando datos")
        props.setUsuario(props.usuario)
        fetchClientes()
            .then(result => { setcliente(result.data) })
            .catch(console.log);
        console.log(cliente)
    }, [props.usuario])
    useEffect(() => {
        props.setUsuario(props.usuario)
        fetchBarberos()
          .then(result => { setbarberos(result.data) })
          .catch(console.log);
        console.log(barberos)
    
      }, [props.usuario])
      useEffect(() => {
        props.setUsuario(props.usuario)
        fetchCitas()
          .then(result => { setcitas(result.data) })
          .catch(console.log);
        console.log(citas)
    
      }, [props.usuario])


    return (
        <div>
            <div className="w-100 container-fluid mi-estilo-crud text-justify p-5 ">

                <div className=" mi-estilo-crud container-fluid text-justify p-5">

                    <div className="d-sm-inline-flex d-flex">
                        <div className=" d-sm-block d-flex  align-items-center m-5 col ">
                            <div className="  col">
                                <h2 className="text-center ">CLIENTES</h2>
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" >Clientes</button>
                                <Clientes clientes={props.clientes} />
                            </div>
                            <div className="  col">
                                <h2 className="text-center ">Barberos</h2>
                                <button type="button" className=" btn btn-primary" data-toggle="modal" data-target="#exampleModal1" >Barberos</button>
                                <Barberos barberos={props.barberos} />
                            </div>
                            <div className="  col">
                                <h2 className="text-center ">Citas</h2>
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal2" >Citas</button>
                                <Citas citas={props.citas} />
                            </div>
                            <div className=" col">
                                <h2 className="text-center ">Nuevo barbero</h2>
                                <button type="button" className=" btn btn-primary" data-toggle="modal" data-target="#exampleModal3" >Registrar </button>
                                <NuevoBarbero setUsuario={props.setUsuario} usuario={props.usuario} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Administrador
