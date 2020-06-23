import React, { Component } from 'react'
import "./style.css"
import { api } from './ApiInstance'
import { FORCAST_URL, CURRENT_WEATHER_URL } from './constance'
import Day from './components/Day'
import Header from './components/Header'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         daysName:["MON","TUE","WED","THUR","FRI"],
         days:[{name:"MON"},{name:"TUE"},{name:"WED"},{name:"THUR"},{name:"FRI"}]
    }
  }

  getForcast=()=>{
    api.get(FORCAST_URL).then((res,err)=>{
      this.updateState(res);
    }).catch((err)=>{
      console.log(err,"<---");
    })
  }

  getCurrentWeather=()=>{
    api.get(CURRENT_WEATHER_URL).then((res,err)=>{
      const date = new Date();
      const headerInfo = {
        temp:res.data.main.temp,
        time:date.getHours() + ":" + date.getMinutes() + "GMT",
        icon:res.data.weather[0].icon
      }
      this.setState({headerInfo})
    }).catch((err)=>{
      console.log(err.response);
    })
  }
  // returns array with Indices of the next five days in the list
  // from the API data (every day at 12:00 pm)
  getDayIndices =(data)=> {
    data = data.data;
    let dayIndices = [];
    dayIndices.push(0);

    let index = 0;
    let tmp = data.list[0].dt_txt.slice(8, 10);

    for (let i = 0; i < 4; i++) {
      while (
        tmp === data.list[index].dt_txt.slice(8, 10) ||
        data.list[index].dt_txt.slice(11, 13) !== '15'
      ) {
        index++;
      }
      dayIndices.push(index);
      tmp = data.list[index].dt_txt.slice(8, 10);
    }
    return dayIndices;
  };

  updateState=(data)=> {
    const city = "London";
    const days = [];
    const dayIndices = this.getDayIndices(data);
    data = data.data
    for (let i = 0; i < 5; i++) {
      days.push({
        name:this.state.daysName[i],
        date: data.list[dayIndices[i]].dt_txt,
        weather_desc: data.list[dayIndices[i]].weather[0].description,
        icon: data.list[dayIndices[i]].weather[0].icon,
        temp: data.list[dayIndices[i]].main.temp
      });
    }
    this.setState({
      city: city,
      days: days
    });
  };

  componentDidMount() {
    this.getCurrentWeather();
    this.getForcast();
  }
  render() {
    return (
      <div className="container">
      <div className="wrapper">
        <Header />
        <div className="bottom-container">
          {this.state.days.map((item,idx)=><Day data={item}/>)}  
        </div>
      </div>
    </div>
    )
  }
}

export default App
