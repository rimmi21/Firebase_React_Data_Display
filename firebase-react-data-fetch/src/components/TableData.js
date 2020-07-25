import React from 'react';

import * as firebase from 'firebase';
import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class TableData extends React.Component {
constructor(props){
super(props);
this.state = {
        food: [],
        best_place: [],
        country: [],
        countries: '',
        
    };
};

componentDidMount(){
const rootRef = firebase.database().ref();
const post = rootRef.child('Countries').orderByKey();

     post.once('value', snap => {
       snap.forEach(child => {
           this.setState({
               country: this.state.country.concat([child.key]),
               food: this.state.food.concat([child.val().Food]),
               best_place: this.state.best_place.concat([child.val().Best_Place])
           });
            console.log(post);
           const postList =(
                <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Country</th>
                    <th>Best Food</th>
                    <th>Best Place</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.country.map((dataList, index) => <tr>
                    <td>{this.state.country[index]}</td>
                    <td>{this.state.food[index]}</td>
                    <td>{this.state.best_place[index]}</td>
                  </tr>
                  )}
                  </tbody>
                </Table>
                        );
          console.log(postList);
            this.setState({
                post: postList
            });
       });
   }); 
  }
render(){
  return (
    <div >

  <ul>{this.state.post}</ul>

</div>
  );
}
}
export default TableData;

