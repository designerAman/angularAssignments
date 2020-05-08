import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): unknown {
    const arrStr = value.split('');
    arrStr.reverse();
    return arrStr.join('');
  }

}
