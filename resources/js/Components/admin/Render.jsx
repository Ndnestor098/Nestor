import React from "react";
import ProjectsAdmin from "./Projects";
import CertificatesAdmin from "./Certificates";
import MyPerson from "./MyPerson";

export default function Render({ projects, certificates, renderMenu, datePerson}) {
    
    return (
        <>
            {
                renderMenu === 0 && <MyPerson myPerson={ datePerson } />
            }
            {
                renderMenu === 1 && <ProjectsAdmin projects={ projects } />
            }
            {
                renderMenu === 2 && <CertificatesAdmin certificates={ certificates } />
            }
        </>
    )
}