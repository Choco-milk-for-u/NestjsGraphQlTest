import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { GameService } from "./game.service";
import { Game, GameInput } from "src/schemas/game.schema";

@Resolver(of => Game)
export class GameResolver {
    constructor(private gameService: GameService) { }
    @Query(() => [Game])
    getAllGame() {
        return this.gameService.getAllGame()
    }
    @Mutation(()=>Game)
    createGame(@Args('createGameInput') input: GameInput){
        return this.gameService.createGame(input);
    }
}