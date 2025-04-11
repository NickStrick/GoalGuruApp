// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Goal, Stats } = initSchema(schema);

export {
  Goal,
  Stats
};