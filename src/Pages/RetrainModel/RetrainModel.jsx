import styles from "./RetrainModel.module.css";

const RetrainModel = () => {
  return (
    <div className={styles.retrainContainer}>
      <h1 className={styles.title}>Retrain Your Model</h1>
      <p className={styles.description}>
        Refine your AI model to better suit your unique music needs.
      </p>

      <form className={styles.retrainForm}>
        <label htmlFor="file-upload" className={styles.label}>
          Upload Your Dataset:
        </label>
        <input type="file" id="file-upload" className={styles.input} />

        <label htmlFor="model-name" className={styles.label}>
          Model Name:
        </label>
        <input
          type="text"
          id="model-name"
          placeholder="Enter model name"
          className={styles.input}
        />

        <button type="submit" className={styles.button}>
          Retrain Now
        </button>
      </form>
    </div>
  );
};

export default RetrainModel;
