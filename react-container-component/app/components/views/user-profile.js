import React from 'react';

export default ({imageUrl,name,twitter,worksOn,repos}) => {
  return (
    <div className="user-profile">
      <img src={imageUrl} />
      <div className="details">
        <h1>{name}</h1>
        <a href={'http://twtter.com/' + twitter}>@{twitter}</a>
        <p>Works on <strong>{worksOn}</strong></p>
        <h3>Github Repos:</h3>
        <ul className="repos">

          {repos.map(repo => {

            return (<li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>);

          })}

        </ul>
      </div>
    </div>
  );
}
