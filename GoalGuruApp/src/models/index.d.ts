import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerGoal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Goal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly completed: boolean;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGoal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Goal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly completed: boolean;
  readonly date: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Goal = LazyLoading extends LazyLoadingDisabled ? EagerGoal : LazyGoal

export declare const Goal: (new (init: ModelInit<Goal>) => Goal) & {
  copyOf(source: Goal, mutator: (draft: MutableModel<Goal>) => MutableModel<Goal> | void): Goal;
}

type EagerStats = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Stats, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly goalId: string;
  readonly completedOn: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStats = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Stats, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly goalId: string;
  readonly completedOn: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Stats = LazyLoading extends LazyLoadingDisabled ? EagerStats : LazyStats

export declare const Stats: (new (init: ModelInit<Stats>) => Stats) & {
  copyOf(source: Stats, mutator: (draft: MutableModel<Stats>) => MutableModel<Stats> | void): Stats;
}