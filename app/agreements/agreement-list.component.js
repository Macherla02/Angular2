"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var agreement_service_1 = require("./agreement.service");
//import {AgreementFilterPipe} from './agreement-filter.pipe';
var AgreementListComponent = /** @class */ (function () {
    function AgreementListComponent(_agreementService) {
        this._agreementService = _agreementService;
        this.pageTitle = "Agreement List";
        this.imageWidth = 50;
        this.showImage = false;
        this.showList = false;
        this.showGrid = true;
        this.ListAgreeFilter = "Leaf";
    }
    AgreementListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    AgreementListComponent.prototype.clickList = function () {
        this.showList = true;
        this.showGrid = false;
    };
    AgreementListComponent.prototype.clickGrid = function () {
        this.showGrid = true;
        this.showList = false;
    };
    AgreementListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("This is Agreement OnInit");
        //this.agreements = this._agreementService.getAgreements();
        this._agreementService.getAgreements()
            .subscribe(function (agreements) { return _this.agreements = agreements; }, function (error) { return _this.errorMessage = error; });
    };
    AgreementListComponent.prototype.onAmountClicked = function (message) {
        this.pageTitle = "Agreement List : Amount Paid by this Agreement is" + message;
    };
    AgreementListComponent = __decorate([
        core_1.Component({
            selector: 'pm-agreement',
            templateUrl: 'app/agreements/agreement-list.component.html'
        }),
        __metadata("design:paramtypes", [agreement_service_1.AgreementService])
    ], AgreementListComponent);
    return AgreementListComponent;
}());
exports.AgreementListComponent = AgreementListComponent;
//# sourceMappingURL=agreement-list.component.js.map