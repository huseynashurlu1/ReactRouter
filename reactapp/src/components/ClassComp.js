import React, { Component } from 'react'

class ClassComp extends Component {
    state = {
        count: 0,
        name: ""
    }

    IncreaseHandler = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentDidMount() {
        console.log("ComponentDidMount started!");
    }

    componentDidUpdate() {
        console.log("ComponentDidUpdate started!");
    }

    componentWillUnmount() {
        
    }

    ChangeHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }

  render() {
      const {count,name} = this.state;
    return (
      <div className='text-center ClassComponent col-6'>
          <h3>{count}</h3>
          <button onClick={this.IncreaseHandler}>Click</button>
          <input onChange={this.ChangeHandler} type="text" className="form-control mt-4" />
            <h4>Username: {name}</h4>
      </div>
    )
  }
}

export default ClassComp