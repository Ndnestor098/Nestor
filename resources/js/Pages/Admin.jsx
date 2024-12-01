import BackgroundEffect from '@/Components/BackgroundEffect';
import { Head } from '@inertiajs/react';
import '../../css/style.css';
import '../../css/admin.css';
import Menu from '@/Components/admin/menu';
import Render from '@/Components/admin/Render';
import { useEffect, useState } from 'react';


export default function Administrator({ projects, certificates, myPerson }) {
    const [ renderMenu, setRenderMenu] = useState(()=>{
        const savedRender  = sessionStorage.getItem("render");
        return savedRender ? parseInt(savedRender) : 0;
    });


    useEffect(()=>{
        sessionStorage.setItem("render", renderMenu);
    }, [renderMenu]);

    return(
        <>
            <Head title='Administrator'/>
            <section className='Content_Admin'>
                <div className='h-screen w-64 relative'>
                </div>
                    <Menu setRenderMenu={setRenderMenu} renderMenu={renderMenu} avatar={myPerson.avatar}/>
                

                <Render projects={ projects } certificates={ certificates } renderMenu={renderMenu} datePerson={myPerson} />
            </section>
            <BackgroundEffect />
        </>
    )
}