Example of React-router and React-bootstrap.
Using a new feature called "named component".

```
<Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" components={{header: Header, contents: Home}} />
    </Route>
  </Router>
  ```
  
  Note it is `components` instead of `component`, two curly braces instead of one.
  
  
  **How to change a function to ES6 style in React**
  
  ```
  export default function(props) {
  return (
    <div className="user-profile">
      <img src={props.imageUrl} />
      <div className="details">
        <h1>{props.name}</h1>
        <a href={'http://twtter.com/' + props.twitter}>@{props.twitter}</a>
        <p>Works on <strong>{props.worksOn}</strong></p>
        <h3>Github Repos:</h3>
        <ul className="repos">

          {props.repos.map(repo => {

            return (<li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>);

          })}

        </ul>
      </div>
    </div>
  );
}
```

to :

```
export default ({imageUrl,name,twitter,worksOn}) => {
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
```

* remove `function` and add `=>`

* change paramter to an object which consists of all the properties of `props`.
```
{imageUrl,name,twitter,worksOn}
```

* remove 'props' froms original function


