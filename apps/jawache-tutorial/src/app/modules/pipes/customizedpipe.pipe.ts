import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customizedpipe'
})
export class CustomizedpipePipe implements PipeTransform {

  transform(value: string, fallback: string): string {
    let image = '';
    if (value) {
      image = value;
    } else {
      image = fallback
    }
    return image;
  }

}
