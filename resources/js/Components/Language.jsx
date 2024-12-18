import React, { useState } from "react";

export default function Language() {
    const [ active, setActive ] = useState(false);

    return(
        <>
            <span id="language" className="world" onClick={()=>{ setActive(!active) }}>
                <img src="/images/svg/language.svg" width="30px" title="Pagina de Nestor" alt="Nestor - language" />
            </span>

            <div style={{ display : active ? "" : "none" }}>
                <div className="language">
                    <div className="container">
                        <span id="cancel" onClick={()=>{ setActive(!active) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                            </svg>
                        </span>
                        <div>
                            <p>Languages</p>
                        </div>
                        <div>
                            <a href="/WebCV/es/">
                                <img src="/images/spain.webp" alt="español" width="40px" height="28px" title="Español" />
                                <span style={{ width: "50px" }}>Español</span>
                            </a>
                        </div>
                        <div>
                            <a href="/WebCV/it/">
                                <img src="/images/italian.webp" alt="italiano" width="40px" height="28px" title="Italiano" />
                                <span style={{ width: "50px" }}>Italiano</span>
                            </a>
                            
                        </div>
                        <div>
                            <a href="/WebCV/">
                                <img src="/images/uk.webp" alt="english" width="40px" height="28px" title="English" />
                                <span style={{ width: "50px" }}>English</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}