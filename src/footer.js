import React from 'react';


const Footer = () => {
    return (
        <footer>
            <div className="color-celeste"> {/* Nuevo contenedor con el color celeste */}
                <div className="card">
                    <div className="card-header">
                        Alain Lanfranko Alcántara López
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>Donde el gusto está en la sazón y el cliente siempre tiene la razón</p>
                            <footer className="blockquote-footer">
                                Dedicado para <cite title="Source Title">Mi mami</cite>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
