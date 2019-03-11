import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getListsQuery } from '../queries/queries';

class List extends Component {
  displayLists() {
    let data = this.props.data;
    if (data.loading) {
      return ( <div>Loading...</div> );
    } else {
      return data.lists.map(list => {
        return (
          <li key={ list.id }>
            { list.name }
            <button>x</button>
          </li>
        )
      });
    }
  }
  render() {
    return (
      <div>
        <ul id='item-list'>
          { this.displayLists() }
        </ul>
      </div>
    );
  }
}

export default graphql(getListsQuery) (List);
