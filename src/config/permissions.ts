import { rule, shield } from 'graphql-shield';

import { getUserId } from '../utils/getUserId';
import { Context } from '../context';

const rules = {
  isAuthenticatedUser: rule()((_parent, _args, context: Context) => {
    const userId = getUserId(context);

    return Boolean(userId);
  }),

  isPostOwner: rule()(async (_parent, args, context) => {
    const userId = getUserId(context);

    const author = await context.prisma.tweet
      .findUnique({
        where: {
          id: String(args.id),
        },
      })
      .author()

    return userId === author.id;
  }),
}

export const permissions = shield({
  Query: {
    me: rules.isAuthenticatedUser,
  },

  Mutation: {
    // incrementPostViewCount: rules.isAuthenticatedUser,
    // togglePublishPost: rules.isPostOwner,
  },
})
