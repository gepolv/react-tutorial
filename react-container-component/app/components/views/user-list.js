import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default ({users, deleteUser}) =>  {
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
