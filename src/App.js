import React, { Component } from 'react'
import "./style.css"
import { api } from './ApiInstance'
import { FORCAST_URL } from './constance'






class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  getForcast=()=>{
    api.get(FORCAST_URL).then((res,err)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err.response);
    })
  }

  render() {
    return (
      <div className="container">
      <div className="wrapper">
        <div className="header-container">
          <div className="header-top-wrapper">
            <h1>LONDON</h1>
            <div className="date-wrapper">
              <h4>18:36GMT</h4>
            </div>
            <h1>12*</h1>
          </div>
          <div className="header-bottom-wrapper">
            <span className="reloading-timmer">Reloading in 20s</span>
            <div className="progress-bar-container">
              <div className="progress-bar-wrapper">
                <div className="progress-bar">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <div className="weather-day-info-container">
            <h1>MON</h1>
            <h1>12*</h1>
            <div className="weather-info-type-wrapper">
              <div className="weather-image-wrapper">
                img
              </div>
              <h2>{"WEATHER DESC"}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default App
