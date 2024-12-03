import React from "react";

export default function Experience({ backend, frontend }) {
    return(
        <div id="Experience">
            <h2>Experiences</h2>
            <section className="Experiencias">
                <div className="experiencia-content">
                    <div className="cuadrado-experiencias">
                        <p className="title-cuadrado-experiencias">Front-End Developer</p>
                        <div className="ordenar-experiencia">
                            {
                                backend && Object.entries(backend).map((array)=>(
                                    <div key={array[0]}>
                                        <p className="title-lenguaje">
                                            <img src="/images/svg/check.svg" width="15" height="15"title="Check Confirm" alt="Nestor - icon-check"></img> 
                                            <span>{array[0]}</span>
                                        </p>
                                        <p>{array[1]}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="experiencia-content">
                    <div className="cuadrado-experiencias">
                        <p  className="title-cuadrado-experiencias">Back-End Developer</p>
                        <div className="ordenar-experiencia">
                            {
                                frontend && Object.entries(frontend).map((array)=>(
                                    <div key={array[0]}>
                                        <p className="title-lenguaje">
                                            <img src="/images/svg/check.svg" width="15" height="15"title="Check Confirm" alt="Nestor - icon-check"></img> 
                                            <span>{array[0]}</span>
                                        </p>
                                        <p>{array[1]}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}