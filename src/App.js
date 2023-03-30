import React, { useState } from 'react';
import './App.css';
import { TextField,Stack} from '@mui/material';
import { Button } from '@mui/material';



function App() {
  const[height,setHeight]=useState(0)
  const [weight,setWeight]=useState(0)
  const[result,setResult]=useState(0)


  const handleSubmit=(e)=>{
    e.preventDefault()
    if(height===0||weight===0){
      alert('please enter valid input')
    }
    else{
      let a= parseInt(height)*parseInt(height)
      let b=parseInt(weight)/a
      let output=b*10000
      setResult(output)
    }
  }
  const handleReset =()=>{
    setResult(0)
    window.location.reload()
  } 


  return (
    <div className="App text-center">
    <div className='container' >
      <div className="title-heading">
        <h1 className='title'>BMI Calculator</h1>
        <p className='title_para'>Calculate  your Body Mass Index <br />
        <b><i> BMI Categories:</i></b>
         <br />
        Underweight = BMI of 18.5 or less <br />
       Normal weight = 18.5-24.9 <br />
       Overweight = 25-29.9  <br />
       Obesity = BMI of 30 or greater
         </p>
      </div>
    <div className="display">
      <div className="display-text">
        <h3 className='amount'>{result}</h3>
        <p  className='amount-para'>Calculated BMI</p>

      </div>
    </div>
<form onSubmit={e=>handleSubmit(e)} >
  <div className="input-box">
  <TextField className="outlined-basic" label="Height in cm" variant="outlined" 
  onChange={e=>setHeight(e.target.value)}/>

  </div>
  <div className="input-box">
  <TextField className="outlined-basic" label="weight in Kg" variant="outlined"
   onChange={e=>setWeight(e.target.value)} />

  </div>
<div className="btn-group">
<Stack direction="row" spacing={5}>
<Button type='submit' className='btn' style={{backgroundColor:'black'}} variant="contained">Calculate</Button>
<Button onClick={handleReset} className='btn' variant="outlined">Reset</Button>
</Stack>
</div>

</form>

    </div>
    </div>
  );
}

export default App;
