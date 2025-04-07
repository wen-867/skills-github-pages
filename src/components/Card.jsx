import './Card.css';
function Card({name,title,bio}) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p className="card-title">{title}</p>
            <p className="card-bio">{bio}</p>
        </div>
    )
}
export default Card;