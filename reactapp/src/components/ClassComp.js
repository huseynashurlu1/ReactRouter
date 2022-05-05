import React, { Component } from 'react'

class ClassComp extends Component {

    state = {
        title: "FRONT-END DEVELOPMENT",
        status: false
    }

    ChangeText = () => {
        this.setState({
            title: this.state.title === "FRONT-END DEVELOPMENT" ? "BACK-END DEVELOPMENT" : "FRONT-END DEVELOPMENT"
        })
    }

    StatusHandler = () => {
        this.setState({
            status: !this.state.status
        })
    }

  
  render() {
    return (
      <div className='text-center'>
          <h1>{this.state.title}</h1>
          <button onClick={this.ChangeText}>Change Text</button>
          <button style={this.state.status===false ? {backgroundColor:"red"} : {backgroundColor:"green"}} onClick={this.StatusHandler}>{this.state.status===false ? "HIDE" : "SHOW"} STATUS</button>
      </div>
    )
  }
}

export default ClassComp