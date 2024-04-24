const Header = () => {
    return (
        <header style={{ backgroundColor: '#e7f2ff', padding: '20px 0', borderBottom: '1px solid #ccc' }}>
            <h1 style={{ textAlign: 'center', fontSize: '2em', marginBottom: '20px', color: '#ff0000' }}>Restaurante Chelita</h1>
            <nav className="navbar bg-body-tertiary" style={{ backgroundColor: '#f8d7da', borderRadius: '8px', padding: '10px' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ color: '#000' }}><strong style={{ fontSize: '1.2em' }}>Busca un plato :D</strong></a>
                    <form className="d-flex" role="search" style={{ backgroundColor: '#fff', borderRadius: '4px', padding: '5px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', border: '1px solid #000' }}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="" style={{ border: 'none', outline: 'none' }} />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default Header;