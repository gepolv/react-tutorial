import React from 'react';

const SearchLayout = ({children}) => {
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
};
export default SearchLayout;
