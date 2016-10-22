import React from 'react';

// Using "Stateless Functional Components"
const searchlayout = ({children}) => {
  return (
    <div className="search">
      <header className="search-header">
        [Search Title]
      </header>
      <div className="search-results">
        {children}
      </div>
      <footer className="search-footer">
        [Total Results]
      </footer>
    </div>
    );
}
export default searchlayout;
