import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
    create(CreateUserDto: CreateUserDto){
        return 'this action adds a new user'
    }

    findAll() {
        return 'this action returns all users'
    }

    findOne(id: string) {
        return `this action returns a #${id} user`
    }

    update(id: string, UpdateUserDto: UpdateUserDto){
        return `this action updates a #${id} user`
    }

    remove(id: string){
        return `this action removes a #${id} user`
    }
}