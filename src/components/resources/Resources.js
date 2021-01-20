import React from "react";
import styles from "./Resources.module.css";

const Resources = () => {
  return (
    <div>
      <div className={styles.card}>
        <img src="img_avatar.png" alt="Avatar" style={{ width: "100%" }} />
        <div className={styles.container}>
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
