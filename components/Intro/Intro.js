import React, { Component } from 'react'
import styles from './Intro.css'

export default class Intro extends Component {
  render() {
    return (
      <div className={styles.Myname}>
        <h2>Hunter Brown</h2>
        <p>Professional Web Developer</p>
      </div>
    )
  }
}
