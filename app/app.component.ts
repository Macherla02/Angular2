import {Component} from '@angular/core';
import {AgreementService} from './agreements/agreement.service';

@Component({
	selector: 'pm-app',
	template: `<div><h1>This is Adi Mac</h1>
	<pm-emily></pm-emily><pm-product></pm-product><pm-agreement></pm-agreement></div>`,
	providers: [AgreementService]

})

export class AppComponent{

}


