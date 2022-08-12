import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config'
import {MongooseModule} from '@nestjs/mongoose';
import { GameModule } from './modules/game.module';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    GameModule,
    ConfigModule.forRoot({ envFilePath: '.dev.env' }),
    MongooseModule.forRoot('mongodb://localhost/grapqlTest'),
    GraphQLModule.forRoot({ autoSchemaFile: true, driver: ApolloDriver })
  ],
})
export class AppModule { }
