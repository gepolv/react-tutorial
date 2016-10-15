import React from 'react';
import { Link } from 'react-router';

import {Header} from './header';

const MainLayout = ({children})=>{
  return (
    <div className="app">
      <Header />
      <aside className="primary-aside">
        <ul>
          <li><Link to="/" activeClassName="active">Home</Link></li>
          <li><Link to="/users" activeClassName="active">Users</Link></li>
          <li><Link to="widgets" activeClassName="active">Widgets</Link></li>
        </ul>
      </aside>
        <main>
       {children}
       </main>
    </div>
  );
}
export default MainLayout;
