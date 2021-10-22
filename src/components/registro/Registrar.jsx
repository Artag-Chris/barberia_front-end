import React, { useState } from 'react'
import { app } from '../firebase/firebaseConfig'
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';

function Registrar(props) {
    const [isLogin, setIslogin] = useState(false);
    const createUser = (email, password) => {
        app.auth().createUserWithEmailAndPassword(email, password)
            .then((usuariofirebase) => {
                console.log("usuario creado : ", usuariofirebase);
                props.setUsuario(usuariofirebase)
                setIslogin(true)
            })

    }
    const iniciarSesion = (email, password) => {
        app.auth().signInWithEmailAndPassword(email, password).then((usuariofirebase) => {
            console.log("sesion iniciada con :", usuariofirebase.user);
            props.setUsuario(usuariofirebase);
            setIslogin(true)

        })
    }
    const submitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        if (isLogin) {
            createUser(email, password)
        }
        if (!isLogin) {
            iniciarSesion(email, password)
        }
    }
    const signWithGoogle = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((usuariofirebase) => {
                //token de id que da google
                const credential = GoogleAuthProvider.credentialFromResult(usuariofirebase);
                const token = credential.accessToken;
                const user = usuariofirebase.user;
                props.setUsuario(usuariofirebase);
                props.setIslogin(usuariofirebase)

            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);

            });
    }
    const signWithfacebook = () => {
        const auth = getAuth();
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                // esto es un token de autentificacion que da facebook y se usaria para mandarlo al
                //back-end como credencial
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                props.setUsuario(user)
                setIslogin(true)

            })
            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = FacebookAuthProvider.credentialFromError(error);

            });
    }
    return (
        <div>
            <Navbar />
            <div className="containerM pt-5 w-100 h-100 bodyBg " style={{ paddingBottom: "initial" }} >
                <div className="login-container mt-5">
                    <div className="register">
                        <h2>{isLogin ? "Registrate" : "Inicia"} </h2>
                        <form action="" onSubmit={submitHandler} >
                            <input type="text" placeholder="Nombres" className="nombres" id="nombres" />
                            <input type="text" placeholder="Apellidos" className="Apellidos" id="apellidos" />
                            <input type="text" placeholder="Correo" className="email" id="email" />
                            <input type="password" placeholder="Contraseña" className="pass" id="password" />
                            <input type="number" placeholder="Telefono" className="telefono" id="telefono" />
                            <input type="submit" className=" btn btn-success" value={isLogin ? "Registrate" : "Inicia"} />
                        </form>
                    </div>
                    <div className="login">

                        <h2>{isLogin ? "Registrate con :" : "Inicia sesion Con:"} </h2>
                        <Link to="/administrador"  >{"Administrador"} </Link>
                        <button className="btn btn-info" onClick={() => setIslogin(!isLogin)} >{isLogin ? "Registrate" : "Inicia"} </button>
                        <div className="login-items">
                            <button className="btn btn-primary" onClick={() => signWithfacebook()} > Facebook</button>
                            <button className="btn btn-warning" onClick={() => signWithGoogle()}> Google</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Registrar
