import React, { Component } from 'react'

class FormEvent extends Component {
    state = {
        title: true,
        color: false,
        name: "Not Found",
        lang: "Your select",
        classname: "",
        divColor: '',
        brand: "Choose One"
    }

    ColorChange = (e) => {
        this.setState({
            title: !this.state.title,
            color: !this.state.color
        })
    }


    ChangeHandler = (e) => {
        this.setState({
            name: e.target.value === "" ? "Not Found" : e.target.value
        })
    }

    LangHandler = (e) => {
        this.setState({
            lang: e.target.value,
            classname: e.target.value
        })
    }

    ColorHandler = (e) => {
        this.setState({
            divColor: e.target.value
        })
    }

    SelectHandler = (e) => {
        this.setState({
            brand: e.target.value
        })
    }

  render() {
      const {title,color,name,lang,classname,divColor,brand} = this.state;
    return (
      <div className='text-center'>
          <h1 style={color ? {color:"red"} : {color:"blue"}}>{title ? "FRONT-END DEVELOPMENT" : "BACK-END DEVELOPMENT"}</h1>
          <button onClick={this.ColorChange}>CLICK</button>
          <input onChange={this.ChangeHandler} type="text" className='w-50 mx-auto mt-4' />
          <h4>Username: {name}</h4>

          <div>
              <button value="PHP" onClick={this.LangHandler}>PHP</button>
              <button value="PYTHON" onClick={this.LangHandler}>PYTHON</button>
              <button value="JAVASCRIPT" onClick={this.LangHandler}>JAVASCRIPT</button>
          </div>
          <h5 className={classname}>You selected: {lang}</h5>

          <div id='box' className={divColor}>
              <input onChange={this.ColorHandler} type="text" />
          </div>

          <select onChange={this.SelectHandler} name="" id="">
              <option disabled selected value="Choose one">Choose One</option>
              <option value="Apple">Apple</option>
              <option value="Lenovo">Lenovo</option>
              <option value="Asus">Asus</option>
          </select>

          <h5>Computer: {brand}</h5>
      </div>
    )
  }
}

export default FormEvent