import "./Hero.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import arrow_btn from "../../assets/arrow_btn.png";
import play_icon from "../../assets/play_icon.png";
import pause_icon from "../../assets/pause_icon.png";

export const Hero = ({
  heroData,
  setHeroCount,
  heroCount,
  setPlayStatus,
  playStatus,
}) => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore" onClick={() => navigate("/retrain-model")}>
        <p>Retrain Your Model</p>
        <img src={arrow_btn} alt="Arrow Button" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
        <div className="hero-play">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
            alt="Play/Pause Icon"
          />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
};
