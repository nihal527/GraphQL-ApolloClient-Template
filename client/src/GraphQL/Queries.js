import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    getAllUsers {
      id
      lastName
      firstName
      email
      password
      adress
      job
      phone
      ballot
      image
    }
  }
`;
