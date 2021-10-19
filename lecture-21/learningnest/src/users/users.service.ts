import { Injectable } from "@nestjs/common";
import { User } from "./users.model";


@Injectable()
export class UsersService {

    users : Array<User> = [];

    getUsers(){
        return this.users;
    }

    createUser(user : User) : User { 
        this.users.push(user);
        return user;
    }

}