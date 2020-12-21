import gql from 'graphql-tag';

export const POSTS = gql`
  query {
    posts {
      id
      description
      createdAt
    }
  }
`;
