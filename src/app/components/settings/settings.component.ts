/**
 * Setting component class
 * @description setting page
 * @author Filip Gulan
 */
 
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GameService} from '../../services/game.service'

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit
{
    width: number;
    height: number;

    /**
     * @param game dependency injected game service
     * @param router dependency injected
     */
    constructor(private game: GameService, private router: Router)
    {
        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;
    }

    /*
     * Set game using choosen settings
     */
    setGame(event): void
    {
        this.game.restart(this.width, this.height);
        this.router.navigateByUrl('');
    }

    ngOnInit()
    {
    }

}
