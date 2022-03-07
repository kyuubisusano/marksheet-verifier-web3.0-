import React, { Component } from 'react'


class CreateMarkSheet extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        alert('You have submitted the form.')
    }

    render() {
        return(
            <div>
                 <form onSubmit={ this.handleSubmit}>
        <fieldset>
          <div style={{whitespace:'nowrap' }}>
              <label>
            Roll No.
          </label>
          <input name="rollno" />
          </div>
          <label>
            <p>Math</p>
            <input name="rollno" />
          </label>
          <label>
            <p>Physics</p>
            <input name="rollno" />
          </label>
          <label>
            <p>Chemistry</p>
            <input name="rollno" />
          </label>
          <label>
            <p>English</p>
            <input name="rollno" />
          </label>
          <label>
            <p>Computer Science</p>
            <input name="rollno" />
          </label>
        </fieldset>
        <button type="submit" className='cta-button'>Submit</button>
      </form>
            </div>
        )
    }

}

export default CreateMarkSheet;