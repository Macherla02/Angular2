import {Component} from '@angular/core';
import {IAgreement} from './agreement';
import {AgreementService} from './agreement.service';
//import {AgreementFilterPipe} from './agreement-filter.pipe';

@Component({
    selector:'pm-agreement',
    templateUrl:'app/agreements/agreement-list.component.html'
})

export class AgreementListComponent{
    pageTitle:string="Agreement List";
    imageWidth:number=50;
    showImage:boolean =false;
    showList:boolean=false;
    showGrid:boolean=true;
    ListAgreeFilter: string="Leaf";
    agreements:IAgreement[];
    errorMessage:string;

    constructor(private _agreementService: AgreementService){}

    toggleImage(): void{
        this.showImage = !this.showImage;
    }
    clickList(): void{
        this.showList = true;
        this.showGrid = false;
    }
    clickGrid(): void{
        this.showGrid = true;
        this.showList = false;
    }
    ngOnInit(): void{
        console.log("This is Agreement OnInit");
        //this.agreements = this._agreementService.getAgreements();
        this._agreementService.getAgreements()
            .subscribe(agreements => this.agreements=agreements,
            error => this.errorMessage=<any>error)
    }

    onAmountClicked(message: string){
        this.pageTitle = "Agreement List : Amount Paid by this Agreement is" +message;
    }
}