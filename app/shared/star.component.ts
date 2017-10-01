import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component ({
    selector: 'star-rating',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
    //template: './star.component.html'

})

export class StarComponent implements OnChanges{
    starWidth: number;
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<String> = new EventEmitter<string>();
    ngOnChanges():void{
        this.starWidth =this.rating*86/5;
    }

    onClick(): void{
        this.ratingClicked.emit(`Rating Clicked is ${this.rating}`);
    }
}