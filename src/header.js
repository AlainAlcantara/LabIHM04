import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header style={{ backgroundColor: '#e7a83e', padding: '20px 0', borderBottom: '1px solid #ccc' }}>
            <h1 style={{ textAlign: 'center', fontSize: '2em', marginBottom: '20px', color: '#000' }}>
                <FontAwesomeIcon icon={faUtensils} />{' '}
                Restaurante Chelita
            </h1>
            <nav className="navbar" style={{ backgroundColor: '#e7a83e', borderRadius: '8px', padding: '10px' }}>
                <div className="container-fluid">
                    <button className="btn" style={{ margin: '0 10px', backgroundColor: '#9a736e', color: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '10px 20px', borderRadius: '5px' }}>Principal</button>
                    <button className="btn" style={{ margin: '0 10px', backgroundColor: '#9a736e', color: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '10px 20px', borderRadius: '5px' }}>Platos</button>
                    <button className="btn" style={{ margin: '0 10px', backgroundColor: '#9a736e', color: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '10px 20px', borderRadius: '5px' }}>Contáctanos</button>
                    <button className="btn" style={{ margin: '0 10px', backgroundColor: '#9a736e', color: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '10px 20px', borderRadius: '5px' }}>Promociones</button>
                    <form className="d-flex" role="search" style={{ margin: '0 10px', backgroundColor: '#fff', borderRadius: '4px', padding: '5px 20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" style={{ border: 'none', outline: 'none', width: '200px' }} />
                        <button className="btn btn-outline-success" type="submit" style={{ color: '#000', borderColor: '#000', boxShadow: 'none' }}>Buscar</button>
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default Header;


