import React from 'react';
import ReactDOM from 'react-dom';


const app = document.getElementById('app')

export default class App extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render(){
    return(
      <div>
        Hello world
      </div>
    )
  }


}

ReactDOM.render(<App/>, app)
