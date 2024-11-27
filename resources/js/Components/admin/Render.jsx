import React from "react";
import ProjectsAdmin from "./Projects";

export default function Render({ projects, certificates  }) {
    return (
        <>
            <ProjectsAdmin projects={ projects } />
        </>
    )
}