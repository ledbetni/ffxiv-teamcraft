import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'encodeUriComponent',
    pure: true,
    standalone: true
})
export class EncodeUriComponentPipe implements PipeTransform {

  transform(value: string): string {
    return encodeURIComponent(value);
  }
}
