import { prop } from '@typegoose/typegoose';

export class User {
    @prop()
    username: string;
    @prop()
    password: string;
    @prop()
    nickname: string;
    @prop()
    icon: string;
    @prop()
    token: string;
}
