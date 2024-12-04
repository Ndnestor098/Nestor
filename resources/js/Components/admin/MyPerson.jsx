import React, { useEffect, useState } from "react";
import ButtonAdding from "./ButtonAdding";
import { useForm } from "@inertiajs/react";
import DeleteButton from "./DeleteButton";

const updateError = (method, message) => {
    setErrorLanguage(prevState => ({
        ...prevState,
        [method]: {
            ...prevState[method],
            error: message,
        },
    }));
};

export default function MyPerson({ myPerson }) {
    const { data, setData, post } = useForm({
        name: myPerson.name || null,
        experience: myPerson.experience || null,
        client: myPerson.client || null,
        projects: myPerson.projects || null,
        description: myPerson.description || null,
        image: null,  
        avatar: null, 
        backend : myPerson.backend || null,
        frontend : myPerson.frontend || null,
    });

    const [ backendText, setBackendText ] = useState();
    const [ frontendText, setFrontendText ] = useState();
    const [ level, setLevel ] = useState();
    const [ errorLanguage, setErrorLanguage ] = useState({
        backend : {
            error : null
        },
        frontend : {
            error : null
        },
    });

    const handleChangeLanguage = (method, add, level) => {
        if(!add){
            updateError(method, `Write a ${method} language please`);
            return ;
        }

        if(!level){
            updateError(method, "Select a level please");
            return ;
        } 

        if (!["Beginner", "Intermediate", "Advanced"].includes(level)) {
            updateError(method, "Invalid level selected");
            return;
        }
        
        const object = {...data[method], [add] : level}

        if(Object.keys(object).length > 6){
            updateError(method, `Maximum number of ${method} languages is 6`);
            return ;
        }

        setErrorLanguage(prevState => ({
            ...prevState, 
            [method]: {
                ...prevState[method], 
                error: null,
            },
        }));
        
        setData({...data, [method] : object});
    }

    const handleDeleteLanguage = (method, select) =>{
        const newObject = { ...data[method] };
        delete newObject[select]; 
        setData({ ...data, [method]: newObject });
    }

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
    
        const updatedData = {
            ...data,
            [name]: type === "file" ? files[0] : value, // Manejo de archivos
        };
    
        setData(updatedData);
    };
    
    const handleSubmit = async () => {
        const payload = { ...data };

        try {
            await post('/my', {
                data: payload,
                onSuccess: () => { console.log("Datos enviados con éxito:", payload); },
                onError : (e) => { console.log(e); }
            });
        } catch (error) {
            console.error("Error al enviar datos:", error);
        }
    };

    return(
        <div className="flex flex-col h-full w-full gap-6">
            <div className="h-full w-full p-10 ml-4 flex">
                <section className="flex w-full gap-5 flex-wrap xl:flex-nowrap">
                    <div className="flex flex-col gap-4">
                        <img src={myPerson.image} className="w-44 h-44 bg-slate-500 rounded-full" alt="" />
                        
                        <form action="" className="text-white text font-medium">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="image">Cambiar imagen</label>
                                <input type="file" name="image" id="image" onChange={(e)=>{handleChange(e)}}/>
                            </div>
                        </form>
                    </div>

                    <div className="flex flex-col gap-4">
                        <img src={myPerson.avatar} className="w-44 h-44 bg-slate-500 rounded-full" alt="" />
                        
                        <form action="" className="text-white text font-medium">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="avatar">Cambiar Avatar</label>
                                <input type="file" name="avatar" id="avatar" onChange={(e)=>{handleChange(e)}}/>
                            </div>
                        </form>
                    </div>
                </section>

                <section className="flex w-full gap-5 flex-wrap xl:flex-nowrap">
                    <form action="" className="flex flex-col gap-4 w-full">
                        <div className="flex flex-col gap-2 text-white font-medium w-full max-w-96">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" name="name" id="name" value={data.name} onChange={(e)=>{handleChange(e)}} className="text-black rounded-md"/>
                        </div>
                        <div className="flex flex-col gap-2 text-white font-medium w-full max-w-96">
                            <label htmlFor="experience">Experience</label>
                            <input type="date" name="experience" id="experience" value={data.experience} onChange={(e)=>{handleChange(e)}} className="text-black rounded-md"/>
                        </div>
                        <div className="flex flex-col gap-2 text-white font-medium w-full max-w-96">
                            <label htmlFor="client">Client</label>
                            <input type="text" name="client" id="client" value={data.client} onChange={(e)=>{handleChange(e)}} className="text-black rounded-md"/>
                        </div>
                        <div className="flex flex-col gap-2 text-white font-medium w-full max-w-96">
                            <label htmlFor="projects">Projects</label>
                            <input type="text" name="projects" id="projects" value={data.projects} onChange={(e)=>{handleChange(e)}} className="text-black rounded-md"/>
                        </div>
                    </form>
                </section>
            </div>
            
            <div className="w-full h-full p-10 ml-4">
                <form action="description" className="w-full">
                    <textarea 
                        className="w-full h-60 rounded-md" 
                        name="description" 
                        id="description" 
                        onChange={(e)=>{handleChange(e)}}
                        value={data.description || ""}
                    >
                    </textarea>
                </form>
            </div>

            <div className="w-full h-full p-5 ml-4 flex text-white">
                <div className="w-full h-full flex flex-col gap-8 item-center">
                    <div className="w-full h-full flex flex-col gap-3 items-center">
                        <label htmlFor="" className="font-semibold">Write the backend language to add or update</label>
                        <input type="text" name="backend" onChange={(e)=>{setBackendText(e.target.value)}} id="backend_text" className="w-full max-w-72 text-black"/>
                        
                        <label htmlFor="level">Select a level</label>
                        <select name="level" id="level" defaultValue="" onChange={e=>{setLevel(e.target.value)}} className="w-full max-w-72 text-black ">
                            <option value="" disabled>Select a Level</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                        {
                            errorLanguage.backend.error && <span className="text-red-600 font-semibold">{errorLanguage.backend.error}</span>
                        }

                        <button type="button" className="backend" onClick={()=>{handleChangeLanguage("backend", backendText, level)}}>Add</button>
                    </div>

                    <div className="w-full h-full flex gap-5 justify-center">
                        {
                            data.backend && Object.entries(data.backend).map((array)=>(
                                <div key={array[0]} className="flex ">
                                    <div className="flex gap-2 items-center">
                                        <DeleteButton onClick={()=>{ handleDeleteLanguage("backend", array[0]) }}/>
                                        <label htmlFor={ array[0] }> { array[0] } </label>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="w-full h-full flex flex-col gap-8 item-center">
                    <div className="w-full h-full flex flex-col gap-3 items-center">
                        <label htmlFor="frontend_text" className="font-semibold">Write the frontend language to add or update</label>
                        <input type="text" name="frontend" onChange={(e)=>{setFrontendText(e.target.value)}} id="frontend_text" className="w-full max-w-72 text-black"/>
                        
                        <label htmlFor="level">Select a level</label>
                        <select name="level" id="level" defaultValue="" onChange={e=>{setLevel(e.target.value)}} className="w-full max-w-72 text-black ">
                            <option value="" disabled>Select a Level</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                        {
                            errorLanguage.frontend.error && <span className="text-red-600 font-semibold">{errorLanguage.frontend.error}</span>
                        }

                        <button type="button" className="frontend" onClick={()=>{handleChangeLanguage("frontend", frontendText, level)}}>Add</button>
                    </div>

                    <div className="w-full h-full flex gap-5 justify-center">
                        {
                            data.frontend && Object.entries(data.frontend).map((array)=>(
                                <div key={array[0]} className="flex ">
                                    <div className="flex gap-2 items-center">
                                        <DeleteButton onClick={()=>{ handleDeleteLanguage("frontend", array[0]) }}/>
                                        <label htmlFor={ array[0] }> { array[0] } </label>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>  
            
            <div className="w-full h-full">
                <ButtonAdding title="Update" setActiveForm={handleSubmit}/>
            </div>
        </div>
    )
}