import React from "react";
import InputForm from "./InputForm";
import RadioButton from "./RadioButton";
import SelectOptions from "./SelectOptions";


class Form2 extends  React.Component {
 constructor (){
   super()
   this.handleChange = this.handleChange.bind(this)
   this.state = {
     nome:'',
     email:'',
     cpf:'',
     endereço:'',
     cidade: '',
     estado:'',
     tipo:'',
   }
  }
  
  handleChange({target}){
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  render(){
    return (
      <div>
        <fieldset>
          <InputForm name='nome' type='text' handleChange={this.handleChange}/>
          <InputForm name='email' type='email' handleChange={this.handleChange}/>
          <InputForm name='cpf' type='text' handleChange={this.handleChange}/>
          <InputForm name='endereço' type='text' handleChange={this.handleChange}/>
          <InputForm name='cidade' type='text' handleChange={this.handleChange}/>
          <SelectOptions name='estado' handleChange={this.handleChange} />
          <RadioButton name='tipo' type='radio' handleChange={this.handleChange}/>
        </fieldset>
      </div>
    )
  }
}

export default Form2;