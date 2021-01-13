import { User } from '@libs/db/models/user.model';
import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: User,
})
@ApiTags('用户')
@Controller('users')
export class UsersController {
  constructor(@InjectModel(User) private readonly model) {}
}
