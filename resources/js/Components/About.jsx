import React from "react"

export default function About() {
    return(
        <div id="About">
            <h2 id="sbm">About Me</h2>
            <section className="sobre-mi">
                <div className="area-img-sobre-mi">
                    <img src="/images/io2.webp"title="Nestor's Page" alt="Nestor - My Persona" />
                </div>
                <div className="area-experiencias-sobre-mi">
                    <div className="experiencias-clientes">
                        <div className="years">
                            <p className="title-experiencias-clientes">Experience</p>
                            <p>+3 years</p>
                        </div>
                        <div className="clientes">
                            <p className="title-experiencias-clientes">Clients</p>
                            <p>+34 satisfied</p>
                        </div>
                        <div className="proyectos">
                            <p className="title-experiencias-clientes">Projects</p>
                            <p>+6 projects</p>
                        </div>
                    </div>
                    <div className="area-texto">
                        <p>I define myself as a passionate web and desktop application developer, specialized in technologies such as 
                            Laravel, JavaScript, CSS, SQL, React, Tailwind, Python, and PHP, with strong expertise in Eloquent ORM. My focus 
                            goes beyond mere aesthetics; I am dedicated to creating distinctive digital experiences by blending creativity 
                            with responsibility. My goal is to find the perfect balance between functionality and innovation in each 
                            project. I am enthusiastic about challenges, always open to learning and constantly growing. Additionally, 
                            I speak Spanish fluently, Italian at a B1 level, and English at a basic level.</p>
                    </div>
                    <div className="btn-contacto">
                        <button>Contact Me</button>
                    </div>
                </div>
            </section>
        </div>
    )
}