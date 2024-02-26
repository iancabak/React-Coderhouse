import logo from '../assets/guete.png';


const QuienesSomos = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-light">
                <div className="col text-center">
                    <h2 id='quienessomos' className="text-center mt-5">Quienes Somos?</h2>
                    <img className='mt-4 mb-4' src={logo} width={100} alt="logo" />
                    <p className="text-center ml-5 mr-5">The Guete Experience comenzó siendo un local pequeño de hamburguesas llamado "Burguers By Guete". Con el paso del tiempo, Guete se fue expandiendo por toda la provincia y ciudad de Buenos Aires y decidió comenzar una línea de restaurantes que ofrecen una gran variedad de alimentos basados en carne y pollo, junto con guarniciones saludables. Ante el éxito nacional, actualmente Guete se encuentra abriendo nuevas sucursales en España, Portugal y Miami.</p>
                </div>
            </div>
        </div>
        
    )
}

export default QuienesSomos;