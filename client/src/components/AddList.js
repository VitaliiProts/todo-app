import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getListsQuery, addListMutation } from '../queries/queries';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }

  submitForm(e) {
    e.preventDefault();
    this.props.addListMutation({
      variables: {
        name: this.state.name,
      },
      refetchQueries: [{ query: getListsQuery }]
    });
  }

  render() {
    return (
      <form id='add-item' onSubmit={ this.submitForm.bind(this) }>
        <div className='field'>
          <label>
            Add new task
            <input type='text' onChange={ (e) => this.setState({ name: e.target.value }) } />
          </label>
          <button>Add</button>
        </div>
      </form>
    );
  }
}

export default compose(
  graphql(getListsQuery, { name: "getListsQuery"}),
  graphql(addListMutation, { name: "addListMutation" }),
) (AddItem);