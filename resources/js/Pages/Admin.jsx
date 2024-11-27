import BackgroundEffect from '@/Components/BackgroundEffect';
import { Head } from '@inertiajs/react';
import '../../css/style.css';
import '../../css/admin.css';
import Menu from '@/Components/admin/menu';
import Render from '@/Components/admin/Render';


export default function Administrator({ projects, certificates }) {
    return(
        <>
            <Head title='Administrator'/>
            <section className='Content_Admin'>
                <Menu />

                <Render projects={ projects } certificates={ certificates } />
            </section>
            <BackgroundEffect />
        </>
    )
}