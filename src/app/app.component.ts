import {Component} from '@angular/core';
import {MineField} from './mine-field'
import {GameService} from './game.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent
{
    numbers = [1,2,3];
    mineField: MineField;
    
    constructor(private game: GameService)
    {
        this.game = game;
        this.mineField = this.game.mineField;
        //this.numbers = [1,2,3]
    }
    
    clicked(event, i, j)
    {
        this.mineField.expand(i, j);
    }
}
