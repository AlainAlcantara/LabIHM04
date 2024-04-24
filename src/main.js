
const Main = () => {
    return         <main>
        
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
                <img src="https://i.blogs.es/5620ff/lomo-saltado-dap/1366_2000.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block" style={{ color: 'white' }}>
                    <h5>Lomo saltado</h5>
                    <p>Rico platillo hecho lomo fino, hierbas, arroz y papas fritas</p>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
                <img src="https://imgmedia.buenazo.pe/475x475/buenazo/original/2021/10/07/615f4e52d5caa917986ec958.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block" style={{ color: 'white' }}>
                    <h5>Ají de gallina</h5>
                    <p>Hecho con gallina, papas, crema especial de ají de gallina y mucho sabor.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="https://portal.andina.pe/EDPfotografia/Thumbnail/2015/06/28/000300772W.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block" style={{ color: 'white' }}>
                    <h5>Ceviche de pescado</h5>
                    <p>Rico platillo hecho con pescado de calidad, limón, leche, condimentos y mucho amor.</p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    <div className="text-center mt-4">
                <p>El restaurante chelita es un sitio muy bueno para compartir en familia
                    ofrece comida maritima y criolla enfocada a la comida preuana 
                    Se ubica en: Av.Mansiche 313. Frente al complejo Mansiche
                    Nuestra mision es dar un servicio de calidad tanto en comida como en atencion. 
                    :D
                </p>
            </div>
</main>
}
 
export default Main;