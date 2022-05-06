import React, { Component } from 'react'
import '../App.css';
import PropTypes from 'prop-types';

class User extends Component {

    state = {
        isClose: false
    }

    ToggleUser = () => {
        this.setState({
            isClose: !this.state.isClose
        })
    }

    DeleteHandler = (e) => {
        const {id,deleteUser} = this.props;
        deleteUser(id);
    }

  render() {

    const {isClose} = this.state;
    const {id,name,job,salary,deleteUser} = this.props;

    return (
        <div className="col-lg-4">
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <i onClick={this.DeleteHandler} className="fa-solid fa-trash-can"></i>
                    <h5>{name}</h5>
                    <span onClick={this.ToggleUser}>{isClose ? "+" : "-"}</span>
                </div>
                {
                    isClose ? null : <div className="card-body">
                    <ul>
                        <li>Worker Name: {name}</li>
                        <li>Job: {job}</li>
                        <li>Salary: {salary}</li>
                    </ul>
                    </div>
                }
            </div>
        </div>
    )
  }
}

User.defaultProps = {
    name: "Not Found",
    job: "Not Found",
    deleteUser: function(){
        return "Not Found"
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    deleteUser: PropTypes.func.isRequired
}

export default User