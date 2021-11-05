import React from 'react'



class InputForm extends React.Component {
  render(){
    const {name, type, handleChange,}= this.props
    return(
      <label htmlFor={name}>
        {name}:
        <input type ={type} name={name} onChange={handleChange}/>
      </label>
    )
  }
}

export default InputForm