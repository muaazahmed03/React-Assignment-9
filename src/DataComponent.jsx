import React from 'react';
import styles from './Data.module.css';

const DataComponent = ({title, price, description, category, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.category}>{category}</p>
        <p className={styles.price}>Rs: {price}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default DataComponent;
