import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { User } from "./models/user";
import { UsersService } from "./user.service";
import { GetUserArgs } from "./dto/args/get-user.args";
import { GetUsersArgs } from "./dto/args/get-users.args";
import { CreateUserInput } from "./dto/input/create-user.input";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { DeleteUserInput } from "./dto/input/delete-user.input";


@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {
  }

  @Query(() => User, { name: "user", nullable: true })
  async getUser(@Args() getUserArgs: GetUserArgs): Promise<User> {
    return this.usersService.getUser(getUserArgs);
  }


  @Query(() => [User], { name: "users", nullable: "items" })
  async getUsers(@Args() getUsersArgs: GetUsersArgs): Promise<User[]> {
    return this.usersService.getUsers(getUsersArgs);
  }

  @Mutation(() => User)
  createUser(@Args("createUserData") createUserData: CreateUserInput): User {
    return this.usersService.createUser(createUserData);
  }


  @Mutation(() => User)
  updateUser(@Args("updateUserData") updateUserData: UpdateUserInput): User {
    return this.usersService.updateUser(updateUserData);
  }

  @Mutation(() => User)
  deleteUser(@Args("deleteUserData") deleteUserData: DeleteUserInput): User {
    return this.usersService.deleteUser(deleteUserData);
  }

}