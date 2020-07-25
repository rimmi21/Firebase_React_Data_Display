import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

class App extends React.Component {
constructor(){
   super();
  this.state={
    employee: []
  };
}
componentDidMount(){
  const rootRef=firebase.database().ref();
  const employeeRef=rootRef.child('employee');
  //console.log("inside render   ",employee);
  employeeRef.on('value',snap=>{
    this.setState({
      employee: snap.val()
          });
  });
  }
render(){
  return (
    <div>
     <p> {this.state.employee}</p>
     
                <table>
                <tbody>
                  <tr>
                    <th>Country</th>
                    <th>Best Food</th>
                    <th>Best Place</th>
                  </tr>
                </tbody>
                <tbody>
                {const postList = this.state.country.map((dataList, index) =><tr>
                    <td>{this.state.country[index]}</td>
                    <td>{this.state.food[index]}</td>
                    <td>{this.state.best_place[index]}</td>
                  </tr>)}
                </tbody>
                </table>
    </div>
  );
}
}
export default App;
