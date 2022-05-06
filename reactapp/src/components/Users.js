import React, { Component } from 'react'
import User from './User';

class Users extends Component {
  render() {
      const {users,deleteUser,filteredUsers} = this.props;
    return (
      <div className='row g-4'>
          {
              filteredUsers.map(user => {
                  return(
                      <User
                        key={user.id}
                        id={user.id}
                        salary={user.salary}
                      />
                  )
              })
          }
      </div>
    )
  }
}

export default Users;