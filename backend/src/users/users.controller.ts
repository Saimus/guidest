import { Controller, Get } from "@nestjs/common"
import { UsersService } from './users.services'

@Controller('users')
export class UsersController {
    constructor(private readonly usersServices: UsersService){}

    @Get()
    getUsers():JSON {
        return this.usersServices.getUsers();
    }
}