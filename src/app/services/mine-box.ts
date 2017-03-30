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

    /**
     * Constructor method
     * @param i location of box
     * @param j location of box
     */
    constructor(i: number, j: number)
    {
        this.i = i;
        this.j = j;
        this.danger = 0;
        this.mine = false;
        this.revealed = false;
    }
    
    /**
     * Method to set mine of this box
     * @param mine 
     */
    setMine(mine: boolean): void
    {
        this.mine = mine;
    }
    
    /**
     * Method to get mine from this box
     * @return boolean
     */
    getMine(): boolean
    {
        return this.mine;
    }
    
    /**
     * Set danger of this box, depends on neighbours
     * @param danger
     */
    setDanger(danger: number): void
    {
        this.danger = danger;
    }
    
    /**
     * Set if box is revealed or not
     * @param revealed
     */
    setRevealed(revealed: boolean): void
    {
        this.revealed = revealed;
    }
    
    /**
     * Get if box is revealed or not
     * @return boolean
     */
    isRevealed(): boolean
    {
        return this.revealed;
    }
}
