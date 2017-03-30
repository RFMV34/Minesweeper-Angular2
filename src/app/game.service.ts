import {Injectable} from '@angular/core';
import {MineField} from './mine-field';

@Injectable()
export class GameService
{
    mineField: MineField;

    constructor()
    {
        this.mineField = new MineField(10, 10);
    }

}
