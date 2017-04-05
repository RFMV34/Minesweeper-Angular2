/**
 * Setting component class
 * @description setting page
 * @author Filip Gulan
 */

import { Component, EventEmitter, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GameService} from '../../services/game.service';

@Component({
    selector: 'fu-app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    width: number;
    height: number;

    /**
     * @param game dependency injected game service
     * @param router dependency injected
     */
    constructor(private game: GameService, private router: Router) {
        this.game = game;
        this.width = this.game.width;
        this.height = this.game.height;
    }

    /*
     * Set game using choosen settings
     */
    setGame(event: EventEmitter<any>): void {
        this.game.restart(this.width, this.height);
        this.router.navigateByUrl('');
    }

    /**
     * Prevent too low, too high and real number in input, it is because angular2 has not got number form validation so far..
     * @param event
     */
    onChangeDimension(event: EventEmitter<any>): void {
        const max = 50;
        const min = 2;
        if (this.width > max) {
            this.width = max;
        }
        if (this.width < min) {
            this.width = min;
        }
        if (this.height > max) {
            this.height = max;
        }
        if (this.height < min) {
            this.height = min;
        }
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
    }

    ngOnInit(): void {
        /* useless but needed comment */
    }

}
