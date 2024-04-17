const Header = () => {
    return <header>
            <h1 style={{ textAlign: 'center', fontSize: '2em' }}>Restaurante Chelita</h1>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">Busca un plato :D</a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="" />
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
    </header>;
}

export default Header;