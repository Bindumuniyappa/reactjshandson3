import React from 'react'
import './App.css'
import { Link} from 'react-router-dom'
import RoutingPage from './Component/RoutingPage'
import useState from 'react'


const App = () => {

  let [state,setstate]=useState({
    Name:"",
    Department:"",
    Rating:"",
    employees:[]
  }
  )
  const ChangeHandler=(e)=>{
  setstate({...state,[e.target.name] : e.target.value})
  }
  const submitHandler=(e)=>{
    e.preventDefault();
  }

  return (
  <div id="bodyBackground">    
    <div id="headerText">EMPLOYEE FEEDBACK FORM</div>
    <form>
  <label id="nameText" className="labelText">
    Name:
    <input type="text" name="Name" onChange={ChangeHandler} style={{fontSize:'30px',borderRadius:'20px',marginTop:'20px'}} />
  </label>
  <br></br>
  <br></br>
  <label id="nameText" className="labelText">
    Department:
    <input type="text" name="Department" onChange={ChangeHandler} style={{fontSize:'30px',borderRadius:'20px',marginTop:'20px'}}/>
  </label>
  <br></br>
  <br></br>
  <label id="nameText" className="labelText">
    Rating:
    <input type="number" name="Rating" onChange={ChangeHandler} style={{fontSize:'30px',borderRadius:'20px',marginTop:'20px'}}/>
  </label>
  <br></br>
  <br></br>
  
  <RoutingPage/>
  <Link to={'/second'}><button onClick={submitHandler} className="labelText" style={{borderRadius:'15px',marginLeft:'700px',fontSize:'30px',marginTop:'20px'}}>Submit</button></Link>
</form>  
</div>

  )
}


export default App