import React from 'react'

const SecondPage = () => {
 <div id="divContainer">
  {
    this.state.employees.map((value,index)=>{
      return(
        <div key={index} id="childContainer">Name:{value.Name}| Department:{value.Department}| Rating:{value.Rating}</div>
      )
    }
    )
  }
</div>
}

export default SecondPage