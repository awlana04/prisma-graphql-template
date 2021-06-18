import { objectType } from 'nexus';

import { Context } from '../../context';
import { getUserId } from '../../utils/getUserId';

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.nullable.field('me', {
      type: 'User',
      resolve: (_parent, _args, context: Context) => {
        const userId = getUserId(context);

        return context.prisma.user.findUnique({
          where: {
            id: String(userId),
          },
        })
      },
    })
  },
});
