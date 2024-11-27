import { useForm } from "@inertiajs/react";
import React, { useState, useRef, useEffect } from "react";
import SelectMultiple from "../SelectMultiple";

function ComponentAdding(params) {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const { data, setData, post, processing, errors } = useForm({
        file: null,
        title: null,
        url: null,
        language: selectedOptions,
    });
    
    const selection = ["PHP", "Laravel", "JavaScript", "SQL"]

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        console.log(name, value)
        if (name === "file") {
            setData((prev) => ({ ...prev, [name]: files[0] }));
        } else {
            setData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        post('/project');
    }

    return(
        <div className="form_adding" >
            <form className="form" onSubmit={handleSubmit}>
                <div className="subcontent_form">
                    <label htmlFor="file" className="title_label">Image of Project</label>
                    <input type="file" id="file" name="file" onChange={handleChange} style={{ color:"#fff" }} />
                </div>
                <div className="subcontent_form">
                    <label htmlFor="title" className="title_label">Title</label>
                    <input type="text" name="title" onChange={handleChange} id="title" />
                </div>
                <div className="subcontent_form">
                    <label htmlFor="url" className="title_label">GitHub URL</label>
                    <input type="text" name="url" onChange={handleChange} id="url" />
                </div>
                <div className="subcontent_form">
                    <label htmlFor="language" className="title_label">Select to Language</label>
                    <SelectMultiple options={selection}  placeholder="Select to Language" selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>
                </div>
            </form>
            <button className="send">Send</button>
        </div>
    )
}



export default function ProjectsAdmin({ projects }) {
    const [ activeForm, setActiveForm ] = useState(false);
    

    return (
        <>
            <div id="Projects" className="Projects_Admin">
                <h2 className="title">Projects</h2>
                <span className="count">{ projects.length }/6</span>
                <section className="Portafolio">
                    <div className="galeria-portafolio" id="projects">
                    
                        {
                            projects && projects.map(element => (
                                <div className="content-portafolio" key={element.id}>
                                    
                                    <div className="img" style={{ backgroundImage: `url(${element.image})` }}></div>
                                    
                                    <p className="title-portafolios">{ element.title }</p>
                                    
                                    <div className="content-button-portafolio">
                                        <button className="noselect delete">
                                            <span className="text">Delete</span>
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </section>
                
                
                <div className="Content_Adding">
                    <button className={ projects.length >= 6 ? "noselect adding disabled" : "noselect adding"} onClick={()=>(setActiveForm(true)) }>
                        <span className="text">Add</span>
                        <span className="icon">
                            <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                            </svg>
                            <span className="buttonSpan">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" >
                                    <path fill="#ffffff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                                </svg>
                            </span>
                        </span>
                    </button>
                </div>

                {
                    activeForm && <div className="Container_Form_adding">
                        <ComponentAdding />
                    </div>
                }
                
            </div>
        </>
    )
}