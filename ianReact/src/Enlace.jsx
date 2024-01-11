const Enlace = ({elemento, link, color}) => {
    return (
        <a className={color} href={link}>{elemento}</a>
    )
}


export default Enlace;