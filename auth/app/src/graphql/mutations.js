/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      member_id
      username
      first_name
      middle_name
      last_name
      created
      updated
      user_id
      default_country_code
      default_langage_code
      default_region_name
      origin_country_code
      origin_region_name
      default_email
      default_phone_number
      default_postal_address
      birth_country_code
      citizenship_country_code
      residence_country_code
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
      username
      first_name
      middle_name
      last_name
      created
      updated
      user_id
      default_country_code
      default_langage_code
      default_region_name
      origin_country_code
      origin_region_name
      default_email
      default_phone_number
      default_postal_address
      birth_country_code
      citizenship_country_code
      residence_country_code
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      member_id
      username
      first_name
      middle_name
      last_name
      created
      updated
      user_id
      default_country_code
      default_langage_code
      default_region_name
      origin_country_code
      origin_region_name
      default_email
      default_phone_number
      default_postal_address
      birth_country_code
      citizenship_country_code
      residence_country_code
    }
  }
`;
