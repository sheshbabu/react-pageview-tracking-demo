import React from "react";
import { BrowserRouter, Switch, Route, Link, useHistory } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes />
      Open the browser console to see the events
    </BrowserRouter>
  );
}

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

function Routes() {
  const history = useHistory();

  React.useEffect(() => {
    trackPageView(); // To track the first pageview upon load
    history.listen(trackPageView); // To track the subsequent pageviews
  }, [history]);

  function trackPageView() {
    console.log("PageView Event", window.location.pathname);
  }

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/users" component={UsersPage} />
      <Route exact path="/about" component={AboutPage} />
    </Switch>
  );
}

function HomePage() {
  return <h2>Home</h2>;
}

function UsersPage() {
  return <h2>Users</h2>;
}

function AboutPage() {
  return <h2>About</h2>;
}
