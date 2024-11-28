import React from "react";

export default function ButtonAdding({ array, max, setActiveForm }) {
    return(
        <>
            <div className="Content_Adding">
                <button 
                    className={ array.length >= max ? "noselect adding disabled" : "noselect adding"} 
                    onClick={()=>( array.length >= max ? setActiveForm(false) : setActiveForm(true) ) }>
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
        </>
    )
}