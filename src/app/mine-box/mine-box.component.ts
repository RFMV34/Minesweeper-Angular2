import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-mine-box',
    templateUrl: './mine-box.component.html',
    styleUrls: ['./mine-box.component.css']
})
export class MineBoxComponent implements OnInit
{
    @Input() i;
    @Input() j;
    @Input() danger = 0;
    @Input() mine = false;
    
    constructor() {}

    ngOnInit()
    {
    }

}
