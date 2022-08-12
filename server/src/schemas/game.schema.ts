import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ID, InputType, Int, ObjectType } from "@nestjs/graphql";
import { Document } from 'mongoose';
import { gameMiddleware } from "../modules/game.middleware";

export type GameDocument = Game & Document
@Schema()
@ObjectType()
export class Game {
    @Field((type) => ID)
    id?: number;

    @Prop({ required: true, type: String })
    @Field({ middleware: [gameMiddleware] })
    name?: string;
    @Prop({ required: true, type: Number })
    @Field(type => Int)
    price?: number;
    @Prop({ required: true, type: String })
    @Field()
    description?: string;
}
@InputType()
export class GameInput {
    @Prop({ required: true, type: String })
    @Field()
    name: string;
    @Prop({ required: true, type: Number })
    @Field(type => Int)
    price: number;
    @Prop({ required: true, type: String })
    @Field()
    description: string;
}
export const GameSchema = SchemaFactory.createForClass(Game);
