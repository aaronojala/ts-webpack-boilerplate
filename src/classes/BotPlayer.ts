import { AbstractPlayer } from "./AbstractPlayer";
import {CardSelectionService} from "../classes/services/CardSelectionService"

export class BotPlayer extends AbstractPlayer {
    
    
    requestCard(): boolean {
       const cardSelectionService = new CardSelectionService();
       return cardSelectionService.decide();
    }
}