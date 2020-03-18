import React from 'react';
import Tree1 from "./Tree1"
import data from "./data";                      //  Json Data Importing
import 'bootstrap/dist/css/bootstrap.min.css';  //Bootstrap Css from React Bootstrap.

class  App extends React.Component {

  constructor(props)
  {
    super(props)
    this.state={
      data:data
    }
  }
 render(){
  return (
<Tree1 data={this.state.data} />

  ); 
}
}

export default App;
