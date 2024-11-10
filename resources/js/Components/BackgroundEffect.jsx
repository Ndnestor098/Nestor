import { useEffect, useRef } from 'react';

export default function BackgroundEffect() {
    const outputRef = useRef(null);

    const marcarCoords = (x, y) => {
        if (outputRef.current) {
            outputRef.current.style.background = `radial-gradient(700px at ${x}px ${y}px, #3e7c6615, transparent 80%)`;
            outputRef.current.style.height = `${document.documentElement.scrollHeight}px`;
        }
    };

    const oMousePos = (evt) => {
        return {
            x: evt.clientX,
            y: evt.clientY
        };
    };

    useEffect(() => {
        const handleMouseMove = (evt) => {
            const mousePos = oMousePos(evt);
            marcarCoords(mousePos.x, mousePos.y);
        };

        // Añadir el evento `mousemove` al `body`
        document.body.classList.add("posicionMouse");
        document.body.addEventListener("mousemove", handleMouseMove);

        // Crear el div `.iluminacion` en el `body`
        const illuminationDiv = document.createElement('div');
        illuminationDiv.className = 'iluminacion';
        outputRef.current = illuminationDiv;
        document.body.appendChild(illuminationDiv);

        // Eliminar el evento y el div al desmontar el componente
        return () => {
            document.body.removeEventListener("mousemove", handleMouseMove);
            document.body.removeChild(illuminationDiv);
            document.body.classList.remove("posicionMouse");
        };
    }, []);

    return null; // No necesitamos renderizar nada en el componente
}
