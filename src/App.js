import React from 'react';
import {GiftsStore} from './container/giftsStore';
import './App.css';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <GiftsStore/>
    )
  }
}

export default App;
