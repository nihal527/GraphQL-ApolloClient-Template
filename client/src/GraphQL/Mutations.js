import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $image: String!
    $adress: String!
    $job: String!
    $phone: String!
    $ballot: Int
    $password: String
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      image: $image
      adress: $image
      job: $job
      phone: $phone
      ballot: $ballot
      password: $password
    ) {
      id
    }
  }
`;
export const UPDATE_USER_MUTATION = gql`
  mutation updateUser(
    $id: Int
    $firstName: String!
    $lastName: String!
    $email: String!
    $image: String!
    $adress: String!
    $job: String!
    $phone: String!
    $ballot: Int
    $password: String
  ) {
    updateUser(
      id: $id
      firstName: $firstName
      lastName: $lastName
      email: $email
      image: $image
      adress: $adress
      job: $job
      phone: $phone
      ballot: $ballot
      password: $password
    ) {
      id
      firstName
      lastName
      email
      image
      adress
      job
      phone
      ballot
      password
    }
  }
`;
