import React from "react";
import ProjectsAdmin from "./Projects";
import CertificatesAdmin from "./Certificates";

export default function Render({ projects, certificates, renderMenu}) {
    
    return (
        <>
            {
                renderMenu === 1 && <ProjectsAdmin projects={ projects } />
            }
            {
                renderMenu === 2 && <CertificatesAdmin certificates={ certificates } />
            }
        </>
    )
}