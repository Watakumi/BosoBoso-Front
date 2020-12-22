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

export const POSTS_WITH_EXTENDED_TIMES = gql`
  query {
    posts {
      id
      description
      createdAt
      sumExtendedTimes
    }
  }
`;
