import "../App.css"
import mainImg from "../images/mainimg.png"

export default function Hero() {
    return(
    <div className="App-hero">
        <img src={mainImg} className="App-img" alt="img"/>
        <h1 className="App-hero-heading">Online Experiences</h1>
        <p className="App-hero-para">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
    );
}