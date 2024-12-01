import "./Background.css";
import video1 from "../../assets/video1.mp4";
import image1 from "../../Assets/image1.png";
import image2 from "../../Assets/image2.png";
import image3 from "../../Assets/image3.png";
import musiclistener from "../../assets/musiclistener.jpg";
import studio from "../../assets/studio.jpg";
import musicai from "../../assets/musicai.jpg";

export const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={musiclistener} className="background fade-in" alt="" />;
  } else if (heroCount === 1) {
    return <img src={studio} className="background fade-in" alt="" />;
  } else if (heroCount === 2) {
    return <img src={musicai} className="background fade-in" alt="" />;
  }
};
