/**
 * Game service class - injectable, singleton
 * @description all game logic, hold field of mineBoxes and etc
 * @author Filip Gulan
 */

import {Injectable} from '@angular/core';
import {MineBox} from './mine-box';

@Injectable()
export class GameService
{
    public space: MineBox[][];
    public width: number;
    public height: number;
    private minesCount: number;
    private revealedCount: number;
    public lost: boolean;
    public won: boolean;

    /**
     * Constructor method of this injectable singleton clas, create default field
     */
    constructor()
    {
        this.restart(10, 10);
    }

    /**
     * Restart game using dimensions
     * @width of new field
     * @height of new field
     */
    public restart(width: number, height: number): void
    {
        this.width = width;
        this.height = height;
        this.space = [];
        this.minesCount = Math.floor(this.width * this.height * 0.15);
        this.revealedCount = 0;
        this.lost = false;
        this.won = false;
        this.generateMineBoxes();
        this.generateMines();
        this.generateDanger();
    }

    /**
     * Generate mine of boxes into field
     */
    private generateMineBoxes(): void
    {
        for (let i = 0; i < this.width; i++)
        {
            this.space[i] = [];
            for (let j = 0; j < this.height; j++)
            {
                this.space[i][j] = new MineBox(i, j);
            }
        }
    }

    /**
     * Generate mines into random mine boxes
     */
    private generateMines(): void
    {
        let minesCount = this.minesCount;
        while (minesCount != 0) //while any mine left
        {
            let randomI = Math.floor(Math.random() * this.width);
            let randomJ = Math.floor(Math.random() * this.height);
            if (!this.space[randomI][randomJ].getMine()) //box does not have mine
            {
                this.space[randomI][randomJ].setMine(true);;
                minesCount--;
            }
        }
    }

    /**
     * Generate danger depends on neighbours
     */
    private generateDanger(): void
    {
        for (let i = 0; i < this.width; i++)
        {
            for (let j = 0; j < this.height; j++)
            {
                let danger = 0;
                if (i != 0) //if is not in first row, i can chceck row abowe
                {
                    if (this.space[i - 1][j].getMine())
                    {
                        danger++;
                    }
                }
                if (i != this.width - 1) //if is not in last row, i can chceck row under
                {
                    if (this.space[i + 1][j].getMine())
                    {
                        danger++;
                    }
                }
                if (j != 0) //if is not in first col, i can chceck col left
                {
                    if (this.space[i][j - 1].getMine())
                    {
                        danger++;
                    }
                }
                if (j != this.height - 1) //if is not in last col, i can chcek right col
                {
                    if (this.space[i][j + 1].getMine())
                    {
                        danger++;
                    }
                }

                ////////Slant nextdoors//////////
                if (j != this.height - 1)
                {
                    if (i != this.width - 1)
                    {
                        if (this.space[i + 1][j + 1].getMine())
                        {
                            danger++;
                        }
                    }
                }
                if (j != 0)
                {
                    if (i != 0)
                    {
                        if (this.space[i - 1][j - 1].getMine())
                        {
                            danger++;
                        }
                    }
                }
                if (j != this.height - 1)
                {
                    if (i != 0)
                    {
                        if (this.space[i - 1][j + 1].getMine())
                        {
                            danger++;
                        }
                    }
                }
                if (j != 0)
                {
                    if (i != this.width - 1)
                    {
                        if (this.space[i + 1][j - 1].getMine())
                        {
                            danger++;
                        }
                    }
                }
                this.space[i][j].setDanger(danger);
            }
        }
    }

    /**
     * Resursively expand space around mine box and all their 0 and danger neighbours
     */
    private expand(i: number, j: number): void
    {
        if (!this.space[i][j].isRevealed())
        {
            this.space[i][j].setRevealed(true);
            this.revealedCount++;
            if (this.space[i][j].danger == 0)
            {
                if (i + 1 < this.width) //it is not last in row, so i can chcek next bombBox
                {
                    this.expand(i + 1, j);
                }
                if (j + 1 < this.height) //it is not last in col
                {
                    this.expand(i, j + 1);
                }
                if (i - 1 >= 0) //it is not first in row
                {
                    this.expand(i - 1, j);
                }
                if (j - 1 >= 0) //it is not first in col
                {
                    this.expand(i, j - 1);
                }
            }
        }
    }

    /**
     * Reveal mine box and look for other revealable neighbours using expand
     */
    public reveal(i: number, j: number): void
    {
        if (!this.lost && !this.won) //still can play
        {
            if (this.space[i][j].getMine()) //ooops this box got mine
            {
                this.space[i][j].setRevealed(true);
                this.lost = true;
                return;
            }
            this.expand(i, j);
            if (this.revealedCount == this.width * this.height - this.minesCount) //all mine revealed yeah
            {
                this.won = true;
            }
        }
    }

}
