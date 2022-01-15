import "./Background.css";
import screenshot from "./screenshot.png";

function Background() {
  return (
    <div className="background-container">
      <section className="background">
        <img
          className="column-1 screenshot"
          src={screenshot}
          alt="Design sample"
        />
        <div className="column-2">
          <img className="screenshot" src={screenshot} alt="Design sample" />
          <img
            className="screenshot screenshot_with-shadow"
            src={screenshot}
            alt="Design sample"
          />
        </div>
        <img
          className="column-3 screenshot"
          src={screenshot}
          alt="Design sample"
        />
      </section>
    </div>
  );
}

export default Background;
