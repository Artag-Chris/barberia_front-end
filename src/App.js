import { useState, useEffect } from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { app } from "./components/firebase/firebaseConfig";
import { fetchBarberos, fetchCitas, fetchClientes } from "./components/api/Rutas";
import Index from "./components/Index/Index";
import Registrar from "./components/registro/Registrar";
import Navbar from "./components/navbar/Navbar";
import Reserva from "./components/reservar/Reserva";
import Administrador from "./components/administrador/Administrador";
import './App.css';
import "../src/components/css/style.css"
import "../src/components/css/stylesReserva.css"
import "../src/components/css/estilosRegistro.css"
import "../src/components/css/estilosLogin.css"
import "../src/components/css/estilosCrud.css"

function App() {

  // aqui estan los set de los estados 
  const [usuario, setUsuario] = useState(null)
  //debo hacer que la consulta al back-end de los clientes sea mas eficas
  const [clientes, setclientes] = useState([])
  const [barberos, setbarberos] = useState([])
  const [citas, setcitas] = useState([])

  //este useEffect es para mirar el si el usuario esta logeado en firebase y si es asi
  //actualiza el estado y pasa sus datos
  useEffect(() => {
    app.auth().onAuthStateChanged((usuariofirebase) => {
      console.log(usuariofirebase);
      setUsuario(usuariofirebase);
    })
  }, [])
  useEffect(() => {
    fetchClientes()
      .then(result => { setclientes(result.data) })
      .catch(console.log);
    console.log(clientes)

  }, [usuario])
  useEffect(() => {
    fetchBarberos()
      .then(result => { setbarberos(result.data) })
      .catch(console.log);
    console.log(barberos)

  }, [usuario])
  useEffect(() => {
    fetchCitas()
      .then(result => { setcitas(result.data) })
      .catch(console.log);
    console.log(citas)

  }, [usuario])

  return (
    <div className="App">
      <BrowserRouter>
        <Route ><Navbar setUsuario={setUsuario} /></Route>
        <Switch>
          <Route path="/" exact component={Index} >< Index  /></Route>
          <Route path="/registrar"  ><Registrar setUsuario={setUsuario} /></Route>
          <Route path="/reserva" component={Reserva} ><Reserva setUsuario={setUsuario} /></Route>
          <Route path="/administrador" component={Administrador} ><Administrador clientes={clientes} barberos={barberos} citas={citas} setUsuario={setUsuario} usuario={usuario} /> </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
