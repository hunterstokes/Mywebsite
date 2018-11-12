import React, { Component } from 'react';
import Link from 'next/link'


export default class Projects extends Component {
  render() {
    return (
      <div>
        <h3>Projects</h3>
        {/* Tutti Card */}
        <div>
          <img src=""/>
          <p>My current work is at <Link href="http://tutti.space"><a>Tutti</a></Link> the "airbnb" for musicians</p>
        </div>
      </div>
    )
  }
}
