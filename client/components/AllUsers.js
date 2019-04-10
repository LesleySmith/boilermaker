import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const AllUsers = (props) => {
  const { users } = props
  if (!users || !users.length) return <h1>No Users</h1>

  const userList = users.map(user => (
    <li key={user.id}>
      <Link to={`/users/${user.id}`}>
        <h1>{user.firstName} {user.lastName}</h1>
      </Link>
      <img src={user.imageUrl} />
      <h2>My Email: {user.email}</h2>
    </li>
  ))
  return (
    <div>
      <ul>{userList}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users.users
  }
}

export default connect(mapStateToProps)(AllUsers)
