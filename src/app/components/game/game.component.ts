/**
 * Game component class
 * @description page with game field
 * @author Filip Gulan
 */

import { Component, EventEmitter, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service';

@Component({
    selector: 'fu-app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    /**
     * Constructor
     * @param dependency injected game service
     */
    constructor(public game: GameService) {
        this.game = game;
    }

    /**
     * Method to fires action after box was clciked
     * @param event
     * @param i location of mine box
     * @param j location of mine box
     *
     */
    boxClicked(event: EventEmitter<any>, i: number, j: number): void {
        this.game.reveal(i, j);
    }

    /**
     * Method to fires when restart button is clicked
     * @param event
     */
    restartClicked(event: EventEmitter<any>): void {
        this.game.restart(this.game.width, this.game.height);
    }

    ngOnInit(): void {
        /* useless but needed comment */
    }
}
