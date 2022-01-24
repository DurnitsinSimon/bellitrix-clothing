import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
 @Prop()
 login: string;

 @Prop()
 passwordHash: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
