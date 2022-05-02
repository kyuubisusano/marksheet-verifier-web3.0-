import React, { Component } from 'react'
import { useNavigate } from "react-router-dom";

 function AccessSelector () {
    let navigate = useNavigate(); 
  const clickHandler = ( path) =>{
    navigate(path);
  }
  
    return (
    
      <div>
      <button type="submit" className='slc-button'  onClick={() =>clickHandler('/verifyMarksheet')}>Verify Marksheet</button> 
      <button type="submit" className='slc-button'  onClick={() =>clickHandler('/createMarksheet')}>Create Marksheet</button>
      </div>
      
      )
  
}
export default AccessSelector;


