import 'dotenv/config';

import { ApolloServer } from 'apollo-server';

import { schema } from './graphql/index';
import { createContext } from './context';

export const server = new ApolloServer({ schema, context: createContext });

server.listen().then(({ url }) => console.log(`🚀 Server started at url: ${url}!`));
