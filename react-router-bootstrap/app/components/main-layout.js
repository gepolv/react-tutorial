import React from 'react';
import { Link } from 'react-router';


const MainLayout = ({header, contents})=>{
  return (
    <div className="app">
      {header}
      <aside className="primary-aside">
        <ul>
          <li><Link to="/" activeClassName="active">Home</Link></li>
          <li><Link to="/users" activeClassName="active">Users</Link></li>
          <li><Link to="widgets" activeClassName="active">Widgets</Link></li>
        </ul>
      </aside>
        <main>
       {contents}
       </main>
    </div>
  );
}
export default MainLayout;
