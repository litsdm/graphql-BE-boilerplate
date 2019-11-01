import { GraphQLServer } from 'graphql-yoga';
import initializeDB, { models } from './db';
import resolvers from './resolvers';

initializeDB(db => {
  const context = {
    models,
    db
  };

  const Server = new GraphQLServer({
    typeDefs: `${__dirname}/schema.graphql`,
    resolvers,
    context
  });

  // options
  const opts = {
    port: 8080
  };

  Server.start(opts, () => {
    console.log(`Server is running on http://localhost:${opts.port}`);
  });
});
