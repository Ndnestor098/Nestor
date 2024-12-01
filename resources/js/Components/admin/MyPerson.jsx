import React from "react";
import ButtonAdding from "./ButtonAdding";


export default function MyPerson({ myPerson }) {
    return(
        <div className="flex flex-col h-full w-full gap-6">
            <div className="h-full w-full p-10 ml-4 flex">
                <section className="flex w-full gap-5 flex-wrap xl:flex-nowrap">
                    <div className="flex flex-col gap-4">
                        <img src={myPerson.image} className="w-44 h-44 bg-slate-500 rounded-full" alt="" />
                        
                        <form action="" className="text-white text font-medium">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="image">Cambiar imagen</label>
                                <input type="file" name="image" id="image" />
                            </div>
                        </form>
                    </div>

                    <div className="flex flex-col gap-4">
                        <img src={myPerson.avatar} className="w-44 h-44 bg-slate-500 rounded-full" alt="" />
                        
                        <form action="" className="text-white text font-medium">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="avatar">Cambiar Avatar</label>
                                <input type="file" name="avatar" id="avatar" />
                            </div>
                        </form>
                    </div>
                </section>
                <section className="flex w-full gap-5 flex-wrap xl:flex-nowrap">
                    <form action="" className="flex flex-col gap-4 w-full">
                        <div className="flex flex-col gap-2 text-white font-medium w-full max-w-96">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" name="name" id="name" value={myPerson.name} className="text-black rounded-md"/>
                        </div>
                        <div className="flex flex-col gap-2 text-white font-medium w-full max-w-96">
                            <label htmlFor="experience">Experience</label>
                            <input type="date" name="experience" id="experience" value={myPerson.experience} className="text-black rounded-md"/>
                        </div>
                        <div className="flex flex-col gap-2 text-white font-medium w-full max-w-96">
                            <label htmlFor="client">Client</label>
                            <input type="text" name="client" id="client" value={myPerson.client} className="text-black rounded-md"/>
                        </div>
                        <div className="flex flex-col gap-2 text-white font-medium w-full max-w-96">
                            <label htmlFor="projects">Projects</label>
                            <input type="text" name="projects" id="projects" value={myPerson.projects} className="text-black rounded-md"/>
                        </div>
                    </form>
                </section>
            </div>
            
            <div className="w-full h-full p-10 ml-4">
                <form action="description" className="w-full">
                    <textarea className="w-full h-60 rounded-md" name="description" id="description">
                        { myPerson.description }
                    </textarea>
                </form>
            </div>
            
            <div className="w-full h-full">
                <ButtonAdding setActiveForm={"nothing"}/>
            </div>
        </div>
    )
}