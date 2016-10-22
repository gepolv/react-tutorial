import React from 'react';
import _ from 'lodash';
import UserList from '../views/user-list';
import * as userApi from '../../api/user-api';
//import { composeWithTracker as composer } from 'react-komposer';
//is current method better than Composer?
//I believe current method is better. Because if makes it easy to understand.
//However, if the container has too many functions, like ""deleteUser" here, and
//these functions are shared or can be shared by other components. Then Komposer
//might be better.
//However again, Komposer violates OO principle. Need further thinking.

const UserListContainer = React.createClass({

  getInitialState: function() {
    return {
      users: []
    }
  },

  componentDidMount: function() {
    userApi.getUsers().then(users => {
      this.setState({users: users})
    });
  },

  deleteUser: function(userId) {
    userApi.deleteUser(userId).then(() => {
      const newUsers = _.filter(this.state.users, user => user.id != userId);
      this.setState({users: newUsers})
    });
  },

  render: function() {
    return (
      <UserList users={this.state.users} deleteUser={this.deleteUser} />
    );
  }

});


export default UserListContainer;
