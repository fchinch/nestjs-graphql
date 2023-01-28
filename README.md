## Running the app
```

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Add packages
```bash
$ yarn add @nestjs/graphql graphql-tools graphql apollo-server-express @nestjs/apollo class-validator uuid

```

##Examples
```
query {
    users( userIds: ["3d73ddca-a2a9-4040-8f53-b3ce8bd082b5"] ) {
        userId,
        email,
        age,
        isSubscribed
    }
}

query {
    user(userId:"{REPLACE UUID}") {
        userId,
        email,
        age,
        isSubscribed
    }
}


mutation {
    createUser(createUserData: { email:"fchinch" , age:34  }){
        userId,
        email,
        age,
        isSubscribed
    }
}

mutation {
    updateUser(updateUserData: { userId:"7ce72cee-8fbf-4fe3-8de1-f9d94bdda1df" , age:23  }){
        userId,
        email,
        age,
        isSubscribed
    }
}


mutation {
    deleteUser(deleteUserData: { userId:"3d73ddca-a2a9-4040-8f53-b3ce8bd082b5" }){
        userId,
        email,
        age,
        isSubscribed
    }
}

```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
