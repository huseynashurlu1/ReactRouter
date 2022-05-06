import React, { Component } from 'react';
import ClassComp from './components/ClassComp';
import FormEvent from './components/FormEvent';
import FuncComp from './components/FuncComp';
import Users from './components/Users';

class App extends Component {

  // state = {
  //   users: [
  //     {id:1,name:"Yamil",job: "Trader", salary: 7000},
  //     {id:2,name:"Maqsud",job: "Video Editor", salary: 3500},
  //     {id:3,name:"Maksud",job: "Video Editor", salary: 3500},
  //     {id:4,name:"Togrul",job: "Car Seller", salary: 500},
  //     {id:5,name:"Vusal",job: "Mentor", salary: 150},
  //     {id:6,name:"Vusal",job: "Mentor", salary: 150},
  //   ],

  //   worker: ''
  // }

  // deleteUser = (id) => {
  //   this.setState({
  //     users: this.state.users.filter(x => id !==x.id)
  //   })
  // }

  // FilterHandler = (e) => {
  //   this.setState({
  //     worker: e.target.value
  //   })
  // }

  render() {
    // const {users,worker} = this.state;
    // const filterUsers = users.filter(user=>user.name.toLowerCase().includes(worker.toLowerCase()))

    return (
      <div className='d-flex'>
        <ClassComp />
        <FuncComp/>
      </div>
      // <div className='container mt-4'>
      //   <input onChange={this.FilterHandler} type="text" placeholder='Search...' className='form-control w-50 mx-auto mb-4' />
      //   <Users filteredUsers={filterUsers} deleteUser={this.deleteUser} users={this.state.users}/>
      // </div>
    )
  }
}

export default App