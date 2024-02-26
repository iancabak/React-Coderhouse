const ResenasContainer = () => {
    return (
        <section className="container-fluid bg-warning">
            <div className="container bg-light p-4">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 col-xl-8 text-center">
                    <h3 className="mb-4 mt-4">Experiencias</h3>
                    <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                        En The Guete Experience nos encargamos de que cada visita sea una experiencia única. Por eso nos interesa que nos dejes tu review para ver en que podemos mejorar.
                    </p>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="d-flex justify-content-center mb-4">
                            <img src="https://vivolabs.es/wp-content/uploads/2022/03/perfil-hombre-vivo.png"
                            className="rounded-circle shadow-1-strong" width="100" height="100" />
                        </div>
                        <p className="lead my-3">
                            "Me encantan las hamburguesas de Guete"
                        </p>
                        <p className="font-italic font-weight-bold mb-4">Santino Montevidoni</p>
                    </div>
                    <div className="col-md-6 mb-0">
                        <div className="d-flex justify-content-center mb-4">
                            <img src="https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png"
                            className="rounded-circle shadow-1-strong" width="100" height="100" />
                        </div>
                        <p className="lead my-3 text-muted">
                            "Muy buena atención al cliente y siempre llega la comida rapido."
                        </p>
                        <p className="font-italic font-weight-bold mb-4">Agostina Ciruela</p>
                    </div>
                </div>
            </div>
        </section>
        
    )
    
}

export default ResenasContainer;