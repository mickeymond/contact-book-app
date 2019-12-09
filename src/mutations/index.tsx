import { gql } from 'apollo-boost';

export const ADD_CONTACT = gql`
mutation addContact(
  $user_id: String!,
  $first_name: String!,
  $last_name: String!,
  $twitter_username: String
) {
  insert_contacts(objects: [
    {
      user_id: $user_id,
      first_name: $first_name,
      last_name: $last_name,
      twitter_username: $twitter_username
    }
  ]) {
    affected_rows
  }
}
`;

export const DELETE_CONTACT = gql`
mutation deleteContact($id: Int!) {
  delete_contacts(where: { id: { _eq: $id } }) {
    affected_rows
  }
}
`;

export const ADD_PHONE = gql`
mutation addPhone($contact_id: Int!, $number: String!) {
  insert_phones(objects: [{
    contact_id: $contact_id,
    number: $number
  }]) {
    returning {
      id
    }
  }
}
`;