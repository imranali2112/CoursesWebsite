import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateWords',
  standalone: true,
})
export class TruncateWordsPipe implements PipeTransform {
  transform(value: string, limits: number): string {
    if (!value) return '';
    {
      const words = value.split('');
      return words.length > limits
        ? words.slice(0, 100).join('') + '...'
        : value;
    }
  }
}
