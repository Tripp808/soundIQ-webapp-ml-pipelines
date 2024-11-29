import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Background } from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/Hero";
import Predictions from "./Pages/Predictions/Predictions";
import RetrainModel from "./Pages/RetrainModel/RetrainModel";

const App = () => {
  let heroData = [
    { text1: "Predict the Next Hit", text2: "Your Music, Our Insights" },
    { text1: "Transform Data ", text2: "into Musical Success Stories." },
    { text1: "Discover Trends.", text2: "Optimize Tunes. Rule the Charts." },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);
    return () => clearInterval(interval); // Cleanup to prevent memory leaks
  }, []);

  return (
    <Router>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <Hero
              setPlayStatus={setPlayStatus}
              heroData={heroData[heroCount]}
              heroCount={heroCount}
              setHeroCount={setHeroCount}
              playStatus={playStatus}
            />
          }
        />
        {/* Predictions Page */}
        <Route path="/predictions" element={<Predictions />} />
        {/* Retrain Model Page */}
        <Route path="/retrain-model" element={<RetrainModel />} />
      </Routes>
    </Router>
  );
};

export default App;
