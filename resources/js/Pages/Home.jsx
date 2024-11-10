import { Head } from '@inertiajs/react';
import '../../css/style.css';
import Nav from '@/Layouts/Nav';
import Header from '@/Components/Header';
import Language from '@/Components/Language';
import HeroImage from '@/Components/HeroImage';
import About from '@/Components/About';
import Experience from '@/Components/Experience';
import Projects from '@/Components/Projects';
import Certificates from '@/Components/Certificate';
import Contact from '@/Components/Contact';
import BackgroundEffect from '@/Components/BackgroundEffect';

export default function Home({ projects, certificates }) {
    
    return (
        <>
            <Head title="Home" />
            <Language />
            <Nav/>
            <Header />
            <HeroImage />

            <About />
            <Experience />
            <Projects projects={projects} />
            <Certificates certificates={certificates} />
            <Contact />

            <BackgroundEffect />
        </>
    );
}
