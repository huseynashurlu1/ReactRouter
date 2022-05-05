import React, { Component } from 'react'

class User extends Component {

    state = {
        isClose: false
    }

    ToggleUser = () => {
        this.setState({
            isClose: !this.state.isClose
        })
    }

  render() {

    const {isClose} = this.state;
    const {firstName} = this.props;

    return (
        <div className="col-lg-4">
            <div class="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h4>{firstName}</h4>
                    <span onClick={this.ToggleUser}>{isClose ? "-" : "X"}</span>
                </div>
                {
                    isClose ? null : <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                }
            </div>
        </div>
    )
  }
}

export default User