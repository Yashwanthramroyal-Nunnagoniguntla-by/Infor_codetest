import React ,{Component}from 'react';
import Table from 'react-bootstrap/Table';    
import "./Tree1.css";

class Tree1 extends Component {
  constructor(props){
    super(props);
    console.log("ppp",props);
    
    this.state = {
      Employees:props.data,
      visable:'',
      addition:0,
      save:'',
      save1:''
 } 
  }
  changeState(e){
    this.state.save=e;
  
    if(this.state.save===this.state.save1){
        if(this.state.addition==0){
            this.state.visable=true;
        }
        else{ 
            this.state.visable=false;
        }
    }
    else{
         this.state.visable=true;
        this.state.addition=0; 
    }
    this.state.addition++;
    this.state.save1=e;
    }
  render() {
    const {Employees}=this.state;
    return (
      <div>
        <div className="text">  
<h1 className = "heading">Employee Hierarchy</h1>    
<div className="table_size">
<Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Manager Id</th>
          </tr>
        </thead>
        <tbody>
        {
        Employees.map(employee => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.Name}</td>
            <td>${employee.salary}</td>
            <td>{employee.managerid}</td>
          </tr>
        ))}  
        </tbody>
        </Table>              
        </div>

<div className="total_align">
<span >
<h4>Test Case2 :</h4><b>Total Salary:  </b>${
        Employees.reduce((total, { salary }) => total += salary, 0)    //Total Salary Of company.
      }
      {
         console.log("sequence",Employees.sort((a,b)=> (a.Name.toLowerCase()>b.Name.toLowerCase())*2-1) )      //Employees In Alphabetical Order.
                                                                                                                //Converting to lowercase for Alphabetical sorting.
       }      
      </span>  
      </div>


<div className="card">
<div className="card-body">
  <h4>Test Case1 :</h4>
  <h4 className="card-title"><b>Employee Hierarchy</b></h4>
  {
    Employees.map((ceo)=> (ceo.managerid === 0 ? 
    <ul key={ceo.id}>
    <li>{ceo.Name.toLowerCase()}
    <p>Employees of : {ceo.Name.toLowerCase()}</p>
    <ul>
    {Employees.map((manager) => (manager.managerid === ceo.id ?
        <li key={manager.id}>{manager.Name.toLowerCase()}
        {
              ceo.managerid===manager.id?<p>Employees of : {manager.Name.toLowerCase()}</p>:<p></p>
        } 
        <ul >
        {Employees.map((employee) => (employee.managerid === manager.id ?<div>
          {
            employee.managerid===manager.id?<p>{this.changeState(manager.id)}</p>:<p></p>
       } 
       {
           this.state.visable?<p>Employees of : {manager.Name.toLowerCase()}</p>:<p></p>
       }
       <li key={employee.id}  style={{marginLeft:"100px"}}>{employee.Name.toLowerCase()}</li></div> :""  
      ))} 
      </ul>
        </li>:""
      ))} 
    </ul>
    </li>
    </ul>:""
 ) )}
</div>
</div>
</div>
      </div>
    );
  }
}

export default Tree1;