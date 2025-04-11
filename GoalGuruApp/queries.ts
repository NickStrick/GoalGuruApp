/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./src/API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getGoal = /* GraphQL */ `query GetGoal($id: ID!) {
  getGoal(id: $id) {
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
` as GeneratedQuery<APITypes.GetGoalQueryVariables, APITypes.GetGoalQuery>;
export const listGoals = /* GraphQL */ `query ListGoals(
  $filter: ModelGoalFilterInput
  $limit: Int
  $nextToken: String
) {
  listGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      completed
      date
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListGoalsQueryVariables, APITypes.ListGoalsQuery>;
export const getStats = /* GraphQL */ `query GetStats($id: ID!) {
  getStats(id: $id) {
    id
    goalId
    completedOn
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetStatsQueryVariables, APITypes.GetStatsQuery>;
export const listStats = /* GraphQL */ `query ListStats(
  $filter: ModelStatsFilterInput
  $limit: Int
  $nextToken: String
) {
  listStats(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      goalId
      completedOn
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListStatsQueryVariables, APITypes.ListStatsQuery>;
