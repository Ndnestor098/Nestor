import React from "react";

export default function Projects({ projects }) {
    return(
        <div id="Projects">
            <h2>Projects</h2>
            <section className="Portafolio">
                <div className="galeria-portafolio" id="projects">
                
                    {
                        projects && projects.map(element => (
                            <div className="content-portafolio" key={element.id}>
                                
                                <div className="img" style={{ backgroundImage: `url(${element.image})` }}></div>
                                
                                <p className="title-portafolios">{ element.title }</p>
                                
                                <div className="content-button-portafolio">
                                    <a href={ element.enlace } target="_blank" className="link-github">Github</a>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </section>
        </div>
    )
}