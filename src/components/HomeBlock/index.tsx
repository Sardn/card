import React from "react";
import { Link } from "react-router-dom";
import birthday from "../../assets/image/photo1695031626.jpeg";
import styles from "./HomeBlock.module.scss";
const HomeBlock = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Композиция ко Дню Рождения</h1>
      <Link to="/card">
        <div>
          <img width={200} src={birthday} alt="Композиция на день рождения" />
        </div>
      </Link>
    </div>
  );
};

export default HomeBlock;
