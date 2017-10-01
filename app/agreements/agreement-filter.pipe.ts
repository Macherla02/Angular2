import {Pipe, PipeTransform} from '@angular/core';
import {IAgreement} from './agreement';

@Pipe({
    name:'agrFilter'
})

export class AgreementFilterPipe implements PipeTransform{
    transform(value: IAgreement[], AgrfilterBy: string):IAgreement[] {
        AgrfilterBy = AgrfilterBy? AgrfilterBy.toLocaleLowerCase():null;
        return AgrfilterBy? value.filter((agreement:IAgreement)=> 
            agreement.agreementProduct.toLocaleLowerCase().indexOf(AgrfilterBy)!== -1):value;
    }
}