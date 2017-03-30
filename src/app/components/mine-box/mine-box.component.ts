/**
 * Minebox component class
 * @description graphic representation of box
 * @author Filip Gulan
 */
 
import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-mine-box',
    templateUrl: './mine-box.component.html',
    styleUrls: ['./mine-box.component.css']
})
export class MineBoxComponent implements OnInit
{
    @Input() i: number;
    @Input() j: number;
    @Input() danger = 0;
    @Input() mine = false;
    @Input() revealed = false;
    
    constructor() {}

    ngOnInit()
    {
    }

}
