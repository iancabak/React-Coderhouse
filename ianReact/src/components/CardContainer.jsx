import Card from "./Card"

const CardContainer = () => {
    return (
        <div className='container m-2 '>
            <div className='row'>
                <div className='col-sm'>
                    <Card titulo={<h4>Guete's Onion Beast</h4>} imagen={Beast} parrafo={'La "Onion Beast" de Guete viene con un medallon de carne grueso, cheddar multiples aros de cebolla y la salsita guete'} />
                </div>
                <div className='col-sm'>
                    <Card titulo={<h4>Simple Guete</h4>} imagen={Simple} parrafo={'La "Simple Guete" es la opcion ideal para los amantes de los clasicos. 1 medallon de carne y cheddar'} />
                </div>
                <div className='col-sm'>
                    <Card titulo={<h4>Guete's Cheesy Fat Bitch</h4>} imagen={Cheesy} parrafo={'La "Cheesy Fat Bitch" de Guete es una bomba de sabor hecha para los mas glotones y obesos. '}/>
                </div>
            </div>
        </div>
    )
}

export default CardContainer;