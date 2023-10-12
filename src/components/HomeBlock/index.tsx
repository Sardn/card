import React from "react";
import { Link } from "react-router-dom";
import balloons from "../../assets/image/7310784_new_year_balloons_celebration_decoration_icon.svg";
import styles from "./HomeBlock.module.scss";
const HomeBlock = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Композиция ко Дню Рождения</h1>
      <Link to="/card">
        <div>
          <img width={200} src={balloons} alt="Композиция на день рождения" />
        </div>
      </Link>
    </div>
  );
};

export default HomeBlock;
