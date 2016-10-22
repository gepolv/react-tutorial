# Guide 2: Container Components

## Installing and Running

To start,

```sh
# Install Node Modules
npm install

# Start the Server
npm start
```

## On Container

Stateless component becomes more and more prevalent nowadays. They are stateless in the sense of the fact that they have no internal state change. In other words, stateless components do not have `setState` being used. Their only job is rendering the given data. Where is the data from? `Container`. `Container` consists of two parts. The first part is prparing data. The other part is the rendering part which is stateless component.

`Container` has two implementation forms. One implementation form is `traditional` form:

```
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

//stateless component:
const UserList = ({users, deleteUser}) =>  {
  return (
    <div className="data-list">
      {users.map(user => {
        return (
          <div key={user.id} className="data-list-item">
            <div className="details">
              <Link to={'/users/' + user.id}>{user.name}</Link>
            </div>
            <div className="controls">
            {/* note onClick's function. Cannot use "deleteUser(user.id)" directly.
            instead, use "()=>deleteUser(user.id)" */}
              <button onClick={()=>deleteUser(user.id)} className="delete">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

```

The other way is using 3-rd part module (such as react-komposer) to `connect` preparing part and rendering part(stateless component).

```
import { composeWithTracker as composer } from 'react-komposer';
// Prepare data
const UserListContainer = (props,onData) => {
    userApi.getUsers().then(users => {
      onData(null, {users});
    });
}

//rendering interface
const UserList = ({users}) => {
  let items = users.map(user => { return <User key={user.id} name={user.name} />});
  return <ol> {items} </ol> ;
}

//in charge of displaying data
const Display = composer( UserListContainer )( UserList );
```


## JSON Server and Axios

We use JSON server as our data source. We use Axios as Ajax client.


## Work Flow



## ES6 Spread Operator

ES6 now has a [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator). React borrowed the idea for passing attributes into components. To understand this new feature, consider the following scenarios...

Imagine we wanted to pass an object from parent component to child component:

```js
// Parent Component's render method
render: function() {
  const user = {
    name: 'Brad',
    occupation: 'Web Development',
    state: 'Arizona'
  };

  return (<ChildComponent user={user} />);
}
```

This works but the child component must access the name by doing `this.props.user.name`. It might be nicer to just be able to type `this.props.name`. But in order to have that option, we would have to itemize and list each property when we pass them into the child component:

```js
// Parent Component's render method
render: function() {
  const user = {
    name: 'Brad',
    occupation: 'Web Development',
    state: 'Arizona'
  };

  return (<ChildComponent name={user.name} occupation={user.occupation} state={user.state} />);
}
```

Now, the child component can do `this.props.name`. This is nicer for the child component, but it's obnoxious to have to list out each property.

### Spread Attributes to the rescue!

With React's [Spread Attributes](https://facebook.github.io/react/docs/jsx-spread.html#spread-attributes), we can do this:

```js
// Parent Component's render method
render: function() {
  const user = {
    name: 'Brad',
    occupation: 'Web Development',
    state: 'Arizona'
  };

  return (<ChildComponent {...user} />);
}
```

This is a nice way to write code for the parent and the child gets to access the props like this: `this.props.name`, `this.props.occupation` and `this.props.state`.

In the guide, you can see this behavior on the [`user-profile-container.js`](https://github.com/bradwestfall/CSS-Tricks-React-Series/blob/master/guide-2-container-components/app/components/containers/user-profile-container.js#L32) file.

## Delete Strategy

In the CSS-Tricks tutorial, we showed how [events can be passed from Container Components down to Presentational Components](https://css-tricks.com/learning-react-container-components/#article-header-id-6). Thinks are slightly more complex in this guide though. We have a new problem to solve that wasn't covered well in the tutorial.

The problem is that sometimes functions like `deleteUser()` need to be called with an argument. In this case it's the `userId`. The `onClick` can't _call_ the `deleteUser()` method with the argument right away. That would lead to the `deleteUser()` method getting called as soon as the page loads for all the users. Instead, it needs to ensure that _when_ the `onClick` happens, to call the function with an argument. For that we'll use `.bind()`.

#### .bind()

This is how we'll indicate that when the `onClick` event happens, to call `deleteUser()` and pass the correct `user.id` as the first argument:

```js
{props.users.map(user => {
  return (
    <button onClick={props.deleteUser.bind(null, user.id)}>Delete</button>
  );
})}
```

#### Updating the user list after removal

In the XHR callbacks to delete `Users` and `Widgets`, the code makes a copy of the state, then updates and replaces the state with the copy. We do this so our state is "immutable". This is a topic that's covered in the third CSS-Tricks article on Redux.

```js
deleteUser: function(userId) {
  userApi.deleteUser(userId).then(() => {
    const newUsers = _.filter(this.state.users, user => user.id != userId);
    this.setState({users: newUsers})
  });
}
```

Note that [lodash](https://lodash.com/) is being used to filter the current state by making a copy of it with all users that don't match the ID. The copy without the matched user will replace the state.
