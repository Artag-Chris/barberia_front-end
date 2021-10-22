import React from 'react'
import Jumbo from "./Jumbo"
import Servicios from './Servicios'
import Equipo from './Equipo'
import Carrusel from './Carrusel'
import Footer from './Footer'

function Index() {
    return (
        <div className="w-100 pr-5 ">
            <Jumbo />
            <Servicios />
            <Equipo />
            <Carrusel />
            <Footer />
        </div>
    )
}

export default Index
