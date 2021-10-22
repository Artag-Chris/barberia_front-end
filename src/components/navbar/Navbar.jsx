import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import { app } from "../firebase/firebaseConfig"
import img1 from "../img/LOGO_BLANCO.png"


function Navbar(props) {
    const [isLogin, setIslogin] = useState(false);
    const evaluar = ()=>{

        if(isLogin){
            <Link to="/registrar" setIslogin={setIslogin} />
            console.log("here")
            
        }
        if(!isLogin){
            console.log("deslogeado")
            app.auth().signOut();
            setIslogin(!isLogin)
            
        }
    }
    
     
    return (
        <div className="w-100 ">
            <header className=" container-fluid mi-bg-navbar mi-efecto-header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <img className="" src={img1} alt="Barber House" style={{height: "80px"}}/>
                        <button className="navbar-toggler justify-content-end " type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon text-light"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link active" to="/" >Inicio <span className="sr-only"></span></Link>
                                <Link className="nav-link" to="/">Servicios</Link>
                                <Link className="nav-link" to="/" >Mi Equipo</Link>
                                <Link className="nav-link" to="/reserva">Reserva</Link>
                                <Link className="nav-link" to="/registrar" onClick={evaluar} >{isLogin? "Log Out":"Registrate"} </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
       
    )
}

export default Navbar
