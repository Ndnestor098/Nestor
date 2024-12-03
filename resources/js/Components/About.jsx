import React from "react"

export default function About({myPerson}) {
    const today = new Date();
    const data = new Date(myPerson.experience);

    const date = today.getFullYear() - data.getFullYear()

    console.log(date)
    return(
        <div id="About">
            <h2 id="sbm">About Me</h2>
            <section className="sobre-mi">
                <div className="area-img-sobre-mi">
                    <img src={myPerson.image}title="Nestor's Page" alt="Nestor - My Persona" />
                </div>
                <div className="area-experiencias-sobre-mi">
                    <div className="experiencias-clientes">
                        <div className="years">
                            <p className="title-experiencias-clientes">Experience</p>
                            <p>+{date} years</p>
                        </div>
                        <div className="clientes">
                            <p className="title-experiencias-clientes">Clients</p>
                            <p>+{myPerson.client} satisfied</p>
                        </div>
                        <div className="proyectos">
                            <p className="title-experiencias-clientes">Projects</p>
                            <p>+{myPerson.project} projects</p>
                        </div>
                    </div>
                    <div className="area-texto">
                        <p>{myPerson.description}</p>
                    </div>
                    <div className="btn-contacto">
                        <a href="#Contact">Contact Me</a>
                    </div>
                </div>
            </section>
        </div>
    )
}