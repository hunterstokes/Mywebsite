import React, { Component } from "react";
import styles from "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className={styles.Contact}>
        <h3>Contact</h3>
        
          <h6>E: hunterstokes@me.com</h6>
          <h6>P: (760) 224-0384</h6>
          <h6>
            <a href="https://res.cloudinary.com/huntersattachments/image/upload/v1658717438/Hunter_Brown_Resume.pdf">
              Resume
            </a>
          </h6>
        
      </div>
    );
  }
}
