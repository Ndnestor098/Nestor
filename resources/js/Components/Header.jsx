import React from "react";

export default function Header() {
    return(
        <>
            <header id="Header">
                <div className="presentacion">
                    <h3>Hello, I'm</h3>
                    <h1><span style={{ fontWeight: '700' }}>Nestor</span> Daniel</h1>
                    <p>Web Developer</p>
                    
                    <div className="btn-contacto">
                        <a href="/WebCV/assets/pdf/cv-en.pdf" target="_blank">Download CV</a>
                        <a href="#Ubicacion-CT">Contact</a>
                    </div>
                </div>
            </header>


            <section className="area-iconos-red">
                <a href="https://github.com/Ndnestor098" target="_blank">
                    <img src="/images/svg/github.svg" width="23" height="24" title="Pagina de Nestor" alt="Nestor - icon-menu" />
                </a>
                <a href="https://www.instagram.com/__catmaster__/" target="_blank">
                    <img src="/images/svg/insta.svg" width="23" height="24" title="Pagina de Nestor" alt="Nestor - icon-menu" />
                </a>
                <a href="https://www.linkedin.com/in/nestor-daniel-salom-nunez">
                    <img src="/images/svg/linkedin.svg" width="23" height="24" title="Pagina de Nestor" alt="Nestor - icon-menu" />
                </a>
                <a href="mailto:trabajo.nestor.098@gmail.com">
                    <img src="/images/svg/email.svg" width="23" height="24" title="Pagina de Nestor" alt="Nestor - icon-menu" />
                </a>
            </section>

            <div className="iluminacion"></div>
        </>
    )
}