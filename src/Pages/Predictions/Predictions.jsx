import React, { useState } from "react";
import styles from "./Predictions.module.css";
import axios from "axios";
import { motion } from "framer-motion";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import "react-toastify/dist/ReactToastify.css";

const Predictions = () => {
  const [file, setFile] = useState(null);
  const [predictions, setPredictions] = useState(null);
  const [visualization, setVisualization] = useState({
    prediction_distribution: null,
    correlation_heatmap: null,
    feature_importance: null,
  });
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      toast.error("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    setLoading(true);

    try {
      const response = await axios.post(
        "https://music-popularity-predictor.onrender.com/predict",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const { predictions, visualization } = response.data;

      if (predictions && predictions.length > 0) {
        setPredictions(predictions);
      } else {
        toast.warning("No predictions available for the provided file.");
      }

      if (visualization) {
        setVisualization({
          prediction_distribution: visualization.prediction_distribution,
          correlation_heatmap: visualization.correlation_heatmap,
          feature_importance: visualization.feature_importance,
        });
      }

      toast.success("Predictions retrieved successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Failed to get predictions.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.predictionsContainer}>
      <h1 className={styles.title}>Music Predictions</h1>
      <p className={styles.subtitle}>
        Upload your music dataset to see predictions of which songs are likely
        to succeed.
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="file-upload" className={styles.label}>
          Upload your music dataset:
        </label>
        <div className={styles.uploadButton}>
          <input
            type="file"
            id="file-upload"
            onChange={handleFileChange}
            className={styles.input}
          />
        </div>
        <motion.button
          type="submit"
          className={styles.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Predictions
        </motion.button>
      </form>

      {loading && (
        <div className={styles.loader}>
          <ReactLoading type="spin" color="#007bff" height={50} width={50} />
        </div>
      )}

      {predictions && predictions.length > 0 && (
        <div className={styles.resultsContainer}>
          <h2 className={styles.resultsTitle}>Predictions Summary:</h2>
          <div className={styles.scrollContainer}>
            <table className={styles.predictionsTable}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Track</th>
                  <th>Artist</th>
                  <th>Prediction</th>
                </tr>
              </thead>
              <tbody>
                {predictions.map((pred, index) => (
                  <motion.tr
                    key={index}
                    className={
                      pred.Prediction === 1
                        ? styles.successPredictionRow
                        : styles.failurePredictionRow
                    }
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <td>{index + 1}</td>
                    <td>{pred.Track}</td>
                    <td>{pred.Artist}</td>
                    <td>
                      {pred.Prediction === 1
                        ? "Will perform well"
                        : "Will not perform well"}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {visualization.prediction_distribution && (
        <div className={styles.visualizationContainer}>
          <h2 className={styles.visualizationTitle}>
            Prediction Visualization:
          </h2>
          <div className={styles.scrollContainer}>
            <img
              src={`data:image/png;base64,${visualization.prediction_distribution}`}
              alt="Prediction Distribution"
              className={styles.visualizationImage}
            />
          </div>
          <p className={styles.visualizationDescription}>
            The distribution of the popularity predictions shows how the model
            classifies songs into two categories: "Will Perform Well" (songs
            expected to have a high chance of success) and "Will Not Perform
            Well" (songs predicted to underperform). This insight helps
            musicians and labels assess the success potential of tracks.
          </p>
        </div>
      )}

      {visualization.correlation_heatmap && (
        <div className={styles.visualizationContainer}>
          <h2 className={styles.visualizationTitle}>Correlation Heatmap:</h2>
          <div className={styles.scrollContainer}>
            <img
              src={`data:image/png;base64,${visualization.correlation_heatmap}`}
              alt="Correlation Heatmap"
              className={styles.visualizationImage}
            />
          </div>
          <p className={styles.visualizationDescription}>
            This heatmap illustrates the correlation between numerical features
            in the dataset. Positive or negative correlations reveal
            relationships between features that may influence track popularity.
          </p>
        </div>
      )}

      {visualization.feature_importance && (
        <div className={styles.visualizationContainer}>
          <h2 className={styles.visualizationTitle}>Feature Importance:</h2>
          <div className={styles.scrollContainer}>
            <img
              src={`data:image/png;base64,${visualization.feature_importance}`}
              alt="Feature Importance"
              className={styles.visualizationImage}
            />
          </div>
          <p className={styles.visualizationDescription}>
            The feature importance chart shows the relative importance of each
            feature in predicting track popularity. Features with high
            importance significantly influence the model's predictions.
          </p>
        </div>
      )}

      {!loading && !visualization.prediction_distribution && (
        <p className={styles.noVisualizationMessage}>
          Scroll down after predictions to view visualizations.
        </p>
      )}
    </div>
  );
};

export default Predictions;
