import react from 'react';


export default function HeroImage({avatar}) {
    
    return (
        <section className="area-img">
            <div className="fondo-img">
                <img src={avatar}title="Nestor's Page" alt="Nestor - image" />
            </div>
        </section>
    )
}