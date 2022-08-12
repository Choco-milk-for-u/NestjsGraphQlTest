import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { Game, GameSchema } from "src/schemas/game.schema";
import { GameResolver } from "./game.resolver";
import { GameService } from "./game.service";

@Module({
    imports:[MongooseModule.forFeature([{name: Game.name, schema: GameSchema}])],
    providers:[GameService, GameResolver]
})
export class GameModule{}