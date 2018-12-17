import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolToYesOrNo'
})
export class BoolToYesOrNoPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? "Yes" : "No";
  }

}
