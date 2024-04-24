const feather = require('feather-icons');
setTimeout(()=>{
    feather.replace();
}, 1000);
const Aside = () => {
    return <aside>
        <div className="col-md-6">
            <h1>Registrate<i data-feather="smile"></i></h1>
            <form action="">
            <div className="mb-3">
    <label htmlFor="nombre" className="form-label">
        <i data-feather="user"></i> Nombre
    </label>
    <input type="text" className="form-control" id="nombre" placeholder="" />
</div>
                <div className="mb-3">
                    <label htmlFor="apellidos" className="form-label"> <i data-feather="user"></i> Apellidos</label>
                    <input type="text" className="form-control" id="apellidos" placeholder="" />
                </div>
                <div className="mb-3">
    <label htmlFor="direccion" className="form-label">
        <i data-feather="home"></i> Dirección
    </label>
    <input type="text" className="form-control" id="direccion" placeholder="" />
</div>
<div className="mb-3">
    <label htmlFor="usuario" className="form-label">
        <i data-feather="check-circle"></i> Usuario
    </label>
    <input type="text" className="form-control" id="usuario" placeholder="" />
</div>
                <div className="mb-3">
                    <label htmlFor="correo" className="form-label"> <i data-feather="mail"></i>Correo Electronico</label>
                    <input type="text" className="form-control" id="correo" placeholder="" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="contrasena" className="form-label"><i data-feather="lock"></i>Contraseña</label>
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
    <button type="submit" className="btn btn-primary">
        <i data-feather="save"></i> Registrar Usuario
    </button>
</div>
            </form>
        </div>
    </aside>;
}

export default Aside;