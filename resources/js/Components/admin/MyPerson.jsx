import React from "react";
import ButtonAdding from "./ButtonAdding";
import { useForm } from "@inertiajs/react";


export default function MyPerson({ myPerson }) {
    const { data, setData, post } = useForm({
        name: myPerson.name || null,
        experience: myPerson.experience || null,
        client: myPerson.client || null,
        projects: myPerson.projects || null,
        description: myPerson.description || null,
        image: null,  
        avatar: null, 
    });

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
    
        console.log("Enviando datos:", payload);  // Esto se imprimirá si la función se llama
    
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
                        defaultValue={data.description}
                    >
                    </textarea>
                </form>
            </div>
            
            <div className="w-full h-full">
                <ButtonAdding setActiveForm={handleSubmit}/>
            </div>
        </div>
    )
}