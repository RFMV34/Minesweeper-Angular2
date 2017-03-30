/**
 * MineField Class
 * @description represent filed of mine boxes with required methods
 * @author Filip Gulan
 */

import {MineBox} from './mine-box';

export class MineField
{

    public space: MineBox[][];
    public width: number;
    public height: number;
    private minesCount: number;
    private revealedCount: number;
    public lost: boolean;
    public won: boolean;

    constructor(width: number, height: number)
    {
        this.restart(width, height);
    }
    
    public restart(width: number, height: number)
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

    private generateMineBoxes()
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

    private generateMines()
    {
        let minesCount = this.minesCount;
        while (minesCount != 0)
        {
            let randomI = Math.floor(Math.random() * this.width);
            let randomJ = Math.floor(Math.random() * this.height);
            if (!this.space[randomI][randomJ].getMine())
            {
                this.space[randomI][randomJ].setMine(true);;
                minesCount--;
            }
        }
    }

    private generateDanger()
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

    public expand(i: number, j: number)
    {
        if (!this.space[i][j].isRevealed())
        {
            //this.game.bombField.revealCount();
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
    
    public reveal(i: number, j: number)
    {
        if(!this.lost && !this.won)
        {
            if (this.space[i][j].getMine())
            {
                this.space[i][j].setRevealed(true);
                this.lost = true;
                return;
            }
            this.expand(i, j);
            if(this.revealedCount == this.width * this.height - this.minesCount)
            {
                this.won = true;
            }
        }
    }
}
