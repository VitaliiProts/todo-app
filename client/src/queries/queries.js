import { gql } from 'apollo-boost';

const getListsQuery = gql`
  {
    lists {
      name
      id
    }
  }
`;

const addListMutation = gql`
  mutation($name: String!) {
    addList(name: $name) {
      name
      id
    }
  }
` 

export { getListsQuery, addListMutation } ;