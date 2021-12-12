import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: any): unknown {
    switch (value) {
      case 'N/A':
        return 'assets/images/not-found.png';
    }
    return value;
  }

}
