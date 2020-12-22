import gql from 'graphql-tag';

export const CREATE_CARD = gql`
  mutation($description: String!) {
    postCreate(input: { description: $description }) {
      post {
        id
        description
      }
    }
  }
`;

export const UPDATE_CARD = gql`
  mutation($id: ID!, $description: String!) {
    postUpdate(input: { id: $id, description: $description }) {
      post {
        id
        description
      }
    }
  }
`;

export const EXTEND_TIME = gql`
  mutation($postId: ID!) {
    extendedTimeCreate(input: { postId: $postId, count: 60 }) {
      extendedTime {
        id
        count
      }
    }
  }
`;
