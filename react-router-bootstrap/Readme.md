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
