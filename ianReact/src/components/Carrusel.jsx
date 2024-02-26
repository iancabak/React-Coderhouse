import carrusel1 from '../assets/carrusel1.jpg';
import carrusel2 from '../assets/carrusel2.jpg';
import carrusel3 from '../assets/carrusel3.jpg';


const Carrusel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={carrusel1} alt="First slide"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='display-4 font-weight-bold'>El T-Guete</h5>
                        <p>Nada como un rico T-bone, especial de la casa.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={carrusel2} alt="Second slide"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='display-4 font-weight-bold'>Promo en Hamburguesas</h5>
                        <p>Si pedís 4 hamburguesas, te regalamos la quinta!</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={carrusel3} alt="Third slide"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='display-4 font-weight-bold'>Promo en Hamburguesas</h5>
                        <p>Si pedís 4 hamburguesas, te regalamos la quinta!</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            
</div>
    )
    
}

export default Carrusel;