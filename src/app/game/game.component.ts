import {Component, OnInit} from '@angular/core';
import {MineField} from '../mine-field'
import {GameService} from '../game.service'

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit
{
    mineField: MineField;

    constructor(private game: GameService)
    {
        this.game = game;
        this.mineField = this.game.mineField;
    }

    boxClicked(event, i: number, j: number): void
    {
        this.mineField.reveal(i, j);
    }
    
    restartClicked(event): void
    {
        this.mineField.restart(this.mineField.width, this.mineField.height);
    }
    
    ngOnInit()
    {
    }
}
