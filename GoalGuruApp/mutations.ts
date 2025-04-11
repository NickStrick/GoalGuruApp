/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./src/API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createGoal = /* GraphQL */ `mutation CreateGoal(
  $input: CreateGoalInput!
  $condition: ModelGoalConditionInput
) {
  createGoal(input: $input, condition: $condition) {
    id
    title
    completed
    date
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGoalMutationVariables,
  APITypes.CreateGoalMutation
>;
export const updateGoal = /* GraphQL */ `mutation UpdateGoal(
  $input: UpdateGoalInput!
  $condition: ModelGoalConditionInput
) {
  updateGoal(input: $input, condition: $condition) {
    id
    title
    completed
    date
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGoalMutationVariables,
  APITypes.UpdateGoalMutation
>;
export const deleteGoal = /* GraphQL */ `mutation DeleteGoal(
  $input: DeleteGoalInput!
  $condition: ModelGoalConditionInput
) {
  deleteGoal(input: $input, condition: $condition) {
    id
    title
    completed
    date
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGoalMutationVariables,
  APITypes.DeleteGoalMutation
>;
export const createStats = /* GraphQL */ `mutation CreateStats(
  $input: CreateStatsInput!
  $condition: ModelStatsConditionInput
) {
  createStats(input: $input, condition: $condition) {
    id
    goalId
    completedOn
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateStatsMutationVariables,
  APITypes.CreateStatsMutation
>;
export const updateStats = /* GraphQL */ `mutation UpdateStats(
  $input: UpdateStatsInput!
  $condition: ModelStatsConditionInput
) {
  updateStats(input: $input, condition: $condition) {
    id
    goalId
    completedOn
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateStatsMutationVariables,
  APITypes.UpdateStatsMutation
>;
export const deleteStats = /* GraphQL */ `mutation DeleteStats(
  $input: DeleteStatsInput!
  $condition: ModelStatsConditionInput
) {
  deleteStats(input: $input, condition: $condition) {
    id
    goalId
    completedOn
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteStatsMutationVariables,
  APITypes.DeleteStatsMutation
>;
