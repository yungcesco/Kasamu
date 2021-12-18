/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      birth_country_code
      citizenship_country_code
      created
      default_country_code
      default_email
      default_langage_code
      default_phone_number
      default_postal_address
      default_region_name
      first_name
      last_name
      middle_name
      origin_country_code
      origin_region_name
      residence_country_code
      updated
      user_id
      username
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        birth_country_code
        citizenship_country_code
        created
        default_country_code
        default_email
        default_langage_code
        default_phone_number
        default_postal_address
        default_region_name
        first_name
        last_name
        middle_name
        origin_country_code
        origin_region_name
        residence_country_code
        updated
        user_id
        username
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
