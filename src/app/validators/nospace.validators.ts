import { AbstractControl, ValidationErrors } from "@angular/forms";

export class noSpace
{
    static noSpaceValidation(control: AbstractControl): ValidationErrors | null {

        let controlValue= control.value as string;

        if(controlValue.indexOf(' ')>=0)
        {
            return { noSpaceValidator: true }
        }else{
            return null;
        }
    }
}