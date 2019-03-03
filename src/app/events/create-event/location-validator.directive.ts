import { Directive} from '@angular/core';
import { Validator, FormGroup , NG_VALIDATORS} from '@angular/forms';

@Directive ({
    selector:'[validateLocation]',
    providers:[{provide : NG_VALIDATORS , useExisting:locationValidator, multi:true}]
})
export class locationValidator implements Validator {
    validate(FormGroup:FormGroup):{[key:string]:any}{
        let addressControl=FormGroup.controls['address'];
        let cityControl=FormGroup.controls['city'];
        let countryControl=FormGroup.controls['country'];
        let onlineUrlControl=(<FormGroup>FormGroup.root).controls['onlineUrl'];
        
        if((addressControl && addressControl.value && cityControl && 
            cityControl.value && countryControl && countryControl.value)||(onlineUrlControl && onlineUrlControl.value)){
                return null;
            }else {
                return { validateLocation : false}
            }
        
    }
}