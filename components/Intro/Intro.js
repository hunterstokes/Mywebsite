import React, { Component } from "react";
import ArrowDownIcon from "../../static/ArrowDown.svg";
import styles from "./Intro.css";

export default class Intro extends Component {
  render() {
    return (
      <div className={styles.Myname}>
        <h1>Hunter Brown</h1>
        <h4>Professional Web Developer</h4>
        <a href="#aboutme" className={styles.icon}>
          <ArrowDownIcon />
        </a>
      </div>
    );
  }
}
