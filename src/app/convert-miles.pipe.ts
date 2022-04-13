import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMiles'
})
export class ConvertMilesPipe implements PipeTransform {

  transform(value: any, targetUnits:string): unknown {
    if(!value || Number.isNaN(value))
      return ''
    switch(targetUnits){
      case 'km':
        return value * 1.609;
      case 'm':
        return value * 1.609 * 1000;
      case 'cm':
        return value * 1.609 * 1000 * 1000;
      default:
        throw new Error('target unit not supported')
      
    }
    return null;
  }

}
