// import React, { Component, useEffect, useState } from 'react'

// import HashFunction from '../HashFunction'
// import web3 from "../web3"


// class CreateMarkSheetForm extends Component {

//   constructor(props) {
//     super(props)
    
    
  
//     this.state = {
//        rollno: '',
//        maths: 0,
//        physics: 0,
//        chemistry: 0,
//        english: 0,
//        computerScience: 0
//     }
//   }
  
//   handleInputChange = event => {

//     const target = event.target;
//     const value = target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value,
//     });
//   };
//     handleSubmit = async(event) => {
//         event.preventDefault();
       
//        const accounts =  web3.eth.getAccounts();
//        alert(this.state.rollno)
//        alert(this.state.rollno)
//        //const out = await HashFunction.methods.createMarksheet("101", [12,23,45,65,33]).send({from: '0xfE0c40DC011B61615425BF6Ca2a529624E784006'});
//        //const out = await HashFunction.methods.checkMsHash("101", [12,23,45,65,33]).call();
//        //console.log(out)

//     }

//     render() {
//         return(
//             <div>
//                  <form onSubmit={ this.handleSubmit}>
//         <fieldset>
//           <div>
//               <label>
//             Roll No.
//           </label>
//           <input name="rollno" value={this.state.rollno}   onChange={this.handleInputChange.bind(this)} required  pattern='[a-zA-Z0-9]+' />
//           </div>
//           </fieldset> 
       
//           <fieldset>
//           <div >
//           <label>
//             Math
//           </label>
//           <input name="maths" type={'number'} min='0' value={this.state.maths}   onChange={this.handleInputChange.bind(this)}/>
//           </div>
//           <div >
//           <label>
//             Physics 
//           </label>
//           <input name="physics" type={'number'} min='0' value={this.state.physics}   onChange={this.handleInputChange.bind(this)} />
//           </div>
//           <div>
//           <label>
//             Chemistry
//           </label>
//           <input name="chemistry" type={'number'} min='0' value={this.state.chemistry}   onChange={this.handleInputChange.bind(this)}/>
//           </div>
//           <div>
//           <label>
//             English
//           </label>
//           <input name="english" type={'number'} min='0' value={this.state.english}   onChange={this.handleInputChange.bind(this)}/>
//           </div>
//           <div>
//           <label>
//             Computer Science
//           </label>
//           <input name="computerScience" type={'number'} min='0' value={this.state.computerScience}   onChange={this.handleInputChange.bind(this)}/>
//           </div>
//         </fieldset>
//         <br/>
//         <button type="submit" className='cta-button'>Submit</button>
//       </form>
//             </div>
//         )
//     }

// }

// export default CreateMarkSheetForm;


import React, { Component, useEffect, useState } from 'react'
import './marksheetForm.css'
import HashFunction from '../HashFunction'
import web3 from "../web3"


class CreateMarkSheetForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      rollno: '',
      maths: '',
      physics: '',
      chemistry: '',
      english: '',
      computerScience: '',
    }
  }

  handleInputChange = event => {

    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    console.log("console", this.state.rollno)
    const marks = [
      this.state.chemistry,
      this.state.computerScience,
      this.state.english,
      this.state.maths,
      this.state.physics
    ]
    console.log("kya",marks)
    console.log("rooll",typeof(this.state.rollno))
    const accounts = web3.eth.accounts[0];
    console.log("account ",accounts)
    // const out = await HashFunction.methods.createMarksheet(this.state.rollno, marks).send({from: '0x1d39A1b31a57E0D6B2463E8ADb848dC29Cb0f697'});
    // console.log(out)

    // alert("Your Marksheet has been created. Your blockhash is:  " + out.blockHash)
  }

  render() {
    return (
      <div className="container">
        <div className="main-card" >
          <div className="card-image">
            <h2 className="card-heading">
              Create Marksheet
              {/* <small>Let us create your account</small> */}
            </h2>
          </div>
          <div>
            <form className="card-form" onSubmit={this.handleSubmit}>
              <div className="input">
                <input name="rollno" type={'number'} className="input-field" placeholder="Roll number" value={this.state.rollno} onChange={this.handleInputChange.bind(this)} required pattern='[a-zA-Z0-9]+' />
                <label className="input-label">Roll Number</label>
              </div>
              {/* <input name="rollno" value={this.state.rollno} onChange={this.handleInputChange.bind(this)} required pattern='[a-zA-Z0-9]+' /> */}

              <div className="input">
                <input name="maths" className="input-field" type={'number'} min='0' value={this.state.maths} onChange={this.handleInputChange.bind(this)} placeholder="Subject 1" required />
                <label className="input-label">Subject 1</label>
              </div>
              <div className="input">
                <input name="physics" type={'number'} min='0' value={this.state.physics} onChange={this.handleInputChange.bind(this)} className="input-field" placeholder="Subject 2" required />
                <label className="input-label">Subject 2</label>
              </div>
              {/* <input name="physics" type={'number'} min='0' value={this.state.physics} onChange={this.handleInputChange.bind(this)} /> */}
              <div>
                <div className="input">
                  <input name="chemistry" type={'number'} min='0' value={this.state.chemistry} onChange={this.handleInputChange.bind(this)} className="input-field" placeholder="Subject 3" required />
                  <label className="input-label">Subject 3</label>
                </div>
                {/* <input name="chemistry" type={'number'} min='0' value={this.state.chemistry} onChange={this.handleInputChange.bind(this)} /> */}
                <div className="input">
                  <input name="english" type={'number'} min='0' value={this.state.english} onChange={this.handleInputChange.bind(this)} className="input-field" placeholder="Subject 4" required />
                  <label className="input-label">Subject 4</label>
                </div>
                {/* <input name="english" type={'number'} min='0' value={this.state.english} onChange={this.handleInputChange.bind(this)} /> */}
                <div className="input">
                  <input name="computerScience" type={'number'} min='0' value={this.state.computerScience} onChange={this.handleInputChange.bind(this)} className="input-field" placeholder="Subject 5" required />
                  <label className="input-label">Subject 5</label>
                </div>
                {/* <input name="computerScience" type={'number'} min='0' value={this.state.computerScience} onChange={this.handleInputChange.bind(this)} /> */}
              </div>
              <br />
              <button type="submit" className='cta-button'>Submit</button>
            </form>
          </div >
        </div>
      </div>
    )
  }

}

export default CreateMarkSheetForm;