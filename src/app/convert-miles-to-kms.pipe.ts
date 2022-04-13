import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMilesToKms'
})
export class ConvertMilesToKmsPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(Number.isNaN(value) || !value)
      return ''
      
    
    return 1.609 * value;
  }

}
