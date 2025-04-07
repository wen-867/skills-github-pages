import MoodBoardItem from "./MoodBoardItem";
import "./MoodBoard.css";
function MoodBoard() {
    const moodBoardData = [
        { color: "#25cf23", image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg", description: "Caribbean" },
        { color: "#4b89e6", image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg", description: "Gawadar Beach" },
        { color: "#000fff", image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg", description: "Cape Town" },
        { color: "#ed5320", image: "https://cdn.freecodecamp.org/curriculum/labs/ship.jpg", description: "Suez Canal" },
        { color: "#20c7ed", image: "https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg", description: "Santorini" },
        { color: "#008000", image: "https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg", description: "Istanbul" }
    ];
    return (
        <div>
            <h1 className="mood-board-heading">Destination Mood Board</h1>
            <div className="mood-board">
                {
                    moodBoardData.map((item, index) => (
                        <MoodBoardItem key={index} color={item.color} image={item.image} description={item.description} />
                    ))
                }
            </div>
        </div>
    );
}
export default MoodBoard;