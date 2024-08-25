import React, { Component } from 'react'
import loading from './loading.gif'


export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="Loading...." style={{heigh: "10rem", width: "10rem" }} />
      </div>
    )
  }
}
