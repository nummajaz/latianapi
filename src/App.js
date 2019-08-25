import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      items : []
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ items : data }))
  }

  render() {
     
      const { items } = this.state

    return (
      <div>
         <ul>
            {items.map((item, index) =>

               <li key={index}> {item.name} <br/> {item.username}</li> 
               )


               }

         </ul>
      </div>
    );
  }
}

export default App;
