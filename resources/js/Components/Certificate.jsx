import React from "react";

export default function Certificates({ certificates }) {
    return(
        <div id="Certificates">
            <h2>Certificates</h2>
            <section className="certificado">
                <div id="Ubicacion-POR" style={{ marginTop: "50px" }}>
                    <section className="Portafolio">
                        <div className="galeria-certificado" id="certificados">
                            {
                                certificates && certificates.map(element => (
                                    <div className="content-certificado" key={element.id + element.title}>
                                        <div className="img" style={{ backgroundImage: `url(${element.image})` }}></div>
                                        <p className="title-certificado">{element.title}</p>
                                        <div className="content-button-certificado">
                                            <a href={element.enlace} target="_blank" rel="noopener noreferrer" className="link-github">
                                                See more
                                            </a>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}