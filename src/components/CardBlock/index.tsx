import React from "react";
import styles from "./CardBlock.module.scss";
import hearth from "../../assets/image/1329083_appreciate_enabled_feelings_heart_like_icon.svg";
import birthday from "../../assets/image/photo1695031626.jpeg";
import bascet from "../../assets/image/8608534_ecommerce_basket_download_icon.svg";

const index = () => {
  return (
    <div className={styles.root}>
      <div className={styles.cardWrapper}>
        <div className={styles.topCard}>
          <img width={30} src={hearth} alt="сердечко" />
          <i>Agura</i>
        </div>
        <img
          className={styles.birthday}
          width={300}
          height={400}
          src={birthday}
          alt="Композиция на день рождения"
        />
        <h3>Композиция ко Дню Рождения</h3>
        <p className={styles.article}>Артикул 159753</p>
        <div className={styles.price}>
          <h4>1500 ₽</h4>
          <img width={30} src={bascet} alt="" />
        </div>
      </div>
    </div>
  );
};

export default index;
