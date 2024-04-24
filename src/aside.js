const feather = require('feather-icons');
setTimeout(()=>{
    feather.replace();
}, 1000);
const Aside = () => {
    return <aside>
        <div className="col-md-6">
            <h1>REGISTRATE</h1>
            <form action="">
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="" />
                </div>
                <div className="mb-3">
                    <label htmlFor="apellidos" className="form-label">Apellidos</label>
                    <input type="text" className="form-control" id="apellidos" placeholder="" />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Direccion</label>
                    <input type="text" className="form-control" id="direccion" placeholder="" />
                </div>
                <div className="mb-3">
                    <label htmlFor="usuario" className="form-label">Usuario</label>
                    <input type="text" className="form-control" id="usuario" placeholder="" />
                </div>
                <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo Electronico</label>
                    <input type="text" className="form-control" id="correo" placeholder="" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="contrasena" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="contrasena" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="fechaNacimiento" className="form-label">Fecha de nacimiento</label>
                    <select id="fechaNacimiento" className="form-select">
                        <option selected></option>
                        {[...Array(2006-1980).keys()].map(year => (
                            <option key={1980 + year}>{1980 + year}</option>
                        ))}
                    </select>
                </div>
                <div className="col-12 mt-3 mb-3">
                    <button type="submit" className="btn btn-primary">Registrar Usuario                
                    <i data-feather="save"></i>
                    </button>
                </div>
            </form>
        </div>
    </aside>;
}

export default Aside;