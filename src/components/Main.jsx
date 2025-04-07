import Card from "./Card";
import MoodBoard from "./MoodBoard";
function Main() {
    const data =[
        { name: "Mark", title: "Frontend developer", bio: "I like to work with different frontend technologies and play video games." },
        { name: "Tiffany", title: "Engineering manager", bio: "I have worked in tech for 15 years and love to help people grow in this industry." },
        { name: "Doug", title: "Backend developer", bio: "I have been a software developer for over 20 years and I love working with Go and Rust." },
    ];
    return (
        <>
        <div className="flex-container">
            {/* <Card {...data[0]} />
            <Card name={data[1].name} title={data[1].title} bio={data[1].bio} />
            <Card name={data[2].name} title={data[2].title} bio={data[2].bio} /> */}
            {data.map((item, index) => (
                <Card key={`${item.name}-${index}`} {...item} />
            ))}
        </div>
        <div className="mood-container">  
            <MoodBoard />
        </div>
        </>
    )
}
export default Main;