import React from "react";
import styles from "./NotFoundBlock.module.scss";

const NotFound = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>🙁</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.descr}>К сожаления данная страница отсутсвует...</p>
    </div>
  );
};

export default NotFound;
