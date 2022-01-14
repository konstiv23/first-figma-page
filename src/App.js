import "./App.css";
import instagramIcon from "./instagramIcon.svg";

function App() {
  return (
    <div className="App">
      <a href="#" className="instagram-handle instagram-handle-container">
        <img src={instagramIcon} alt="Instagram icon" />
        <div className="instagram-handle__text">@asaldesign_uix</div>
      </a>
    </div>
  );
}

export default App;
