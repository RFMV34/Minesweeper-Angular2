/**
 * MineBox Class
 * @description represent one box where can be bomb
 * @author Filip Gulan
 */
 
export class MineBox
{
    private i: number;
    private j: number;
    public danger: number;
    private mine: boolean;
    private revealed: boolean;

    constructor(i: number, j: number)
    {
        this.i = i;
        this.j = j;
        this.danger = 0;
        this.mine = false;
        this.revealed = false;
    }
    
    setMine(mine: boolean)
    {
        this.mine = mine;
    }
    
    getMine()
    {
        return this.mine;
    }
    
    setDanger(danger: number)
    {
        this.danger = danger;
    }
    
    setRevealed(revealed: boolean)
    {
        this.revealed = revealed;
    }
    
    isRevealed()
    {
        return this.revealed;
    }
}
