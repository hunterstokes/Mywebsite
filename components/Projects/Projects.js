import React, { Component } from "react";
import CoffeeLogo from '../../static/CoffeeLogo.svg';
import styles from "./Projects.css";

export default class Projects extends Component {
  render() {
    return (
      <div className={styles.Projects}>
        <h3>Projects</h3>

        <div>
          <ul>
            <li>
              <a href="http://tutti.space">
                <div className={styles.imageContainer}>
                  <img src="https://res.cloudinary.com/huntersattachments/image/upload/v1542077686/newtuttilogo.jpg" />
                </div> 
                <p>Tutti</p>
              </a>
            </li>
            <li>
              <a href="http://closeroast.herokuapp.com">
                <div className={styles.imageContainer}>
                  <CoffeeLogo className={styles.icon} />
                </div> 
                <p>Close Roast</p>
              </a>
            </li>
            <li>
              <a href="https://operationcode.org">
                <div className={styles.imageContainer}>
                  <img src="https://res.cloudinary.com/huntersattachments/image/upload/v1542077686/newopcodelogo.jpg" />
                </div> 
                <p>Operation Code</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
