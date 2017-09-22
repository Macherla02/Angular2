"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AgreementListComponent = /** @class */ (function () {
    function AgreementListComponent() {
        this.pageTitle = "Agreement List";
        this.imageWidth = 50;
        this.showImage = false;
        this.agreements = [{
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
            }];
    }
    AgreementListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    AgreementListComponent.prototype.ngOnInit = function () {
        console.log("This is Agreement OnInit");
    };
    AgreementListComponent = __decorate([
        core_1.Component({
            selector: 'pm-agreement',
            templateUrl: 'app/agreements/agreement-list.component.html'
        })
    ], AgreementListComponent);
    return AgreementListComponent;
}());
exports.AgreementListComponent = AgreementListComponent;
//# sourceMappingURL=agreement-list.component.js.map