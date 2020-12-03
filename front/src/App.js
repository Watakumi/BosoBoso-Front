import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
//screens
import Top from './screens/Top';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
});
class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route exact path="/" component={Top} />
            <Route render={() => <p>not found.</p>} />
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
