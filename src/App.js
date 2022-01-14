import "./App.css";
import instagramIcon from "./instagramIcon.svg";

function App() {
  return (
    <div className="App">
      <a href="#" className="instagram-handle instagram-handle-container">
        <img src={instagramIcon} alt="Instagram icon" />
        <div className="instagram-handle__text">@asaldesign_uix</div>
      </a>
      <div className="blurb blurb-container">
        <h1 className="blurb__header">Panto Web Design #1</h1>
        <h2 className="blurb__subtitle blurb__subtitle-countainer">
          Landing Page Design for Furniture Website
        </h2>
        <a href="#" className="download-button">
          Download now
        </a>
      </div>
    </div>
  );
}

export default App;
