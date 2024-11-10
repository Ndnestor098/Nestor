import React, { useState } from "react";


export default function Nav() {
    const [activeButtons, setActiveButtons ] = useState(0);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(
        <nav>
            <div className="menu">
                <div className="menu-enlaces">
                    <ul className="menu-enlaces-iconos">
                        <li className={activeButtons === 0 ? "activate-li" : ""}>
                            <img src="/images/svg/home.svg" width="30" height="30" onClick={() => {setActiveButtons(0); scrollToSection("Header")}} title="Nestor's Page" alt="Nestor - icon-menu" />
                            <a href="#Header">Home</a>
                        </li>
                        <li className={activeButtons === 1 ? "activate-li" : ""}>
                            <img src="/images/svg/user.svg" width="30" height="30" onClick={() => {setActiveButtons(1);scrollToSection("About")}} title="Nestor's Page" alt="Nestor - icon-menu" />
                            <a href="#About">About me</a>
                        </li>
                        <li className={activeButtons === 2 ? "activate-li" : ""}>
                            <img src="/images/svg/config.svg" width="30" height="30" onClick={() => {setActiveButtons(2);scrollToSection("Experience")}} title="Nestor's Page" alt="Nestor - icon-menu" />
                            <a href="#Experience">Experiences</a>
                        </li>
                        <li className={activeButtons === 3 ? "activate-li" : ""}>
                            <img src="/images/svg/work.svg" width="30" height="30" onClick={() => {setActiveButtons(3);scrollToSection("Projects")}} title="Nestor's Page" alt="Nestor - icon-menu" />
                            <a href="#Projects">Portfolio</a>
                        </li>
                        <li className={activeButtons === 4 ? "activate-li" : ""}>
                            <img src="/images/svg/certificate.svg" width="38" height="38" onClick={() => {setActiveButtons(4);scrollToSection("Certificates")}} title="Pagina de Nestor" alt="Nestor - icon-menu" />
                            <a href="#Certificates">Certificados</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}