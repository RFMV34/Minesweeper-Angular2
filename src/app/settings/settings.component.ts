import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MineField} from '../mine-field'
import {GameService} from '../game.service'

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit
{
    mineField: MineField;
    width: number;
    height: number;

    constructor(private game: GameService, private router: Router)
    {
        this.game = game;
        this.mineField = this.game.mineField;
        this.width = this.mineField.width;
        this.height = this.mineField.height;
    }

    setGame(event)
    {
        this.mineField.restart(this.width, this.height);
        this.router.navigateByUrl('');
    }

    ngOnInit()
    {
    }

}
