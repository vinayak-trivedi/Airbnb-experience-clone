import "../App.css"
import mainLogo from "../images/mainlogo.png"

export default function Header() {
    return (
        <div className="App-header">
            <img src={mainLogo} className="App-logo" alt="logo" />
            
        </div>
    );
}