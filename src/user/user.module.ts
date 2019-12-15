import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { User } from './user.model';
import { TypegooseModule } from 'nestjs-typegoose';
@Module({
  imports: [
    TypegooseModule.forFeature([User]),
  ],
  controllers: [UserController],
})
export class UserModule {}
