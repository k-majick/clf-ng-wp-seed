import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testp'
})
export class TestpPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
