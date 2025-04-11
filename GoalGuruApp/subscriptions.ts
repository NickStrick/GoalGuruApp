/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./src/API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateGoal = /* GraphQL */ `subscription OnCreateGoal(
  $filter: ModelSubscriptionGoalFilterInput
  $owner: String
) {
  onCreateGoal(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGoalSubscriptionVariables,
  APITypes.OnCreateGoalSubscription
>;
export const onUpdateGoal = /* GraphQL */ `subscription OnUpdateGoal(
  $filter: ModelSubscriptionGoalFilterInput
  $owner: String
) {
  onUpdateGoal(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGoalSubscriptionVariables,
  APITypes.OnUpdateGoalSubscription
>;
export const onDeleteGoal = /* GraphQL */ `subscription OnDeleteGoal(
  $filter: ModelSubscriptionGoalFilterInput
  $owner: String
) {
  onDeleteGoal(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGoalSubscriptionVariables,
  APITypes.OnDeleteGoalSubscription
>;
export const onCreateStats = /* GraphQL */ `subscription OnCreateStats(
  $filter: ModelSubscriptionStatsFilterInput
  $owner: String
) {
  onCreateStats(filter: $filter, owner: $owner) {
    id
    goalId
    completedOn
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateStatsSubscriptionVariables,
  APITypes.OnCreateStatsSubscription
>;
export const onUpdateStats = /* GraphQL */ `subscription OnUpdateStats(
  $filter: ModelSubscriptionStatsFilterInput
  $owner: String
) {
  onUpdateStats(filter: $filter, owner: $owner) {
    id
    goalId
    completedOn
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateStatsSubscriptionVariables,
  APITypes.OnUpdateStatsSubscription
>;
export const onDeleteStats = /* GraphQL */ `subscription OnDeleteStats(
  $filter: ModelSubscriptionStatsFilterInput
  $owner: String
) {
  onDeleteStats(filter: $filter, owner: $owner) {
    id
    goalId
    completedOn
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteStatsSubscriptionVariables,
  APITypes.OnDeleteStatsSubscription
>;
