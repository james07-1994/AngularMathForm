import { AbstractControl } from '@angular/forms';

export class MathValidators {

    static addition(target: string, sourceOne: string, SourceTwo: string) {
        return (form: AbstractControl) => {
            const sum = form.value[target];
            const firstNumber = form.value[sourceOne];
            const secondNumber = form.value[SourceTwo];
            if (firstNumber + secondNumber === parseInt(sum)) {
                return null;
            }
            return { addition: true };


        };

    }

}

