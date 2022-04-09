import "../App.css"
import star from "../images/star.png"

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="App-card-component">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="cardImg" src={props.item.coverImg} alt="experience img" />
            <div className="stats">
                <img className="star" src={star}/>
                <p className="rating">{props.item.stats.rating}</p>
                <p className="reviewcount">({props.item.stats.reviewCount})</p>
            </div>
            <p className="title">{props.item.title}</p>
            <p className="price">{`from $${props.item.price}/person`}</p>
        </div>
    );
}