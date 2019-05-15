import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FileSizePipe implements PipeTransform {
  transform(size: number, extension: string = 'GB') {
    return (size / 1024 ** 2).toFixed(2) + extension;
  }
}
