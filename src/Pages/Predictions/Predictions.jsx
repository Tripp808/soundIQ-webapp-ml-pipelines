import styles from "./Predictions.module.css";

const Predictions = () => {
  return (
    <div className={styles.predictionsContainer}>
      <h1 className={styles.title}>Music Predictions</h1>
      <p className={styles.description}>
        Use advanced insights to predict your next chart-topping hit.
      </p>
      <div className={styles.predictionsSection}>
        <div className={styles.predictionsBox}>
          <h2>Analyze Trends</h2>
          <p>
            Discover popular genres, beats, and themes in the music industry.
          </p>
        </div>
        <div className={styles.predictionsBox}>
          <h2>Track Engagement</h2>
          <p>Measure audience interaction and optimize your releases.</p>
        </div>
        <div className={styles.predictionsBox}>
          <h2>AI-Powered Insights</h2>
          <p>Leverage data to create music that resonates with listeners.</p>
        </div>
      </div>
    </div>
  );
};

export default Predictions;
