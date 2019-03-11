import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import List from './components/List';
import AddItem from './components/AddList';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:2000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <section className="App">
          <h1>TODO</h1>
          <List />
          <AddItem />
        </section>
      </ApolloProvider>
    );
  }
}

export default App;
