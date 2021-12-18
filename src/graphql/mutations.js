/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
