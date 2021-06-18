import { verify } from 'jsonwebtoken';

import { Context } from '../context';

interface Token {
  userId: string;
};

export function getUserId(context: Context) {
  const authHeader = context.req.get('Authorization');

  if (authHeader) {
    const token = authHeader.replace('Bearer ', '');
    const verifiedToken = verify(
      token,
      process.env.APP_SECRET as string
    ) as Token;

    return verifiedToken && String(verifiedToken.userId);
  };
};
