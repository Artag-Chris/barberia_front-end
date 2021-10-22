import React from 'react'
import img1 from "../img/LOGO_BLANCO.png"
import facebook from "../img/facebook-square-brands.svg"
import instagram from "../img/instagram-square-brands.svg"
import twitter from "../img/instagram-square-brands.svg"

function Footer() {
    return (
        <div className="align-items-center justify-content-center imgInicio col w-100 h-100 ">
             <div class="container-sm w-md-25 ">
                <img src={img1} alt="seccion logo sitio web" style={{height: "90px"}}/>
            </div>
            <div class="container-sm">
                <p class="text-left text-black-100 text-justify text-light">Derechos reservados de autor@ Grupo 6 g37
                </p>
            </div>
            <div class="container-sm container-md container-lg d-block" >
                <p class="text-left text-light">Siguenos en:</p>
                <ul class="list-unstyled">
                    <div class="container ">
                        <li class=""><img src={facebook} alt="facebook"
                                class="imgfluid emoticones" /> <a href="https://www.facebook.com/"
                                target="_blank">Facebook</a></li>
                    </div>
                    <div class="container ">
                        <li class=""><img src={instagram} alt="instagram"
                                class="imgfluid emoticones" /> <a href="https://www.instagram.com/"
                                target="_blank">Instagram</a></li>
                    </div>
                    <div class="container ">
                        <li class=""><img src={twitter} alt="twitter" class="imgfluid emoticones" />
                            <a href="https://twitter.com/?lang=en" target="_blank">Twitter</a>
                        </li>
                    </div>

                </ul>
            </div>
        </div>
    )
}

export default Footer
