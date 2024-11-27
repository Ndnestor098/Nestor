import { useForm } from "@inertiajs/react";
import React, { useState, useRef, useEffect } from "react";
import SelectMultiple from "../SelectMultiple";

function ComponentAdding({ activeForm }) {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const { data, setData, post, errors } = useForm({
        file: null,
        title: null,
        url: null,
        language: null,
    });
    
    const selection = ["PHP", "Laravel", "JavaScript", "SQL"]

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "file") {
            setData((prev) => ({ ...prev, [name]: files[0] }));
        } else {
            setData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        data.language = selectedOptions;

        post('/project',{
            onSuccess : activeForm(false)
        });
    }

    return(
        <div className="form_adding" >
            <form className="form" onSubmit={handleSubmit}>
                <h2 style={{ margin:"0" }}>Adding New Project</h2>

                <div className="subcontent_form">
                    <label htmlFor="file" className="title_label">Image of Project</label>
                    <input type="file" id="file" name="file" onChange={handleChange} style={{ color:"#fff" }} />
                    { errors.file && <span style={{ color:"#cb2929", textAlign:"center", fontSize:"14", fontWeight:"600" }}>{errors.file}</span> }
                </div>

                <div className="subcontent_form">
                    <label htmlFor="title" className="title_label">Title</label>
                    <input type="text" name="title" onChange={handleChange} id="title" />
                    { errors.title && <span style={{ color:"#cb2929", textAlign:"center", fontSize:"14", fontWeight:"600" }}>{errors.title}</span> }
                </div>

                <div className="subcontent_form">
                    <label htmlFor="url" className="title_label">GitHub URL</label>
                    <input type="text" name="url" onChange={handleChange} id="url" />
                    { errors.url && <span style={{ color:"#cb2929", textAlign:"center", fontSize:"14", fontWeight:"600" }}>{errors.url}</span> }
                </div>

                <div className="subcontent_form">
                    <label htmlFor="language" className="title_label">Select to Language</label>
                    <SelectMultiple options={selection}  placeholder="Select to Language" selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions}/>
                    { errors.language && <span style={{ color:"#cb2929", textAlign:"center", fontSize:"14", fontWeight:"600" }}>{errors.language}</span> }
                </div>

                <div className="subcontent_form">
                </div>

                <button className="send">Send</button>
            </form>
        </div>
    )
}



export default function ProjectsAdmin({ projects }) {
    const [ activeForm, setActiveForm ] = useState(false);
    const [ activeDelete, setActiveDelete ] = useState(false);
    const { data, setData, delete: destroy, errors } = useForm({
        id: null,
    });

    const handleDelete = () =>{
        destroy(`/project/${data.id}` ,{
            onSuccess : console.log("OK")
        })
    }

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
                                        <button className="noselect delete" onClick={()=>{
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
                            ))
                        }

                    </div>
                </section>
                
                
                <div className="Content_Adding">
                    <button 
                        className={ projects.length >= 6 ? "noselect adding disabled" : "noselect adding"} 
                        onClick={()=>( projects.length >= 6 ? setActiveForm(false) : setActiveForm(true) ) }>
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
                        <div style={{ position:"absolute", top:"30px", right:"30px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{setActiveForm(false)}} fill="white" style={{ height:"30px", width:"30px", cursor:"pointer" }} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <ComponentAdding activeForm={setActiveForm}/>
                    </div>
                }

                {
                    activeDelete && <div className="Container_Form_adding">
                        <div className="bg-red-100 absolute top-5 border-t border-b border-red-500 text-red-700 px-4 py-3" role="alert">
                            <p className="font-bold">You are about to delete this project.</p>
                            <p className="text-sm">When deleting it is not recoverable.</p>
                            
                            <div className="flex gap-3 w-100 justify-end mt-3">
                                <button onClick={()=>{setActiveDelete(false)}}>Cancel</button>
                                <button onClick={()=>{handleDelete(); setActiveDelete(false);}}>Accept</button>
                            </div>
                        </div>
                    </div>
                }
                
            </div>
        </>
    )
}