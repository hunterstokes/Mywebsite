import React, { Component } from "react";
import Link from "next/link";
import styles from "./Projects.css";

export default class Projects extends Component {
  render() {
    return (
      <div className={styles.Projects}>
        <h3>Projects</h3>
        {/* Tutti Card */}
        <div>
          <ul>
            <li>
              <a href="http://tutti.space">
                <img src="https://res.cloudinary.com/huntersattachments/image/upload/v1542073009/tuttilogo.png" />
                
              </a>
            </li>
            <li>
              <a href="http://closeroast.herokuapp.com">
                <img src="https://res.cloudinary.com/huntersattachments/image/upload/v1542072396/closeroast.jpg" />
                
              </a>
            </li>
            <li>
              <a href="https://operationcode.org">
                <img src="https://res.cloudinary.com/huntersattachments/image/upload/v1542071912/operationcodeblue.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
