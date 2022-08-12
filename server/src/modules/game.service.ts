import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game, GameDocument, GameInput } from "src/schemas/game.schema";

@Injectable()
export class GameService{
    constructor(@InjectModel(Game.name) private gameDB: Model<GameDocument>){}
    async getAllGame(): Promise<Game[]>{
        const allGames = await this.gameDB.find();
        return allGames;
    }
    async createGame(input: GameInput): Promise<Game>{
        const newGame = await this.gameDB.create({name: input.name, price: input.price, description: input.description});
        return newGame;
    }
}