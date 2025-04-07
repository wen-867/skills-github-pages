function MoodBoardItem({color,image,description}) {
    return (
        <div className="mood-board-item" style={{ backgroundColor: color }}>
            <img src={image} alt={description} className="mood-board-image"/>
            <h3 className="mood-board-text">{description}</h3>
        </div>
    );
}
export default MoodBoardItem;