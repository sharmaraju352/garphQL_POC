const resolvers = {
    Query: {
        async user (root, { id }, { models }) {
              return models.User.findByPk(id)
        },
        async allUsers (root, { id }, { models }) {
              return models.User.findAll()
        },
      },
      Mutation: {
        async createUser (root, { name, email, password }, { models }) {
            return models.User.create({
                name,
                email,
                password
              })
        },
    },
}

module.exports = resolvers