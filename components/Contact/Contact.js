import React, { Component } from "react";
import styles from "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className={styles.Contact}>
        <h3>Contact</h3>
        <ul>
          <li>E: hunterstokes@me.com</li>
          <li>P: (760) 224-0384</li>
          <li>
            <a href="https://res.cloudinary.com/huntersattachments/image/upload/v1542063384/Hunter_s_Resume.pdf">
              Resume
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
