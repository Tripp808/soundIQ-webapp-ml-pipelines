import React, { useState } from "react";
import styles from "./RetrainModel.module.css";
import axios from "axios";

const RetrainModel = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [showGif, setShowGif] = useState(false); // State to manage GIF visibility

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://music-popularity-predictor.onrender.com/retrain",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setMessage(response.data.message);
      setShowGif(true); // to GIF on successful upload
    } catch (error) {
      console.error("Error retraining model:", error);
      alert("Failed to retrain model.");
    }
  };

  return (
    <div className={styles.retrainContainer}>
      <h1 className={styles.title}>Retrain Your Model</h1>
      <form onSubmit={handleSubmit} className={styles.retrainForm}>
        <label htmlFor="file-upload" className={styles.label}>
          Upload your dataset:
        </label>
        <input
          type="file"
          id="file-upload"
          onChange={handleFileChange}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Retrain Now
        </button>
      </form>

      {message && <p className={styles.successMessage}>{message}</p>}

      {/* Display GIF if showGif is true */}
      {showGif && (
        <div className={styles.gifContainer}>
          <iframe
            src="https://giphy.com/embed/4xpB3eE00FfBm"
            width="480"
            height="466"
            frameBorder="0"
            className={styles.giphyEmbed}
            allowFullScreen
            title="Success Gif"
          ></iframe>
          <p>
            <a
              href="https://giphy.com/gifs/mrw-week-job-4xpB3eE00FfBm"
              target="_blank"
              rel="noopener noreferrer"
            >
              via GIPHY
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default RetrainModel;
