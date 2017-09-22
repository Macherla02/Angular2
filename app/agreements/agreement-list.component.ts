import {Component} from '@angular/core';
import {IAgreement} from './agreement';

@Component({
    selector:'pm-agreement',
    templateUrl:'app/agreements/agreement-list.component.html'
})

export class AgreementListComponent{
    pageTitle:string="Agreement List";
    imageWidth:number=50;
    showImage:boolean =false;
    agreements:IAgreement[]=   [{
        "agreementId": 1,
        "agreementProduct": "Leaf Rake",
        "startDate": "March 19, 2016",
        "endDate": "May 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "paymentType": "Weekly",
        "amount": 19.95,
        "status": "Active",
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "agreementId": 2,
        "agreementProduct": "Garden Cart",
        "startDate": "June 18, 2015",
        "endDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "paymentType": "Weekly",
        "amount": 32.99,
        "status": "Active",
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    }]

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        console.log("This is Agreement OnInit");
    }
}