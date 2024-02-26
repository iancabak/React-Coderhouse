import { Link } from "react-router-dom";


const Sucursales = () => {
    return (
        <div className="container text-center mt-4">
            <h1 className="text-light">Nuestras sucursales</h1>
            <div className="row mt-4 text-center">
                <div className="col-md-3 text-center mt-3">
                    <div className="card m-2 w-100 text-center h-100 border border-0">
                        <img src="https://trending-media.com/wp-content/uploads/2019/07/La-chopperia.jpg" className="card-img-top" alt="Palermo" height={150}/>
                        <div className="card-body">
                            <h2>Palermo</h2>
                            <p className="btn btn-warning mt-2">Ver en maps</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center mt-3">
                    <div className="card m-2 w-150 text-center h-100 border border-0">
                        <img src="https://www.clarin.com/img/2023/01/11/Kt9pT6i4X_720x0__1.jpg" className="card-img-top" alt="Belgrano" height={150}/>
                        <div className="card-body">
                            <h2>Belgrano</h2>
                            <p className="btn btn-warning mt-2">Ver en maps</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center mt-3">
                    <div className="card m-2 w-100 text-center h-100 border border-0">
                        <img src="https://laguiadelisboa.com/wp-content/uploads/2018/01/hamburguesas-artesanales.jpg" className="card-img-top" alt="Lisboa" height={150}/>
                        <div className="card-body">
                            <h2>Lisboa</h2>
                            <p className="btn btn-warning mt-2">Ver en maps</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center mt-3">
                    <div className="card m-2 w-100 text-center h-100 border border-0">
                        <img src="https://img.restaurantguru.com/w550/h367/rb28-Mi-Barrio-design-2022-10-10.jpg" className="card-img-top" alt="Pilar" height={150}/>
                        <div className="card-body">
                            <h2>Pilar</h2>
                            <p className="btn btn-warning mt-2">Ver en maps</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center mt-3">
                    <div className="card m-2 w-100 text-center h-100 border border-0">
                        <img src="https://www.laroyale.es/files/0001/royalebcal4037qte88al130y6py555/web.system/assets/contents/home/20151001_112210_la_royale_2.jpg" className="card-img-top" alt="Barcelona" height={150}/>
                        <div className="card-body">
                            <h2>Barcelona</h2>
                            <p className="btn btn-warning mt-2">Ver en maps</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center mt-3">
                    <div className="card m-2 w-100 text-center h-100 border border-0">
                        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/97/6c/a1/innenansicht.jpg?w=600&h=-1&s=1" className="card-img-top" alt="Recoleta" height={150}/>
                        <div className="card-body">
                            <h2>Recoleta</h2>
                            <p className="btn btn-warning mt-2">Ver en maps</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center mt-3">
                    <div className="card w-100 text-center m-2 h-100 border border-0">
                        <img src="https://media-cdn.tripadvisor.com/media/photo-s/14/d6/79/b0/una-cerveza-fria-al-aire.jpg" className="card-img-top" alt="Escobar" height={150}/>
                        <div className="card-body">
                            <h2>Escobar</h2>
                            <p className="btn btn-warning mt-2">Ver en maps</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center mt-3">
                    <div className="card w-100 text-center m-2 h-100 border border-0">
                        <img src="https://s3.ppllstatics.com/ideal/gourmet/multimedia/2023/03/10/nickel.jpeg" className="card-img-top" alt="Palermo" height={150}/>
                        <div className="card-body">
                            <h2>Granada</h2>
                            <p className="btn btn-warning mt-2">Ver en maps</p>
                        </div>
                    </div>
                </div>
                <div className="col text-center">
                    <Link to={"/"} ><button className="text-center btn btn-warning mt-5">Volver a inicio</button></Link>
                </div>
            </div>
        </div>    
    )
}

export default Sucursales;