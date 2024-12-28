import React from "react";
import { Data } from "./Data";
import DataComponent from "./DataComponent";
import styles from "./Data.module.css";

const App = () => {
  return (
    <div className={styles.grid}>
      {Data.map((e, i) => {
        return (
          <DataComponent
            key={i}
            title={e.title}
            price={e.price}
            description={e.description}
            category={e.category}
            image={e.image}
          />
        );
      })}
    </div>
  );
};

export default App;
