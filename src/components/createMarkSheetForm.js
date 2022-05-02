import React, { Component } from 'react'


class CreateMarkSheetForm extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       rollno: '',
       maths: 0,
       physics: 0,
       chemistry: 0,
       english: 0,
       computerScience: 0
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
    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state)
    }

    render() {
        return(
            <div>
                 <form onSubmit={ this.handleSubmit}>
        <fieldset>
          <div>
              <label>
            Roll No.
          </label>
          <input name="rollno" value={this.state.rollno}   onChange={this.handleInputChange.bind(this)} required  pattern='[a-zA-Z0-9]+' />
          </div>
          </fieldset> 
       
          <fieldset>
          <div >
          <label>
            Math
          </label>
          <input name="maths" type={'number'} min='0' value={this.state.maths}   onChange={this.handleInputChange.bind(this)}/>
          </div>
          <div >
          <label>
            Physics 
          </label>
          <input name="physics" type={'number'} min='0' value={this.state.physics}   onChange={this.handleInputChange.bind(this)} />
          </div>
          <div>
          <label>
            Chemistry
          </label>
          <input name="chemistry" type={'number'} min='0' value={this.state.chemistry}   onChange={this.handleInputChange.bind(this)}/>
          </div>
          <div>
          <label>
            English
          </label>
          <input name="english" type={'number'} min='0' value={this.state.english}   onChange={this.handleInputChange.bind(this)}/>
          </div>
          <div>
          <label>
            Computer Science
          </label>
          <input name="computerScience" type={'number'} min='0' value={this.state.computerScience}   onChange={this.handleInputChange.bind(this)}/>
          </div>
        </fieldset>
        <br/>
        <button type="submit" className='cta-button'>Submit</button>
      </form>
            </div>
        )
    }

}

export default CreateMarkSheetForm;