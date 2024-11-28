import { useForm } from "@inertiajs/react"; // Hook para gestionar formularios con Inertia.js
import React, { useState } from "react";
import SelectMultiple from "../SelectMultiple"; // Componente para selección múltiple
import ButtonAdding from "./ButtonAdding"; // Componente para añadir proyectos

// Componente principal para añadir un proyecto
function ComponentAdding({ activeForm }) {
    // Estado local para las opciones seleccionadas en el selector múltiple
    const [selectedOptions, setSelectedOptions] = useState([]);

    // Hook de Inertia.js para manejar el formulario
    const { data, setData, post, errors } = useForm({
        file: null,      // Archivo subido
        title: null,     // Título del proyecto
        url: null,       // URL del repositorio
        language: null,  // Lenguajes seleccionados
    });

    // Opciones disponibles para seleccionar lenguajes
    const selection = ["PHP", "Laravel", "JavaScript", "SQL"];

    // Maneja los cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value, files } = e.target;

        // Si el campo es un archivo, guarda el primer archivo seleccionado
        if (name === "file") {
            setData((prev) => ({ ...prev, [name]: files[0] }));
        } else {
            // Para otros campos, guarda el valor ingresado
            setData((prev) => ({ ...prev, [name]: value }));
        }
    };

    // Maneja el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Previene la recarga de la página

        data.language = selectedOptions;

        // Realiza el POST a la ruta especificada
        post('/project', {
            onSuccess: () => activeForm(false), // Cierra el formulario al finalizar
        });
    };

    return (
        <div className="form_adding">
            <form className="form" onSubmit={handleSubmit}>
                <h2 style={{ margin: "0" }}>Adding New Project</h2>

                {/* Campo para subir archivo */}
                <div className="subcontent_form">
                    <label htmlFor="file" className="title_label">Image of Project</label>
                    <input type="file" id="file" name="file" onChange={handleChange} style={{ color: "#fff" }} />
                    {errors.file && <span style={{ color: "#cb2929", textAlign: "center", fontSize: "14", fontWeight: "600" }}>{errors.file}</span>}
                </div>

                {/* Campo para título */}
                <div className="subcontent_form">
                    <label htmlFor="title" className="title_label">Title</label>
                    <input type="text" name="title" onChange={handleChange} id="title" />
                    {errors.title && <span style={{ color: "#cb2929", textAlign: "center", fontSize: "14", fontWeight: "600" }}>{errors.title}</span>}
                </div>

                {/* Campo para URL */}
                <div className="subcontent_form">
                    <label htmlFor="url" className="title_label">GitHub URL</label>
                    <input type="text" name="url" onChange={handleChange} id="url" />
                    {errors.url && <span style={{ color: "#cb2929", textAlign: "center", fontSize: "14", fontWeight: "600" }}>{errors.url}</span>}
                </div>

                {/* Selector múltiple para lenguajes */}
                <div className="subcontent_form">
                    <label htmlFor="language" className="title_label">Select Language</label>
                    <SelectMultiple options={selection} placeholder="Select Language" selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
                    {errors.language && <span style={{ color: "#cb2929", textAlign: "center", fontSize: "14", fontWeight: "600" }}>{errors.language}</span>}
                </div>

                {/* Botón de envío */}
                <button className="send">Send</button>
            </form>
        </div>
    );
}

// Componente para gestionar los proyectos del administrador
export default function ProjectsAdmin({ projects }) {
    const [activeForm, setActiveForm] = useState(false); // Estado para mostrar/ocultar el formulario
    const [activeDelete, setActiveDelete] = useState(false); // Estado para mostrar/ocultar la confirmación de borrado

    // Hook de Inertia.js para manejar la eliminación de proyectos
    const { data, setData, delete: destroy, errors } = useForm({
        id: null, // ID del proyecto a eliminar
    });

    // Función para manejar la eliminación de un proyecto
    const handleDelete = () => {
        destroy(`/project/${data.id}`); // Envía la solicitud de eliminación al backend
    };

    return (
        <>
            <div id="Projects" className="Area_Admin">
                <h2 className="title">Projects</h2>
                
                <span className="count">{projects.length}/6</span>
                
                <section className="Portafolio">
                    <div className="galeria-portafolio" id="projects">
                        {/* Renderiza cada proyecto */}
                        {projects && projects.map(element => (
                            <div className="content-portafolio" key={element.id}>
                                
                                <div className="img" style={{ backgroundImage: `url(${element.image})` }}></div>
                                
                                <p className="title-portafolios">{element.title}</p>
                                
                                <div className="content-button-portafolio">
                                    {/* Botón para activar la confirmación de borrado */}
                                    <button className="noselect delete" onClick={() => {
                                        data.id = element.id;
                                        setActiveDelete(true);
                                    }}>
                                        <span className="text">Delete</span>
                                        <span className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Botón para mostrar el formulario de añadir */}
                <ButtonAdding array={projects} max={6} setActiveForm={setActiveForm}/>

                {/* Renderiza el formulario de añadir si está activo */}
                {activeForm && <div className="Container_Form_adding">
                    <div style={{ position: "absolute", top: "30px", right: "30px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { setActiveForm(false); }} fill="white" style={{ height: "30px", width: "30px", cursor: "pointer" }} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <ComponentAdding activeForm={setActiveForm} />
                </div>}

                {/* Renderiza la confirmación de borrado si está activa */}
                {activeDelete && <div className="Container_Form_adding">
                    <div className="bg-red-100 absolute top-5 border-t border-b border-red-500 text-red-700 px-4 py-3" role="alert">
                        <p className="font-bold">You are about to delete this project.</p>
                        <p className="text-sm">When deleting it is not recoverable.</p>
                        <div className="flex gap-3 w-100 justify-end mt-3">
                            <button onClick={() => { setActiveDelete(false); }}>Cancel</button>
                            <button onClick={() => { handleDelete(); setActiveDelete(false); }}>Accept</button>
                        </div>
                    </div>
                </div>}
            </div>
        </>
    );
}