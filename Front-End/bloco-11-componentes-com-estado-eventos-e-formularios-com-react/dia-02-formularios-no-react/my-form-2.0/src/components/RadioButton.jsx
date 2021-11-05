import React from 'react'

class RadioButton extends React.Component {
  render(){
    const {handleChange, name, type} = this.props
    return(
      <label htmlFor={name}>
        <input type={type} name={name} onChange={handleChange} value='Casa'/>Casa
        <input type={type} name={name} onChange={handleChange} value = 'Apartamento'/> Apartamento 
      </label>
    )
  }
}

export default RadioButton;