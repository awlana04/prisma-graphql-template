import { objectType } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id(),
      t.model.email(),
      t.model.createdAt(),
      t.model.updatedAt()
  },
})
