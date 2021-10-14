import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(array: any[], searchText: string): any[] {
    if(searchText.toLowerCase()){
      return array.filter((datos: any) => datos.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
      datos.lastName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 );
    } else {
      return array
    }
  }
}