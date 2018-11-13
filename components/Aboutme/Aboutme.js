import React, { Component } from "react";
import styles from "./Aboutme.css";

export default class Aboutme extends Component {
  render() {
    return (
      <div className={styles.Aboutme}>
        <h3>
          <a id="aboutme">About</a>
        </h3>
        <p>
          Full stack web developer with a passion for create responsive and
          scalable web applications. I am currently working at{" "}
          <a href="http://tutti.space">Tutti</a> as a React Native developer. I
          spend my free time playing with my dog, surfing, and building PCs.
        </p>
      </div>
    );
  }
}
