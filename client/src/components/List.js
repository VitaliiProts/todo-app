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
          <li key={ list.id }>{ list.name }</li>
        )
      });
    }
  }
  render() {
    console.log(this.props);
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
