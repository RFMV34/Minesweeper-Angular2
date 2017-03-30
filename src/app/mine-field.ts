/**
 * MineField Class
 * @description represent filed of mine boxes with required methods
 * @author Filip Gulan
 */

import {MineBox} from './mine-box';

export class MineField
{

    public space: MineBox[][];
    private width: number;
    private height: number;
    private minesCount: number;

    constructor(width, height)
    {
        this.width = width;
        this.height = height;
        this.space = [];
        this.minesCount = Math.floor(this.width * this.height * 0.30);
        this.generateMineBoxes();
        this.generateMines();
        this.generateDanger();
    }

    generateMineBoxes()
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

    generateMines()
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

    generateDanger()
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
}
